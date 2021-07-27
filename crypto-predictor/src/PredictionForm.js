import React from 'react';
import axios from 'axios'
import { Form, Input, Button, Card, Modal, Alert } from 'antd';
import 'antd/dist/antd.css';
import './PredictionForm.css';

class PredictionForm extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleOk = () => {
    this.setState({
      isModalVisible: false
    })
  }

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
    axios.get("http://127.0.0.1:8000", {
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
        <Card 
          id="card"
          title="Bitcoin Price Predictor"
          style={{ width: 500 }}>
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
                  message: 'Please enter the 2-day EMA difference!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="2-day SMA difference"
              name="smaDiff"
              rules={[
                {
                  required: true,
                  message: 'Please enter the 2-day SMA difference!',
                },
              ]}
            >
              <Input />
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
      </div>
    );
  }
}

  export default PredictionForm;