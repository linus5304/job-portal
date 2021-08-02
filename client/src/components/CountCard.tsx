import React from 'react'
import {Card,Row, Col} from 'antd'
import {CircleIcons} from './CircleIcons'

interface CountCardProps {
    icon: any,
    value: string,
    description: string,
    dBg: string
    
}



export const CountCard: React.FC<CountCardProps> = ({icon, value, description, dBg}) => {
        return (
            <Card bordered={false} hoverable={true} style={{borderRadius: 4}}>
          <Row>
            <Col style={{marginRight: '3%'}}>
            <CircleIcons icon={icon} dBg={dBg}/>
            </Col>
            <Col>
            <div style={{fontSize:'2em', fontWeight:'bold'}}>{value}</div>
            <div>{description}</div>
            </Col>
          </Row>
        </Card>
        );
}