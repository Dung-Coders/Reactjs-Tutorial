import React from 'react'
import { useNavigate } from 'react-router-dom'


function Profile() {
  let navigate = useNavigate();
  const redirectToUsers = () => {
    navigate('/users')
  }
  return (
    <div>Profile page
      <button onClick={redirectToUsers}>See other Users</button>
    </div>
  )
}

export default Profile