import { Table, Tag, Space } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import Link from 'next/link'
import { Alert } from 'antd';
import { DatePicker} from 'antd';
import moment from 'moment';
import CardsDetails from '../components/issueAdmin/cardsDetails';
import IssuesTable from '../components/issueAdmin/issueTable';
import { Row, Col } from 'antd';

const issueAdmin = () =>{
  const cardsDetails={};
  const issuesTable={};
  return(
    <div className="cards">
        <Row>
      <Col span={16}><IssuesTable issuesTable = {issuesTable} />  </Col>
      <Col span={8}><CardsDetails cardsDetails = {cardsDetails} /></Col>
    </Row>      
</div>  
  )
}

export default issueAdmin



