import styles from '../../styles/Panel.module.css';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
function Form() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmitRegister(e) {
        e.preventDefault();
        createUser(username, password)
        resetInputField();
    }

    function resetInputField() {
        setUsername('')
        setPassword('')
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.h1}>Registro de Problemas</h1>
            <div className={styles.app}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.name}>
                        Nombre problema: {' '}
                        <input
                            className={styles.nameInput}
                            id="username"
                            name={username}
                            type="text"
                            onChange={handleUsernameChange}
                            value={username} />
                    </div>
                    <div className={styles.name}>
                        <input
                            className={styles.nameInput}
                            id="password"
                            name={password}
                            type="password"
                            onChange={handlePasswordChange}
                            value={password}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div >
    )
}
export default Form;