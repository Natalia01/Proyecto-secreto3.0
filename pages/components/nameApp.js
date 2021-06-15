import React, { useState } from 'react'
import styles from '../../styles/Panel.module.css'
const NameApp = ({ handleChange }) => {
    return (
        <div className={styles.nameApp}>
            <input className={styles.nameInput} type="text" onChange={handleChange} />
        </div>
    );
};
export default NameApp;

