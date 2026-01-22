import React, { useState } from 'react'
import { Sidebar, SidebarSection, SidebarItem, SearchBar, Avatar } from '../ui'
import {
  HomeIcon,
  FolderIcon,
  SettingsIcon,
  AtomIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '../icons'
import { Link, useLocation } from 'react-router-dom'

interface AppSidebarProps {
  collapsed: boolean
  onToggleCollapse: () => void
  isMobile: boolean
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  collapsed,
  onToggleCollapse,
  isMobile
}) => {
  const [searchValue, setSearchValue] = useState('')
  const location = useLocation()

  const activeView: string = (() => {
    const path = location.pathname
    if (path === '/') return 'overview'
    if (path === '/projects') return 'projects'
    if (path === '/settings') return 'settings'
    if (path === '/chats') return 'chats'
    return ''
  })()

  return (
    <Sidebar className={`app-sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <AtomIcon />
          {!collapsed && <span className="sidebar-logo-text">Atoms Reactor</span>}
        </div>
        {!isMobile && (
          <button
            className="sidebar-toggle"
            onClick={onToggleCollapse}
            aria-label="Toggle sidebar"
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </button>
        )}
      </div>

      {!collapsed && (
        <div className="sidebar-search">
          <SearchBar
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onClear={() => setSearchValue('')}
            shortcut="⌘K"
            size="sm"
          />
        </div>
      )}

      <SidebarSection label={collapsed ? '' : 'Main'}>
        <Link to="/">
          <SidebarItem icon={<HomeIcon />} active={activeView === 'overview'}>
            Overview
          </SidebarItem>
        </Link>

        <SidebarItem icon={<FolderIcon />} active={activeView === 'projects'}>
          Projects
        </SidebarItem>

        <Link to="/chats">
          <SidebarItem icon={<FolderIcon />} active={activeView === 'chats'}>
            Chats
          </SidebarItem>
        </Link>
        <Link to="/settings">
          <SidebarItem icon={<SettingsIcon />} active={activeView === 'settings'}>
            Settings
          </SidebarItem>
        </Link>
      </SidebarSection>

      <SidebarSection label={collapsed ? '' : 'Workspaces'}>
        <SidebarItem icon={<Avatar name="P" size="sm" />}>Planetaria</SidebarItem>
        <SidebarItem icon={<Avatar name="T" size="sm" />}>Tailwind Labs</SidebarItem>
        <SidebarItem icon={<Avatar name="P" size="sm" />}>Protocol</SidebarItem>
      </SidebarSection>

      <div className="sidebar-footer">
        <SidebarItem icon={<SettingsIcon />}>Settings</SidebarItem>
      </div>
    </Sidebar>
  )
}
