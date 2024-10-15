# React User Context Example

This project demonstrates the use of the Context API in React to manage user authentication state. It includes a simple login form and a profile display that shows the username of the logged-in user.

## Getting Started

To get this project up and running locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-user-context-example.git

2. ```bash
    npm install 

3. ```bash
    npm start

## Features
Context API for managing user state.
Simple login form to simulate user authentication.
Profile component that displays the username if logged in.

## Setting Up the User Context
1. Create a UserContext: In UserContext.js, create the context to hold user data.

```bash

import React from "react";

const UserContext = React.createContext();
export default UserContext;

```

2. Create a Provider: In UserContextProvider.js, create a provider component that manages user state.

```bash
import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;

```

Implementing Login Component
The Login.js component allows users to enter their username and password, updating the context upon submission.

```bash
import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };

    return (
        <div>
            <h1>Login</h1>
            <input 
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='Username'
            />
            <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />
            <button type="submit" onClick={handleSubmit}>Login</button>
        </div>
    );
};

export default Login;

```

Implementing Profile Component
The Profile.js component displays the username of the logged-in user.

````bash
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
    const { user } = useContext(UserContext);

    if (!user) return <h1>Not logged in</h1>;

    return (
        <h1>
            Profile: {user.username}
        </h1>
    );
};

export default Profile;
```