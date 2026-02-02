import React from 'react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'
import './SearchBar.css'

export interface SearchBarProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg'
  shortcut?: string
  onClear?: () => void
  fullWidth?: boolean
}

export const SearchBar: React.FC<SearchBarProps> = ({
  size = 'md',
  shortcut,
  onClear,
  fullWidth = false,
  value,
  className = '',
  ...props
}) => {
  const hasValue = value && String(value).length > 0

  const wrapperClassNames = [
    'search-bar',
    `search-bar--${size}`,
    fullWidth && 'search-bar--full-width',
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={wrapperClassNames}>
      <span className="search-bar__icon">
        <MagnifyingGlassIcon />
      </span>
      <input type="text" className="search-bar__input" value={value} {...props} />
      {shortcut && !hasValue && <span className="search-bar__shortcut">{shortcut}</span>}
      {hasValue && onClear && (
        <button
          type="button"
          className="search-bar__clear"
          onClick={onClear}
          aria-label="Clear search"
        >
          <XMarkIcon />
        </button>
      )}
    </div>
  )
}

export default SearchBar
