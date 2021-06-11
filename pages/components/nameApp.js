import React, { useState } from 'react'
import styles from '../../styles/Panel.module.css'
const nameApp = () => {
    const [nameState, setNameState] = useState('')
    const handleChange = (value) => {
        setNameState(value)
    }
    return (
        <div className={styles.nameApp}>
            <input type="text" onChange={handleChange} style={{ width: 60 }} />
        </div>
    );
};
export default nameApp;

