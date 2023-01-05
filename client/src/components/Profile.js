import React from 'react'
import Portfolio from './Portfolio'

function Profile({user, setUser}){
    return(
        <div className="profile-container">
            <div className="image-container">
                <img  className="profile-photo" src={user.featured_image.url}/>
            </div>
            <h4 className="profile-user-name">{user.username}</h4>
            <Portfolio user={user} setUser={setUser}/>
        </div>
    )
}


export default Profile