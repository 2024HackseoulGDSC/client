import React from 'react';
import styles from './logo.module.css';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log("클릭됨");
        navigate('/');
    }

    return(
        <div>
            <img className={ styles.logo }src='public/logo.svg' onClick={handleClick}/>
        </div>
    )
}

export default Logo;
