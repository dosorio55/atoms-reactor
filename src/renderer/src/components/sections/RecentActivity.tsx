import React from 'react'
import { GlassCard } from '../ui'
import './RecentActivity.css'

interface RecentAgent {
  id: string
  icon: React.ReactNode
  title: string
  description?: string
  features?: string[]
  actionLabel?: string
  variant?: 'compact' | 'detailed'
}

interface RecentActivityProps {
  title?: string
  subtitle?: string
  agents: RecentAgent[]
  onAgentClick?: (id: string) => void
  onMoreClick?: () => void
}

export const RecentActivity: React.FC<RecentActivityProps> = ({
  title = 'Continue where you left off',
  subtitle = 'Pick up your recent agents and automations',
  agents,
  onAgentClick,
  onMoreClick
}) => {
  return (
    <div className="recent-activity">
      <div className="recent-activity-header">
        <h2 className="recent-activity-title">{title}</h2>
        {subtitle && <p className="recent-activity-subtitle">{subtitle}</p>}
      </div>

      <div className="recent-activity-grid">
        {agents.map((agent) => (
          <GlassCard
            key={agent.id}
            icon={agent.icon}
            title={agent.title}
            description={agent.description}
            features={agent.features}
            actionLabel={agent.actionLabel}
            variant={agent.variant}
            onAction={() => onAgentClick?.(agent.id)}
            onClick={() => onAgentClick?.(agent.id)}
          />
        ))}

        {onMoreClick && (
          <GlassCard
            icon={
              <svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            }
            title="View All"
            description="See all your agents and automations"
            variant="compact"
            actionLabel="Browse"
            onAction={onMoreClick}
            onClick={onMoreClick}
          />
        )}
      </div>
    </div>
  )
}
