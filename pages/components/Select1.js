import { Select, Option } from 'antd'
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';

const nameList = [
    "User 0",
    "User 1",
    "User 2",
    "User 3",
    "User 4",
    "User 5",
    "User 6",
    "User 7"
]
function Selector({ onSetSelected }) {
    const [nameState, setNameState] = useState('')
    const handleChange = (e, onStateChange) => {
        onStateChange(e)
        console.log(nameState)
    }

    return (
        <Select
            placeholder="Nombre"
            value={nameState}
            onChange={(e) => onSetSelected(e)}
            style={{ width: 120 }}>
            {
                nameList.map((name) => {
                    return (
                        <option key={name} value={name}>{nameState}</option>
                    )
                })
            }
        </Select >
    )
}
export default Selector;