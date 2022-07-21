import React from 'react';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
function FooterUser() {
  return (
    <div>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Copyright ©2022 by Paws and Ears
      </Footer>
    </div>
  );
}

export default FooterUser;
