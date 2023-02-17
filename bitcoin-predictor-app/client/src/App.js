import './App.css';
import LoginForm from './LoginForm';

import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import TrendViewer from './TrendViewer';
import PredictionForm from './PredictionForm';

const { Header, Content, Footer } = Layout;



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoggedIn: false
    };
  }

  logIn = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  logout = () => {
    this.setState({
      isLoggedIn: false
    })
  }



  render() {
    let menu;
    if (this.state.isLoggedIn) {
      menu =             
      <Menu id="menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key={1}><Link to="/trend">Trend Viewer</Link></Menu.Item>
        <Menu.Item key={2}><Link to="/predict">Prediction Tester</Link></Menu.Item>
        <Menu.Item key={3}><Link to="/" onClick={this.logout}>Logout</Link></Menu.Item>
      </Menu>
    } else {
      menu = ""
    }

    return (
      <Router>
        <div className="App">
          <Layout className="layout" style={{height: '100%'}}>
            <Header id="header">
              <div className="logo"><img src="logo.png" alt="logo"/></div>
              <div className="logo-text">BitcoinPricePredictor</div>
              {menu}
            </Header>
            <Content className="page-content">
              <Switch>
                <Route exact path="/">
                  <LoginForm authStatus = {this.logIn}/>
                </Route>
                <Route path="/trend">
                  <TrendViewer />
                </Route>
                <Route path="/predict">
                  <PredictionForm />
                </Route>
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Crypto Crips ©2021
            </Footer>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
