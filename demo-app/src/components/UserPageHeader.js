import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, Avatar, Menu, Dropdown } from 'antd';
import { connect } from 'react-redux'
const { Header } = Layout


class UserPageHeader extends Component{
  state = {
    visible: false,
  };

  handleMenuClick = (e) => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }

  }
  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  }

  render(){
      const { collapsed, toggle, loginRes } = this.props

      const menu = (
         <Menu onClick={this.handleMenuClick}>
           <Menu.Item key="1">Clicking me </Menu.Item>
           <Menu.Item key="2">Clicking me </Menu.Item>
           <Menu.Item key="3">Clicking me </Menu.Item>
         </Menu>
       );

       return (
         <Header style={{background:'#fff', boxShadow: '0 1px 1px #000'}} className="user_page header">
           <Icon
             className="user_page trigger"
             type={collapsed  ? 'menu-unfold' : 'menu-fold'}
             onClick={toggle}
           />
          <div className="user_page user-personal-menu" style={{ right: 0}}>

           <Dropdown overlay={menu}
                     onVisibleChange={this.handleVisibleChange}
                     visible={this.state.visible}
               >
            <span>
             <Avatar className="user_page user-avatar" icon="user" />
             <a  className="user_page ant-dropdown-link" href="#">
                { loginRes.user.email }
             </a>
            </span>
           </Dropdown>
          </div>
        </Header>
       )
  }
}

UserPageHeader.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

const mapStateToProps = ({loginRes}) => {
  return { loginRes }
}

export default connect(mapStateToProps)(UserPageHeader)
