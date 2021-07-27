import './App.css';
import PredictionForm from './PredictionForm';

import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout" style={{height: '100%'}}>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key={2}>Bitcoin Price Predictor</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <PredictionForm/>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Crypto Crips ©2021
      </Footer>
      </Layout>
    </div>
  );
}

export default App;
