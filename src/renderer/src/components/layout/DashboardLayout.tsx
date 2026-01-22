import React, { useState, useEffect } from 'react'
import { AppSidebar } from './AppSidebar'
import { AppHeader } from './AppHeader'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = (): void => {
      const mobile = window.innerWidth < 1024
      setIsMobile(mobile)
      if (mobile) {
        setSidebarCollapsed(true)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleToggleSidebar = (): void => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <div className="app-container">
      <AppSidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={handleToggleSidebar}
        isMobile={isMobile}
      />

      <div className="app-main">
        <AppHeader title="Dashboard" isMobile={isMobile} onMenuToggle={handleToggleSidebar} />

        <main className="app-content">{children}</main>
      </div>
    </div>
  )
}
