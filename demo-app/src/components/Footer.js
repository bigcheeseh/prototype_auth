import React, { Component } from 'react';
import { Layout, Icon } from 'antd';

const { Footer } = Layout



const copyright = <div> Copyright <Icon type="copyright" /> 2017 Prototype</div>;

export default () => {
   return (
     <Footer style={{ textAlign: 'center', position: 'absolute', bottom: 0, width: '100%'}}>
        Prototype ©2016 Created by Ant UED
    </Footer>
   )
}
