import React from 'react'

export default function Click2({isOnline}) {
    return (
        <div>
            <h3>Try the ternary !</h3>
            <button className={isOnline?"brown":"beige"}>Boolean Ternary</button>
        </div>
    )
}
