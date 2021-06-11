import { Button } from 'antd'
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';

function ButtonApp({ onSend }) {
    const [issueState, setIssueState] = useState('')

    return (
        <Button
            onClick={onSend}>
            Enviar
        </Button >
    )
}
export default ButtonApp;