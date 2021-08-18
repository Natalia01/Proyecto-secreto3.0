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

const issueAdmin = () => {
  const [issueList, setIssueList] = useState([])
  const setIssuesFunction = async () => await axios.get('../api/faunaQueries/getAllIssues')
    .then(res => setIssueList(res.data.data))
  useEffect(() => {
    setIssuesFunction()
  }, [])
  const cardsDetails = {};
  const issuesTable = {};
  const buttonProblemasCheck = {};
  return (
    <div className="cards">
      <Row>
        <Col span={16}><IssuesTable data={issueList} setIssuesFunction={setIssuesFunction} />  </Col>
        <Col span={8}><CardsDetails /></Col>
        <ButtonProblemasCheck />
      </Row>
    </div>
  )
}

export default issueAdmin



