import React from 'react'
// import {useParams} from 'react-router-dom'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
    console.log(userid)
  return (
    <div class="bg-gray-800 text-white text-3xl p-4">
        User: {userid}
    </div>
  )
}

export default User


