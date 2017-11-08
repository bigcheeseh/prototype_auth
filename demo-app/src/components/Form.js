import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Checkbox, Input, Button, Spin } from 'antd';
import App from '../App.css';
import { connect } from 'react-redux';
import { createUser } from '../actions';

const FormItem = Form.Item;

class LoginForm extends Component {

  handleSubmit = (e) => {
     e.preventDefault();
     this.props.form.validateFields((err, values) => {
       if (!err) {
         this.props.createUser(values)
       }
     });

  }

  handlePassword = (e) => {

    if(e.target.value.length < 6) {
      this.props.loginRes.password = {result: 'error', message:'пароль должен быть больше 5 символов'};
    }else{
      this.props.loginRes.password = {result: 'success', message:''};
    }
  }
  render(){
    const { getFieldDecorator, getFieldsValue } = this.props.form;
    const { password } = this.props.loginRes;
    const { forgotPassword } = this.props;

    if(this.props.loginRes === 'loading'){
      return ( <Spin style={{position: 'absolute', left: '45%'}} size="large" />)
    }
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
       <FormItem>
         {getFieldDecorator('email', {
           rules: [{
              type: 'email', message: 'Неверный электронный адрес.',
            },{ required: true, message: 'Введите электронный адрес!' }],
         })(
           <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="email" />
         )}
       </FormItem>
       <FormItem
          validateStatus={password.result}
          help={password.message}

        >
         {getFieldDecorator('password', {
           rules: [{ required: true }],
         })(
           <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password"
                  onChange={this.handlePassword}/>
         )}
       </FormItem>
       <FormItem>
         {getFieldDecorator('remember', {
           valuePropName: 'checked',
           initialValue: false,
         })(
           <Checkbox>Запомнить меня</Checkbox>
         )}
         <a className="login-form-forgot" onClick={() => forgotPassword(getFieldsValue().email)}>Забыли пароль</a>
         <Button type="primary" htmlType="submit" className="login-form-button">
           Log in
         </Button>
       </FormItem>
     </Form>
    )
  }
}

LoginForm.propTypes = {
   forgotPassword: PropTypes.func.isRequired
}

const WrappedLoginForm = Form.create()(LoginForm)

const mapStateToProps = ({loginRes})=> {
  return { loginRes }
}

export default connect(mapStateToProps, { createUser })(WrappedLoginForm);
