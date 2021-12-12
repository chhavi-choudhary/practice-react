import React from 'react'

const UserDetails=({userInfo})=> {

    return (
        <div>
            <h1>you can get all the user Details here!!</h1>
            <p>UserName:{userInfo.name}</p>
            <p>Stree Address:{userInfo.address.street}</p>
            <button onClick={userInfo.shout}>Trigger Function</button>
        </div>
    )
}
export default UserDetails;