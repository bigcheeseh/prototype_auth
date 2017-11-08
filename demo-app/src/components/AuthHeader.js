import React, { Component } from 'react';
import PageHeader from 'ant-design-pro/lib/PageHeader';


const content = (
  <div style={{margin: '15px'}}>
    <div className="link">
      <a className="auth link">
        <img className="auth icon" alt="" src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg" /> Контакты
      </a>
      <a className="auth link">
        <img className="auth icon" alt="" src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" /> О нас
      </a>
      <a className="auth link">
        <img className="auth icon" alt="" src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" /> Документация
      </a>
    </div>
  </div>
);

export default () => {
   return (
     <PageHeader
        title="Logo"
        content={content}
        className='auth_header'
      />
   )
}
