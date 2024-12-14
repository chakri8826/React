import React from 'react'
import { useState } from 'react'
import {UserContext} from '../context/UserContext'
import { useContext } from 'react'


function Login() {
    const [Username,setUsername]  = useState("")
    const [password, setpassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({ Username, password });
    }


    return (
      <div>
        <h1>Login</h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={Username}
          type="text"
          placeholder="Username"
        />
        <input
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          type="text"
          placeholder="Password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
}

export default Login


