import React from 'react'

 const Hello=({userName, favoritecolor, myBoolean})=>{
     
    return (
        <div>
            <h1 className={myBoolean?"greenText":"redText"}>I am a boolean!</h1>
            <h2>What are props!!</h2>
            <h2>Do You Know {userName}, that anna's favorite color is {favoritecolor}</h2>
            <p></p>
        </div>
    )
    }
export default Hello;