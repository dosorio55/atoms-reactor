import React from 'react'
import './List.css'

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  divided?: boolean
}

export const List: React.FC<ListProps> = ({
  children,
  divided = false,
  className = '',
  ...props
}) => {
  const classNames = ['list', divided && 'list--divided', className].filter(Boolean).join(' ')

  return (
    <div className={classNames} role="list" {...props}>
      {children}
    </div>
  )
}

export interface ListItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  icon?: React.ReactNode
  title: React.ReactNode
  subtitle?: React.ReactNode
  trailing?: React.ReactNode
  status?: React.ReactNode
  interactive?: boolean
}

export const ListItem: React.FC<ListItemProps> = ({
  icon,
  title,
  subtitle,
  trailing,
  status,
  interactive = true,
  className = '',
  ...props
}) => {
  const classNames = [
    'list-item',
    interactive && 'list-item--interactive',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classNames} role="listitem" {...props}>
      {status && <div className="list-item__status">{status}</div>}
      {icon && <div className="list-item__icon">{icon}</div>}
      <div className="list-item__content">
        <div className="list-item__title">{title}</div>
        {subtitle && <div className="list-item__subtitle">{subtitle}</div>}
      </div>
      {trailing && <div className="list-item__trailing">{trailing}</div>}
    </div>
  )
}

export default List
