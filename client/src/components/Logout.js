import React from 'react'

function Logout(props) {
   
    return (
        <div>
            <button onClick={() => props.setIsLoggedOut(!props.isLoggedOut)}>Logout</button>
        </div>
    )
}

export default Logout
