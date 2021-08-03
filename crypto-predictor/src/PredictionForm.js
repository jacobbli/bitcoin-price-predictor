import React from 'react';
import axios from 'axios'
import { Form, Button, Card, Modal, Input, Row, Col } from 'antd';

import 'antd/dist/antd.css';
import './PredictionForm.css';

class PredictionForm extends React.Component {
  isProfitable(prediction) {
    if (prediction === 'PROFITABLE') {
      Modal.success({
        title: 'Profitable',
        content: (
          <div>
            <p>Based on the data you provided, we predict that Bitcoin's price will rise the next day.</p>
          </div>
        ),
        onOk() {},
      });
    } else {
      Modal.warning({
        title: 'Unprofitable',
        content: (
          <div>
            <p>Based on the data you provided, we predict that Bitcoin's price will not rise the next day.</p>
          </div>
        ),
        onOk() {},
      });
    }

  }

  submitForm = values => {
    axios.get("https://bitcoin-price-predictor-server.herokuapp.com/prediction", {
      params: {
        'ema_diff': values.emaDiff,
        'sma_diff': values.smaDiff
      }
    })
    .then (res => {
      this.isProfitable(res['data'])
    })
    .catch(err => {
      console.error(err);
    })
  }

  render() {
   return (
      <div className="prediction-form">
        <Row justify="center">
          <Col>
        <Card 
          id="card"
          title="Bitcoin Price Predictor"
          style={{ width: 400 }}>
          <Form 
            name="prediction-form"
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 8 }}
            onFinish={this.submitForm}>
            <Form.Item
              label="2-day EMA difference"
              name="emaDiff"
              rules={[
                {
                  required: true,
                  message: 'Please enter a valid number',
                },
              ]}
            >
              <Input addonBefore="$"/>
            </Form.Item>
            <Form.Item
              label="2-day SMA difference"
              name="smaDiff"
              rules={[
                {
                  required: true,
                  message: 'Please enter a valid number',
                },
              ]}
            >
              <Input addonBefore="$" />
            </Form.Item>
              <Form.Item
                wrapperCol={{ offset: 12, span: 1}}
            >
              <Button 
                type="primary" 
                htmlType="submit">
                Submit 
              </Button>
            </Form.Item>
          </Form>
        </Card>
        </Col>
        </Row>
      </div>
    );
  }
}

  export default PredictionForm;