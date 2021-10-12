import Feed from "./Feed";
import Post from "./Post";
import Logout from "./Logout";
import '../styles/content.css';
import React,{useState} from 'react'
import {Switch,Route,Redirect } from 'react-router-dom';

function Content() {

    const [images,setImages]=useState({
        image:'',
        des:''
    })

    const [isLoggedOut,setIsLoggedOut]=useState(false);

    return (
      
       
        <div className="contentwrapper">
            <Switch>
                    <Route exact path='/home'>
                        <Feed/>
                    </Route>
                    <Route path="/home/post">
                        <Post setImages={setImages}/>
                    </Route>
                    <Route path="/home/logout">
                        <Logout setIsLoggedOut={setIsLoggedOut} />
                    </Route>
            </Switch> 
           {
               isLoggedOut ? <Redirect to='/'/>:<Redirect to='/home'/>
           }
        </div>  
        
    )
}

export default Content
