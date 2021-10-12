import React,{useState} from 'react'

function LikeCounter(props) {
    const [like,Countlike]=useState(0);  
    const handleClick=(e)=>{
        e.preventDefault();
        Countlike(like+1);
    }

    return (    
        <div key={props.id}>
            {like!==0 && <span>{like} </span>}
            <span  onClick={handleClick}>Like</span>
        </div>
    )
}

export default LikeCounter
