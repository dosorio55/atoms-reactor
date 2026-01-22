import React from 'react'
import { RecentActivity } from '../components/sections'

function Home(): React.JSX.Element {
  const recentAgents = [
    {
      id: '1',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Build MVPs Fast',
      description:
        'Copy, paste, customize—and launch your MVP faster than ever with our developer...',
      features: ['Copy & Paste Ready', 'Developer-First', 'MVP Optimized', 'Zero Setup Required'],
      actionLabel: 'Start Building',
      variant: 'detailed' as const
    },
    {
      id: '2',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </svg>
      ),
      title: 'Data Processing',
      description: 'Automated data pipeline for ETL operations',
      actionLabel: 'Continue',
      variant: 'compact' as const
    },
    {
      id: '3',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
        </svg>
      ),
      title: 'Analytics Bot',
      description: 'Real-time analytics and reporting automation',
      actionLabel: 'View Results',
      variant: 'compact' as const
    }
  ]

  const handleAgentClick = (id: string): void => {
    console.log('Agent clicked:', id)
  }

  const handleMoreClick = (): void => {
    console.log('View all clicked')
  }

  return (
    <RecentActivity
      title="Continue where you left off"
      subtitle="Pick up your recent agents and automations"
      agents={recentAgents}
      onAgentClick={handleAgentClick}
      onMoreClick={handleMoreClick}
    />
  )
}

export default Home
