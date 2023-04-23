import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Player from './player/Player'
import Hitters from './player/player-details/Hitters'
import Pitchers from './player/player-details/Pitchers'
import Home from './pages/Home'
import Admin from './pages/Admin'

const router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "/player", element: <Player/> },
  { path: "/hitters/:name", element: <Hitters/> },
  { path: "/home", element: <Home/> },
  { path: "/admin", element: <Admin/> },
  { path: "/pitchers/:name", element: <Pitchers/> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
