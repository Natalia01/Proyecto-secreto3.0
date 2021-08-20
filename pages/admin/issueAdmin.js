import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import Link from 'next/link'
import moment from 'moment';
import CardsDetails from '../components/issueAdmin/cardsDetails';
import IssuesTable from '../components/issueAdmin/issueTable';
import ButtonProblemasCheck from '../components/issueAdmin/ButtonProblems'
import { Row, Col, Table, Tag, Space, Button, Checkbox } from 'antd';
import axios from 'axios';

const IssueAdmin = () => {
  const CheckboxGroup = Checkbox.Group
  const [issueList, setIssueList] = useState([])
  const [activeIssue, setActiveIssue] = useState({})
  const [commentState, setCommentState] = useState()
  const [showSolvedState, setShowSolvedState] = useState()
  const setIssuesFunction = async () => await axios.get('../api/faunaQueries/getAllIssues')
    .then(res =>
      showSolvedState ?
        setIssueList(res.data.data.filter(
          ({ data: { state } }) =>
            state != 'Solucionado')
          .reverse())
        : setIssueList(res.data.data.reverse()))
  useEffect(() => {
    setIssuesFunction()
  }, [])

  return (
    <div className="cards">
      <Row>
        <Col span={16}>
          <Checkbox onChange={() => {
            setShowSolvedState(!showSolvedState)
            setIssuesFunction()
          }}>
            ¿Mostrar problemas solucionados?
          </Checkbox>
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



