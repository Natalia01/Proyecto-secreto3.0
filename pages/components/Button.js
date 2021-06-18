import { Button } from 'antd'
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Panel.module.css'

function ButtonApp({ handleSubmit }) {

    return (
        <Button
            className={styles.buttonApp}
            onClick={handleSubmit}>
            Enviar
        </Button >
    )
}
export default ButtonApp;