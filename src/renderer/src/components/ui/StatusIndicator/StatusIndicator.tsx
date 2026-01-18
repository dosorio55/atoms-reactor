import React from 'react'
import './StatusIndicator.css'

export interface StatusIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: 'success' | 'error' | 'warning' | 'info' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
  pulse?: boolean
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status = 'neutral',
  size = 'md',
  pulse = false,
  className = '',
  ...props
}) => {
  const classNames = [
    'status-indicator',
    `status-indicator--${status}`,
    `status-indicator--${size}`,
    pulse && 'status-indicator--pulse',
    className
  ]
    .filter(Boolean)
    .join(' ')

  return <span className={classNames} {...props} />
}

export default StatusIndicator
