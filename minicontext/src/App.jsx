import { useState } from 'react'

import './App.css'
// import Usercontext from './components/usercontext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'





function App() {
  const [count, setCount] = useState(0)

  return (
  <UserContextProvider>
    <Login/>
    <Profile/>


  </UserContextProvider>
   
  )
}

export default App
