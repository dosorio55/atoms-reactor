import React from 'react'
import './styles/global.css'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

function App(): React.JSX.Element {
  return <RouterProvider router={router} />
}

export default App
