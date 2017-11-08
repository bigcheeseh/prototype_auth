import React, { Component } from 'react';
import { Button, Row, Col, Layout } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import AuthHeader from '../components/AuthHeader';
import Footer from '../components/Footer';

import LoginForm from '../components/Form';
import Confirm from '../components/Confirm';
import ForgotPassword from '../components/ForgotPassword';

import App from '../App.css';

const { Content } = Layout;

class IndexPage extends Component {
      state = {
        forgotPassword: false,
        email: ''
      }
      handleForgotPasswordForm = (email) => {
        this.setState({ forgotPassword: !this.state.forgotPassword, email })
      }
      render(){
         const { loginRes, confirmKey } = this.props
         const { forgotPassword, email } = this.state

         if(confirmKey.result !== 'success'){
           return (
             <Content style={{paddingTop: 92}}>
              <Row>
               <Col lg={{span: 6, offset: 9}} md={{span: 10, offset: 7}} sm={{span:12, offset:6}} xs={{span:18, offset:3}}>
                <AuthHeader />
                  {forgotPassword ? <ForgotPassword email={ email } forgotPassword={ this.handleForgotPasswordForm }/> :
                   loginRes.login ? <Confirm /> : <LoginForm  forgotPassword={ this.handleForgotPasswordForm }/> }
               </Col>
              </Row>
              <Footer />
            </Content>
           )
        }else if(confirmKey.result === 'success'){
          //если код введён верно, перенаправляем на страницу пользователя
          return (
            <Redirect to={`/${loginRes.user.email}`} />
          )
        }
      }
}

const mapStateToProps = ({ loginRes, confirmKey })=> {
  return { loginRes, confirmKey }
}

export default connect(mapStateToProps)(IndexPage)
