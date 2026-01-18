import React from 'react'
import './Input.css'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  error?: string
  fullWidth?: boolean
}

export const Input: React.FC<InputProps> = ({
  size = 'md',
  leftIcon,
  rightIcon,
  error,
  fullWidth = false,
  disabled,
  className = '',
  ...props
}) => {
  const wrapperClassNames = [
    'input-wrapper',
    `input-wrapper--${size}`,
    leftIcon && 'input-wrapper--has-left-icon',
    rightIcon && 'input-wrapper--has-right-icon',
    error && 'input-wrapper--error',
    disabled && 'input-wrapper--disabled',
    fullWidth && 'input-wrapper--full-width',
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={wrapperClassNames}>
      {leftIcon && <span className="input__icon input__icon--left">{leftIcon}</span>}
      <input className="input" disabled={disabled} {...props} />
      {rightIcon && <span className="input__icon input__icon--right">{rightIcon}</span>}
      {error && <span className="input__error">{error}</span>}
    </div>
  )
}

export default Input
