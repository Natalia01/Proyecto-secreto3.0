import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import Link from 'next/link'
import moment from 'moment';
import CardsDetails from '../components/issueAdmin/cardsDetails';
import IssuesTable from '../components/issueAdmin/issueTable';
import ButtonProblemasCheck from '../components/issueAdmin/ButtonProblems'
import { Row, Col, Table, Tag, Space, Button } from 'antd';
import axios from 'axios';

const IssueAdmin = () => {
  const [issueList, setIssueList] = useState([])
  const [activeIssue, setActiveIssue] = useState({})
  const [commentState, setCommentState] = useState()
  const setIssuesFunction = async () => await axios.get('../api/faunaQueries/getAllIssues')
    .then(res => setIssueList(res.data.data.reverse()))
  useEffect(() => {
    setIssuesFunction()
  }, [])

  return (
    <div className="cards">
      <Row>
        <Col span={16}>
          <IssuesTable
            setIssuesFunction={setIssuesFunction}
            setActiveIssue={setActiveIssue}
            activeIssue={activeIssue}
            data={issueList} />  </Col>
        <Col span={8}>
          <CardsDetails
            activeIssue={activeIssue}
            setCommentState={setCommentState} />
          <Button onClick={async () => {
            const apiRequest = { activeIssue, commentState }
            console.log({ apiRequest })
            await fetch('../api/faunaQueries/commentIssue', {
              method: 'POST',
              body: JSON.stringify(apiRequest)
            })
            await setIssuesFunction()
          }}>
            Enviar Comentarios
          </Button>
        </Col>
        <ButtonProblemasCheck />
      </Row>
    </div>
  )
}

export default IssueAdmin



