import React, {Component} from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu

export default ({collapsed}) => {
   return(
        <div>
           <div className="user_page logo sider" style={{padding: '10px', textAlign: 'center', background: '#002e5a'}}>
             <a href='/' >
               <img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo"  style={{verticalAlign: 'middle'}}/>
               <h1 style={{ visibility: collapsed ? 'hidden':'visible',
                            opacity: collapsed ? 0:1,
                            color: '#fff',
                            display: 'inline-block'}}>
                 Logo
               </h1>
             </a>
           </div>
           <Menu theme="dark" mode="inline"
                 className="user_page menu sider"
                 style={{background: '#002140'}}>
             <Menu.Item key="1">
               <Icon type="user" />
               <span>nav 1</span>
               </Menu.Item>
               <Menu.Item key="2">
                 <Icon type="video-camera" />
                 <span>nav 2</span>
               </Menu.Item>
               <Menu.Item key="3">
                 <Icon type="upload" />
                 <span>nav 3</span>
               </Menu.Item>
               <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                <Menu.Item className="user_page menu option" key="5">Option 5</Menu.Item>
                <Menu.Item className="user_page menu option" key="6">Option 6</Menu.Item>
                <Menu.Item className="user_page menu option" key="7">Option 7</Menu.Item>
                <Menu.Item className="user_page menu option" key="8">Option 8</Menu.Item>
              </SubMenu>
             </Menu>
        </div>
   )
}
