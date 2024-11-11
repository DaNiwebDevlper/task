import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Router } from 'react-router-dom'
import { Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import AIP from './pages/AIP.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/aip' element={<AIP />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
