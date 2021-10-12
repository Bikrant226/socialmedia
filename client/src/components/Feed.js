import '../styles/feed.css';
import React, {useState} from 'react';
import users from './dummyData';
import LikeCounter from './LikeCounter';

function Feed() {
    const [isHidden,setIsHidden]=useState(true);


    const handleCommentClick=(e)=>{
        e.preventDefault();
        setIsHidden(!isHidden);
    }
    
    return (
        <React.Fragment>
        {users.map((user)=>(
            <div className="feedWrapper" key={user.id}>
                <div className="header">
                    <img src={user.srcpp} alt="profilepic"  className="profilephoto"/>
                    <span>{user.username}<br/>  2h</span>
                </div>
                    <img src={user.src} alt="pic" className="photo"/>         
                    <hr />
                    <div className="footer" key={user.id}>
                        <LikeCounter id={user.id}/>
                        <span onClick={handleCommentClick}>Comment</span>
                        <span>Share</span>
                    </div>
            </div>
        ))}
        </React.Fragment>
    )
}

export default Feed
