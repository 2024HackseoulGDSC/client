import React, { useEffect, useState } from 'react';
import styles from './search-field.module.css';

const SearchField = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleClick = (_) => {
        console.log(searchTerm)
    }

    return(
        <div className={styles.searchContainer}>
            <input type="text" placeholder="검색" value={searchTerm} onChange={handleSearchChange} className={styles.search}></input>
            <button onClick={handleClick}></button>
        </div>
    )
}

export default SearchField;