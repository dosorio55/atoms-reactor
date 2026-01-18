import React, { useState, useRef, useEffect } from 'react'
import './Dropdown.css'

export interface DropdownProps {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: 'left' | 'right'
  className?: string
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  align = 'left',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const classNames = ['dropdown', isOpen && 'dropdown--open', className].filter(Boolean).join(' ')

  return (
    <div className={classNames} ref={dropdownRef}>
      <div className="dropdown__trigger" onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <div className={`dropdown__menu dropdown__menu--${align}`}>
          {children}
        </div>
      )}
    </div>
  )
}

export interface DropdownItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  disabled?: boolean
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  icon,
  disabled = false,
  className = '',
  onClick,
  ...props
}) => {
  const classNames = [
    'dropdown__item',
    disabled && 'dropdown__item--disabled',
    className
  ].filter(Boolean).join(' ')

  return (
    <div
      className={classNames}
      onClick={disabled ? undefined : onClick}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {icon && <span className="dropdown__item-icon">{icon}</span>}
      <span className="dropdown__item-label">{children}</span>
    </div>
  )
}

export const DropdownDivider: React.FC = () => {
  return <div className="dropdown__divider" />
}

export default Dropdown
