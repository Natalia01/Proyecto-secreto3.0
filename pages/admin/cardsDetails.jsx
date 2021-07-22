import { Layout, Menu, Breadcrumb } from 'antd';
import { Table, Tag, Space } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import Link from 'next/link'
import { Card, Button, Comment, Avatar, Form, List, Input } from 'antd';
import moment from 'moment';


const { TextArea } = Input;
const cardsDetails = () => {
    return(
        <div className="site-card-border-less-wrapper">
        <Card title="N° Operación:" key='name' bordered={false} style={{ width: 300 }}>
            <p><b>Descripción:</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam veritatis molestias quos dolor nesciunt eaque commodi iure aperiam doloremque, dolore iste soluta, optio ea praesentium accusamus! Quisquam consectetur culpa odit.</p>
            <p>Severidad:</p>
            <Button type="primary">Ver adjuntos</Button>
    </Card>
    
  </div>

    )
}

<style jsx>{`
.site-card-border-less-wrapper {
    padding: 30px;
    background: #ececec;
  }
`
}

</style>


export default cardsDetails;