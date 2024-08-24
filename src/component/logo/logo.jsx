import React from 'react';
import styles from './logo.module.css';

const Logo = () => {
    return(
        <div>
            <img className={ styles.logo }src='public/logo.svg'/>
        </div>
    )
}

export default Logo;