import React,{useState,useEffect} from 'react';
import '../styles/login.css';
import axios from 'axios';
import { Link,Redirect } from 'react-router-dom';
function Login(props) {
    const [formData,setFormData]=useState({
        email:'',
        password:''
    });

    const [error,setError]=useState();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/api/auth/login',formData)
             .then((res)=>{
                    props.setIsLoggedIn(!props.isLoggedIn)
                })
             .catch(err=>setError(err.response.data))
    }

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    return (
        <form className="login-wrapper" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email" 
                name="email"
                id="email"
                required
                onChange={handleChange}
            />
            <input 
                type="password" 
                name="password" 
                id="password"
                placeholder="Password" 
                required
                onChange={handleChange}
            />
            <button type="submit">Login</button>
            {error!=='' && <p>{error}</p>}
            <Link to='/register' id='sign'>Signup</Link>
        </form>
    )
}

export default Login
