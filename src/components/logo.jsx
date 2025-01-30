import React from 'react';
import image from "../images/image.png";
import './logo.css'

const Logo = () => { 
    return (
        
            
        <div className='logo'> 
            <img src={image} alt='placement logo' height={325} width={400}/>   
        </div>
        
    );
};

export default Logo;