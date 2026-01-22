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
import { Link } from 'react-router-dom'

interface AppSidebarProps {
  collapsed: boolean
  onToggleCollapse: () => void
  isMobile: boolean
  activeView: string
  onViewChange: (view: string) => void
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  collapsed,
  onToggleCollapse,
  isMobile,
  activeView,
  onViewChange
}) => {
  const [searchValue, setSearchValue] = useState('')

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
          <SidebarItem
            icon={<HomeIcon />}
            active={activeView === 'overview'}
            onClick={() => onViewChange('overview')}
          >
            Overview
          </SidebarItem>
        </Link>

        <SidebarItem
          icon={<FolderIcon />}
          active={activeView === 'projects'}
          onClick={() => onViewChange('projects')}
        >
          Projects
        </SidebarItem>
        <Link to="/settings">
          <SidebarItem
            icon={<SettingsIcon />}
            active={activeView === 'settings'}
            onClick={() => onViewChange('settings')}
          >
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
