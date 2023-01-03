import React from 'react'
import Portfolio from './Portfolio'

function Profile({user, setUser}){
    return(
        <div>
            <Portfolio user={user} setUser={setUser}/>
            
        </div>
    )
}


export default Profile