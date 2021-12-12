import React from 'react'

 const Hello=(props)=>{
     console.log(props)
    return (
        <div>
            <h1>What are props!!</h1>
            <h2>Do You Know {props.userName}, that anna's favorite color is {props.favoritecolor}</h2>
            <p></p>
        </div>
    )
    }
export default Hello;