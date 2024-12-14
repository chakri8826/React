import { useState } from 'react'
import './App.css'
import UserContextProvider from "./context/UserContextProvider";
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './context/UserContext';


function App() {
  return (
    <>
        <UserContextProvider> 
            <h1>Chakradhar Consistency</h1>
            <Login />
            <Profile />
        </UserContextProvider>
        
        
    </>
  )
}

export default App


