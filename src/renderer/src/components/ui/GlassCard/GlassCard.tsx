import React from 'react'
import './GlassCard.css'

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
  description?: string
  features?: string[]
  actionLabel?: string
  onAction?: () => void
  variant?: 'compact' | 'detailed'
}

export const GlassCard: React.FC<GlassCardProps> = ({
  icon,
  title,
  description,
  features,
  actionLabel,
  onAction,
  variant = 'compact',
  className,
  ...props
}) => {
  const isCompact = variant === 'compact'

  return (
    <div className={`glass-card ${variant} ${className || ''}`.trim()} {...props}>
      <div className="glass-card-content">
        {icon && <div className="glass-card-icon">{icon}</div>}

        <div className="glass-card-text">
          <h3 className="glass-card-title">{title}</h3>
          {description && <p className="glass-card-description">{description}</p>}
        </div>

        {!isCompact && features && features.length > 0 && (
          <ul className="glass-card-features">
            {features.map((feature, index) => (
              <li key={index} className="glass-card-feature">
                <span className="feature-icon">•</span>
                <span className="feature-text">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {actionLabel && onAction && (
        <button className="glass-card-action" onClick={onAction}>
          <span>{actionLabel}</span>
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  )
}
