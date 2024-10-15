import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext);

    if(!user.username) return <h1>Not logged in</h1>

  return (
    <h1>
      Profile: {user.username}
    </h1>
  )
}

export default Profile
