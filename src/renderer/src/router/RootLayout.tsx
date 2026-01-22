import React from 'react'
import { Outlet } from 'react-router-dom'
import { DashboardLayout } from '../components/layout'

export function RootLayout(): React.JSX.Element {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  )
}
