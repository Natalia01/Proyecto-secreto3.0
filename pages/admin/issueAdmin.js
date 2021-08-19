import { Table, Tag, Space } from 'antd';
import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import Link from 'next/link'
import { Alert } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import CardsDetails from '../components/issueAdmin/cardsDetails';
import IssuesTable from '../components/issueAdmin/issueTable';
import ButtonProblemasCheck from '../components/issueAdmin/ButtonProblems'
import { Row, Col } from 'antd';
import axios from 'axios';

const IssueAdmin = () => {
  const [issueList, setIssueList] = useState([])
  const [activeIssue, setActiveIssue] = useState({})
  const setIssuesFunction = async () => await axios.get('../api/faunaQueries/getAllIssues')
    .then(res => setIssueList(res.data.data))
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
        <Col span={8}>{<CardsDetails activeIssue={activeIssue} />}</Col>
        <ButtonProblemasCheck />
      </Row>
    </div>
  )
}

export default IssueAdmin



