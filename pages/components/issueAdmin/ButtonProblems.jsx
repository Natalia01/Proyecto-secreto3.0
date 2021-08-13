import { Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Link from 'next/link';
import React from 'react';

function ButtonProblemasCheck (){
    return(
             <Button
                type="primary">
                    <Link href= './problemasRevisados'>
                    Problemas Revisados
                    </Link>
                    
                </Button>
          
    )
}

export default ButtonProblemasCheck;