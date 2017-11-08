import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import SiderMenu from '../components/UserPageSiderMenu';
import Header from '../components/UserPageHeader';
import Body from '../components/UserPageBody'

const { Content, Sider, Footer } = Layout;

class UserPage extends Component{
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const { loginRes, confirmKey } = this.props;
    const { collapsed } = this.state;

    if(confirmKey.result === 'success'){
      return (
          <Layout style={{height: '100vh'}}>
              <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                className="user_page main sider"
                >
                 <SiderMenu collapsed={collapsed}/>
              </Sider>
              <Layout>
                <Header collapsed={collapsed} toggle={this.toggle}/>
                  <Body />
                <Footer style={{ textAlign: 'center' }}>
                  Prototype ©2016 Created by Ant UED
                </Footer>
              </Layout>
          </Layout>
        )
      }else{
        return(
          <Redirect to='/'/>
        )
     }
   }
}

const mapStateToProps = ({loginRes, confirmKey}) => {

  return { loginRes, confirmKey }
}

export default connect(mapStateToProps)(UserPage)
