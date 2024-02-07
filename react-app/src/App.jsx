import React from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Users from './pages/Users'
import NotFound from './pages/NotFound'
import UserDetails from './pages/UserDetails'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
      <>
        <Navbar/>
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/users' element={<Users />}/>
            <Route path='/users/:userid' element={<UserDetails />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </div>
      </>
  )
}

export default App