import React from 'react'
import { auth, logOut } from '../../auth/firebaseUtil'

const UserSetup = ({}) => {

  

  return (
    <div>
        <button type='button' onClick={logOut}> Log out </button>
    </div>
  )
}

export default UserSetup
