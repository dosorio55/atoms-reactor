import { createHashRouter } from 'react-router-dom'
import { RootLayout } from './RootLayout'
import Home from '@renderer/pages/Home'
import Settings from '@renderer/pages/Settings'
import Chats from '@renderer/pages/Chats'
import ComponentDemo from '@renderer/pages/ComponentDemo'

export const router = createHashRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/chats',
        element: <Chats />
      },
      {
        path: '/components',
        element: <ComponentDemo />
      }
    ]
  }
])
