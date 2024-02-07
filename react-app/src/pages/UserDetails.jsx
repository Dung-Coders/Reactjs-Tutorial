import React from 'react'
import {useParams} from 'react-router-dom'

function UserDetails() {
    let {userid} = useParams()
  return (
    <div>UserDetails of {userid}</div>
  )
}

export default UserDetails