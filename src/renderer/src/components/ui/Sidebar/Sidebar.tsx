import React from 'react'
import './Sidebar.css'

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  collapsed?: boolean
}

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  collapsed = false,
  className = '',
  ...props
}) => {
  const classNames = ['sidebar', collapsed && 'sidebar--collapsed', className]
    .filter(Boolean)
    .join(' ')

  return (
    <aside className={classNames} {...props}>
      {children}
    </aside>
  )
}

export interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({
  children,
  label,
  className = '',
  ...props
}) => {
  return (
    <div className={`sidebar__section ${className}`} {...props}>
      {label && <div className="sidebar__section-label">{label}</div>}
      <div className="sidebar__section-content">{children}</div>
    </div>
  )
}

export interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  active?: boolean
  badge?: React.ReactNode
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  icon,
  active = false,
  badge,
  className = '',
  ...props
}) => {
  const classNames = ['sidebar__item', active && 'sidebar__item--active', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classNames} role="button" tabIndex={0} {...props}>
      {icon && <span className="sidebar__item-icon">{icon}</span>}
      <span className="sidebar__item-label">{children}</span>
      {badge && <span className="sidebar__item-badge">{badge}</span>}
    </div>
  )
}

export default Sidebar
