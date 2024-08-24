import React from 'react';
import styles from './styles.module.css';

export default Logo = () => {
    return(
        <div>
            <img className={ styles.logo }src='public/logo.svg'/>
        </div>
    )
}