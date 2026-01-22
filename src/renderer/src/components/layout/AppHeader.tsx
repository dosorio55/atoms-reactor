import React from 'react'
import { Button, Dropdown, DropdownItem, DropdownDivider, Avatar } from '../ui'
import { BellIcon, MenuIcon, UserIcon, SettingsIcon } from '../icons'

interface AppHeaderProps {
  title: string
  isMobile: boolean
  onMenuToggle: () => void
}

export const AppHeader: React.FC<AppHeaderProps> = ({ title, isMobile, onMenuToggle }) => {
  return (
    <header className="app-header">
      <div className="header-left">
        {isMobile && (
          <button className="mobile-menu-toggle" onClick={onMenuToggle} aria-label="Toggle menu">
            <MenuIcon />
          </button>
        )}
        <h1 className="header-title">{title}</h1>
      </div>

      <div className="header-right">
        <Button variant="ghost" size="sm">
          <BellIcon />
        </Button>

        <Dropdown
          trigger={
            <button className="user-menu-trigger">
              <Avatar name="Alex Smith" size="sm" status="online" />
            </button>
          }
          align="right"
        >
          <DropdownItem icon={<UserIcon />}>Profile</DropdownItem>
          <DropdownItem icon={<SettingsIcon />}>Settings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
      </div>
    </header>
  )
}
