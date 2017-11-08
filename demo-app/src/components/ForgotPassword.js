import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Button, Input, Icon } from 'antd';
import { sendPassword } from '../actions'

const FormItem = Form.Item

class ForgotPassword extends Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, value) => {
      if (!err) {
         //отправляем мэил на сервер
         this.props.sendPassword(value)
         //меняем состояние для переключения обратно на логин форму
         this.props.forgotPassword(value.email)
      }

      console.log(err)
    });
  }

  render(){
    const { getFieldDecorator } = this.props.form
    const { email } = this.props

    return(
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem
            label='Email'>
              {getFieldDecorator('email', {
                rules: [{
                   type: 'email', message: 'Неверный электронный адрес.',
                 },{ required: true, message: 'Введите электронный адрес!' }],
                initialValue: email
              })(
                <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="email" />
              )}
            </FormItem>
          <FormItem>
            <a onClick={ this.props.forgotPassword }>Назад</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Отправить Пароль
            </Button>
          </FormItem>
        </Form>
    )
  }
}

ForgotPassword.propTypes = {
   forgotPassword: PropTypes.func.isRequired,
   email: PropTypes.string
}

const WrappedForgotPassword = Form.create()(ForgotPassword)

const mapStateToProps = ({ sendPasswordResult }) => {

   return { sendPasswordResult }
}

export default connect(mapStateToProps, { sendPassword })(WrappedForgotPassword);
