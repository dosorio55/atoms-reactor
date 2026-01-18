import React from 'react'
import './SearchBar.css'

export interface SearchBarProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg'
  shortcut?: string
  onClear?: () => void
  fullWidth?: boolean
}

const SearchIcon: React.FC = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
      clipRule="evenodd"
    />
  </svg>
)

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
        <SearchIcon />
      </span>
      <input
        type="text"
        className="search-bar__input"
        value={value}
        {...props}
      />
      {shortcut && !hasValue && (
        <span className="search-bar__shortcut">{shortcut}</span>
      )}
      {hasValue && onClear && (
        <button
          type="button"
          className="search-bar__clear"
          onClick={onClear}
          aria-label="Clear search"
        >
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default SearchBar
