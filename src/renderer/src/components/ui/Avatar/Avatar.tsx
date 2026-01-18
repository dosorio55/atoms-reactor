import React from 'react'
import './Avatar.css'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  name?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  status?: 'online' | 'offline' | 'away' | 'busy'
}

const getInitials = (name: string): string => {
  const parts = name.trim().split(' ')
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  name = '',
  size = 'md',
  status,
  className = '',
  ...props
}) => {
  const classNames = ['avatar', `avatar--${size}`, className].filter(Boolean).join(' ')

  return (
    <div className={classNames} {...props}>
      {src ? (
        <img src={src} alt={alt || name} className="avatar__image" />
      ) : (
        <span className="avatar__initials">{getInitials(name || 'U')}</span>
      )}
      {status && <span className={`avatar__status avatar__status--${status}`} />}
    </div>
  )
}

export default Avatar
