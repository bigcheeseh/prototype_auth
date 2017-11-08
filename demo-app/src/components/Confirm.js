import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { confirmKey, initialKeyParams } from '../actions';
import App from '../App.css';

const FormItem = Form.Item;

class Confirm extends Component{

   handleSubmit = (e) => {
     e.preventDefault();
     this.props.form.validateFields((err, key) => {
       if (!err) {
          this.props.confirmKey(key)
       }
     });
   }
   handleKeyChange = () => {
     this.props.initialKeyParams()
   }
   render(){
     if(this.props.keyStatus){
       const { getFieldDecorator } = this.props.form
       const { keyStatus } = this.props

       return(
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem
            validateStatus={keyStatus.result}
            help={keyStatus.message}>
            {getFieldDecorator('key', {
              rules: [{ required: true }],
            })(
              <Input prefix={<Icon type="key" style={{ fontSize: 13 }} />} placeholder="key"
                     onChange={this.handleKeyChange}/>
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Confirm
            </Button>
          </FormItem>
        </Form>
       )
     }else{
      console.log(this.props)
       return(
         <h1>Loading...</h1>
      )
     }
  }
}

const WrappedConfirm = Form.create()(Confirm)

const mapStateToProps = ({ confirmKey, loginRes }) => {
    return { keyStatus: confirmKey }
}


export default connect(mapStateToProps, { confirmKey, initialKeyParams })(WrappedConfirm)
