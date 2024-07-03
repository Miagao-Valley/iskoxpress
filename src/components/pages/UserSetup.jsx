import React from 'react'
import { auth, logOut } from '../../auth/firebaseUtil'

const UserPage = ({}) => {

  const user = auth.currentUser

  return (
    <div>
        hi {user.email}, welcome to IskoXpress
        <button type='button' onClick={logOut}> Log out </button>
    </div>
  )
}

export default UserPage
