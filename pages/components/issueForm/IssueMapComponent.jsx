import { Row, Col } from 'antd'
import { useState } from 'react';
import styles from '/styles/Panel.module.css'
import IssueDetailsComponent from './IssueDetailsComponent'

const IssueMapComponent = ({ id, operationNumber, date, resolvedUploadedImages, state, priority, description, setIssuesFunction }) => {
    const [visible, setVisible] = useState(false)
    const apiRequest = { id, resolvedUploadedImages }
    return (
        <>
            <Row key={id} className={styles.listRows}>
                <Col span={4}>
                    <div className={`${styles.circleSpan}
                    ${styles[`priority-${priority}`]}`} />
                </Col>
                <Col span={6}>
                    {operationNumber}
                </Col>
                <Col span={6}>
                    {new Date(date).toLocaleString([],
                        { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </Col>
                <Col span={4}>
                    <svg className={styles.icons} onClick={async () => {
                        await fetch('../api/faunaQueries/deleteIssue', { // NO ME ESTAN FUNCIONANDOOOOOO POR QUEEEEEE SI ANTES FUNCIONABAAAAAA
                            method: 'POST',
                            body: JSON.stringify(apiRequest)
                        })
                        /* await axios.post('../api/destroyImages', {
                            method: 'POST',
                            body: images
                        }) */
                        await setIssuesFunction()
                    }}
                        width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.3158 2.21053V1.47368C10.3158 1.08284 10.1605 0.708001 9.88416 0.431632C9.60779 0.155263 9.23295 0 8.8421 0H4.42105C4.03021 0 3.65537 0.155263 3.379 0.431632C3.10263 0.708001 2.94737 1.08284 2.94737 1.47368V2.21053H0.736842C0.541419 2.21053 0.354001 2.28816 0.215816 2.42634C0.0776313 2.56453 0 2.75195 0 2.94737C0 3.14279 0.0776313 3.33021 0.215816 3.46839C0.354001 3.60658 0.541419 3.68421 0.736842 3.68421H1.47368V11.7895C1.47368 12.3757 1.70658 12.938 2.12113 13.3526C2.53569 13.7671 3.09794 14 3.68421 14H9.57895C10.1652 14 10.7275 13.7671 11.142 13.3526C11.5566 12.938 11.7895 12.3757 11.7895 11.7895V3.68421H12.5263C12.7217 3.68421 12.9092 3.60658 13.0473 3.46839C13.1855 3.33021 13.2632 3.14279 13.2632 2.94737C13.2632 2.75195 13.1855 2.56453 13.0473 2.42634C12.9092 2.28816 12.7217 2.21053 12.5263 2.21053H10.3158ZM8.8421 1.47368H4.42105V2.21053H8.8421V1.47368ZM10.3158 3.68421H2.94737V11.7895C2.94737 11.9849 3.025 12.1723 3.16318 12.3105C3.30137 12.4487 3.48879 12.5263 3.68421 12.5263H9.57895C9.77437 12.5263 9.96179 12.4487 10.1 12.3105C10.2382 12.1723 10.3158 11.9849 10.3158 11.7895V3.68421Z" fill="#121857" />
                        <path d="M4.42114 5.15796H5.89483V11.0527H4.42114V5.15796Z" fill="#121857" />
                        <path d="M7.36841 5.15796H8.84209V11.0527H7.36841V5.15796Z" fill="#121857" />
                    </svg>
                    <svg className={styles.icons} onClick={() => setVisible(!visible)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.40414 1.05931e-08C6.41027 -6.29694e-05 7.39645 0.280706 8.25165 0.810699C9.10684 1.34069 9.79711 2.09887 10.2447 2.99987C10.6924 3.90087 10.8796 4.90892 10.7853 5.91055C10.691 6.91218 10.319 7.8676 9.71111 8.66927L13.7862 12.744C13.9168 12.8757 13.993 13.0518 13.9995 13.2371C14.0061 13.4225 13.9425 13.6035 13.8214 13.744C13.7003 13.8846 13.5307 13.9743 13.3464 13.9953C13.1621 14.0163 12.9767 13.967 12.8271 13.8573L12.7446 13.7855L8.6695 9.7108C7.98613 10.2288 7.18931 10.5767 6.34486 10.7259C5.50042 10.8751 4.6326 10.8212 3.8131 10.5687C2.9936 10.3162 2.24595 9.87237 1.63192 9.27383C1.01789 8.67528 0.555115 7.93923 0.281822 7.12649C0.00852877 6.31374 -0.0674332 5.44764 0.0602123 4.59974C0.187858 3.75184 0.515446 2.94647 1.01591 2.2502C1.51638 1.55392 2.17535 0.986714 2.93839 0.595444C3.70143 0.204173 4.54662 7.08151e-05 5.40414 1.05931e-08ZM5.40414 1.47386C4.36168 1.47386 3.36191 1.88795 2.62478 2.62502C1.88765 3.3621 1.47353 4.36179 1.47353 5.40417C1.47353 6.44655 1.88765 7.44624 2.62478 8.18332C3.36191 8.92039 4.36168 9.33448 5.40414 9.33448C6.44661 9.33448 7.44637 8.92039 8.18351 8.18332C8.92064 7.44624 9.33475 6.44655 9.33475 5.40417C9.33475 4.36179 8.92064 3.3621 8.18351 2.62502C7.44637 1.88795 6.44661 1.47386 5.40414 1.47386Z" fill="#121857" />
                    </svg>

                </Col>
                <Col span={4}>
                    {state}
                </Col>
                {visible && <IssueDetailsComponent key={id} resolvedUploadedImages={resolvedUploadedImages} description={description} />}
            </Row>
        </>
    )
}
export default IssueMapComponent