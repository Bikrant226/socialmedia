import React,{useState} from 'react';
import axios from 'axios';
import '../styles/post.css';

function Post(props) {

    const [file,setFile]=useState();
    const [desc,setDesc]=useState('');
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const data=new FormData();
        data.append('description',desc);
        data.append('file',file);
        
        axios.post('http://localhost:3001/api/post',data)
             .then(res=>props.setImages({
                 image:res.data.image,
                 des:res.data.desc
                }))
             .catch(error=>console.log(error))

    }


    const handleFileChange=(e)=>{
        setFile(e.target.files[0]);
    }

    const handleDescChange=(e)=>{
        setDesc(e.target.value);
    }

    return (
        <form className="post-wrapper" onSubmit={handleSubmit} encType='multipart/form-data'>
            <input 
                type="file" 
                placeholder="Upload a photo" 
                name='file'
                required
                onChange={handleFileChange}
            />
            <input 
                type="text" 
                name="desc" 
                onChange={handleDescChange}
                placeholder="Add a caption" 
            />
            <button type="submit">Upload</button>
        </form>
    )
}

export default Post
