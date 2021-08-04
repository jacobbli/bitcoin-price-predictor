import './App.css';

import { Layout, Card, Avatar, Row, Col, Timeline } from 'antd';
import 'antd/dist/antd.css';
import './About.css';

import React from 'react';
const { Meta } = Card;
const { Content } = Layout;

function TeamCard(props) {
    return (
        <Card
        style={{ width: 600, marginTop: 16 }}
        >
            <Meta
              avatar={
                <Avatar 
                    src={props.photo}
                    shape="square" size={150}
                />
              }
              title={props.name}
              description={props.description}
            />
      </Card>
    )
}

function TeamHistory() {
    return (
        <Timeline mode="left">
            <Timeline.Item label="2021-06-01">Team formed</Timeline.Item>
            <Timeline.Item label="2021-07-31">Breakthrough in classification model performance</Timeline.Item>
            <Timeline.Item label="2021-08-04">Presented results to stakeholders</Timeline.Item>
            <Timeline.Item label="2021-08-17" color="green">Passed BUS462</Timeline.Item>
        </Timeline>
    )
}


function About() {
    const ammarDescription = `
        Ammaar is a 4th year business student who is concentrating in MIS and Operations management.
        He assisted with developing models on KNIME and contributed his knowledge of Bitcoin.
    `

    const ajayDescription = `
        Ajay is a 5th year business student who is concentrating in MIS and Finance.
        He assisted with researching the trends of Bitcoin.
    `
    const maheenDescription = `
        Maheen is a 4th year business student who is concentrating in MIS and Operations management.
        He assisted with developing our KNIME and python  models and contributed his financial expertise.
    `
    const tobyDescription = `
        Toby is a 4th year business student who is currently concentrating in operations management.
        He helped perform the social network analysis in this project.
    `
    const jacobDescription = `
        Jacob is a 4th year computer science student with a background in accounting.
        He helped create our Python workflows.
    `

    return (
        <div id="team-info">
            <Layout>
                <Content className="site-layout-background">
                <h1>History</h1>
                <Row align="center" id='timeline-row'>
                    
                    <Col>
                        <TeamHistory id="team-history"/>
                    </Col>
                </Row>
                <div id="our-team">
                <h1>Meet the Team</h1>
                    <Row align='center' gutter={16}>
                            
                            <Col>
                                <TeamCard 
                                    name='Ammaar Muzammil'
                                    photo='/ammaar.jpg'
                                    description={ammarDescription}/>
                            </Col>
                            <Col>
                                <TeamCard 
                                    name='Ajay Kaila'
                                    photo='/ajay.jpg'
                                    description={ajayDescription}/>
                            </Col>
                        </Row>
                        <Row align='center' gutter={16}>
                            <Col>
                                <TeamCard 
                                    name='Maheen Khan'
                                    photo='/maheen.png'
                                    description={maheenDescription}/>
                            </Col>
                            <Col>
                                <TeamCard 
                                    name='Toby Oktavian Sutrisno'
                                    photo='/toby.png'
                                    description={tobyDescription}/>
                            </Col>
                        </Row>
                        <Row align='center'>
                            <Col>
                            <TeamCard 
                                    name='Jacob Lee'
                                    photo='/jacob.jpg'
                                    description={jacobDescription}/>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        </div>
    )
}

export default About;
