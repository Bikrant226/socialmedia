import React,{useState} from 'react';
import 'axios';
import '../styles/register.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Signup() {

    const [formData,setFormData]=useState({
        email:"",
        username:'',
        password:''
    });

    const [error,setError]=useState();
    
   

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/api/auth/register',formData)
             .then(res=>console.log(res.data))
             .catch(err=>setError(err.response.data))

    }



    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }



    return (
        <form className="register-wrapper" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Username" 
                name="username" 
                required 
                onChange={handleChange}
            />
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
                placeholder="Password" 
                name="password" 
                required 
                onChange={handleChange}
            />
            <button type="submit">Register</button>
            <Link to='/'>Login</Link>
            {error!=='' && <p>{error}</p>}
        </form>
    )
}

export default Signup
