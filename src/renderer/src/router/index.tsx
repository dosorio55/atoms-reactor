import { createHashRouter } from 'react-router-dom'
import { RootLayout } from './RootLayout'
import ComponentDemo from '../pages/ComponentDemo'
import Home from '@renderer/pages/Home'
import Settings from '@renderer/pages/Settings'

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
        path: '/components',
        element: <ComponentDemo />
      }
    ]
  }
])
