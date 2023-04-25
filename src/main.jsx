import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Player from './player/Player'
import Hitters from './player/player-details/Hitters'
import Pitchers from './player/player-details/Pitchers'
import Home from './pages/Home'
import Admin from './pages/Admin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DataProvider } from './context/counterContext'
import Sorry from './pages/Sorry'
import PrivateRoute from './components/PrivateRoute'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <DataProvider>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/Player" element={<Player/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/sorry" element={<Sorry/>} />

          <Route element={<PrivateRoute/>}>
            <Route path="/hitters/:name" element={<Hitters/>} />
            <Route path="/pitchers/:name" element={<Pitchers/>} />
          </Route>

        </Routes>

      </BrowserRouter>
    </DataProvider>

  </React.StrictMode>,
)
