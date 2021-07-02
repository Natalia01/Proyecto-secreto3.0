import { Select } from 'antd'
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Panel.module.css'
const { Option } = Select;
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
function Selector({ onSetSelected, selectState }) {
    return (
        <Select
            placeholder="Nombre"
            value={selectState}
            onChange={onSetSelected}
            className={styles.selector}>
            {
                nameList.map((name) => {
                    return (
                        <Option key={name} value={name}>{name}</Option>
                    )
                })
            }
        </Select >
    )
}
export default Selector;