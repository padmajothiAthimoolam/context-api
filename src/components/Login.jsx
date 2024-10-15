import React, { useState, useContext} from 'react'
import UserContext from '../context/UserContext';

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }

  return (
    <div>
        <h1> Login</h1>
        <input 
        type= "text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder='UserName'
        />
        <input 
        type="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='Password'
        />
        <button type="Submit" onClick={(e) => handleSubmit(e)}> Login</button>
    </div>
  )
}

export default Login
