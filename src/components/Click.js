import React from 'react';


 const Click=({isOnline, idle})=> {
     const status=()=>{
         if(isOnline){
             return "yellow";
         }
         else if(idle){
             return "orange";
         }
         else{
             return "green";
         }
     }
    return (
        <div>
         <button className={status()}>Call a function!!</button>
        </div>
    )
}
export default Click;