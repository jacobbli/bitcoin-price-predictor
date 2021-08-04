import React from 'react';
import axios from 'axios'
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import PriceChart from './PriceChart'
import 'antd/dist/antd.css';
import './TrendViewer.css';


class TrendViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPrice: 0,
            prevPrice: 0,
            priceDiff: 0,
            prediction: "",
            priceData: []
        };
    }

    getPrice = () => {
        axios.get(`http://localhost:3000/prices`)
        .then (res => {
            this.setState({
                currentPrice: res['data'][0][1],
                prevPrice: res['data'][1][1],
                priceDiff: (res['data'][0][1] - res['data'][1][1]) / res['data'][1][1],
                yesterday: res['data'][0][0],
                priceData: res['data'],
                graphConfig: {}
            })
        })
        .catch(err => {
            console.error(err);
        })
    }

    getPrediction = () => {
        axios.get("http://localhost:3000/")
          .then (res => {
            this.setState({
                prediction: res['data'],
                config: {
                    data: res['data'],
                }
            })
          })
          .catch(err => {
            console.error(err);
        })
    }

    componentDidMount() {
        this.getPrice()
        this.getPrediction()
    }

    render() {
        return (
            <div className="trend-viewer">
                <Row justify="center">
                    <Col span={10}>
                        <Card>
                            <Statistic
                                title={"Closing price on " + this.state.yesterday}
                                value={this.state.currentPrice}
                                precision={2}
                                prefix="$"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Statistic
                                title="Price change"
                                value={this.state.priceDiff}
                                precision={2}
                                valueStyle={this.state.priceDiff > 0 ? { color: '#3f8600' } : { color: '#cf1322' }}
                                prefix={this.state.priceDiff > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <Statistic
                                title="Next day's prediction"
                                value={this.state.prediction}
                                precision={2}
                                valueStyle={this.state.prediction === "PROFITABLE" ? { color: '#3f8600' } : { color: '#cf1322' }}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row justify='center'>
                    <Col span={24}>
                        <Card>
                            <PriceChart data={this.state.priceData} />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

  export default TrendViewer;