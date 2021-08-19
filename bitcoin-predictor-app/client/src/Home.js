import './App.css';
import PredictionForm from './PredictionForm';
import TrendViewer from './TrendViewer';

import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

function Home() {
  return (
      <div className="Home">
          <Row gutter={16}>
            <Col span={16} offset={1}>
              <TrendViewer />
            </Col>
            <Col span={3}>
              <PredictionForm/>

            </Col>
          </Row>

      </div>
  );
}

export default Home;
