import React from 'react';
import styled from 'styled-components';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

function Footer() {
  return (
    <FooterContainer>
      <div className="footer-main">
        <FooterLeft />
        <FooterRight />
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  margin-top: 150px;
  background: rgb(255, 255, 255);
  width: 100%;
  bottom: -10px;

  .footer-main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 480px;
    background: rgb(0, 0, 0);
  }
`;
