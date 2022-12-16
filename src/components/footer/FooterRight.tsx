import React from 'react';
import styled from 'styled-components';
import FooterConstant from '../../constant/FooterConstant';

function FooterRight() {
  return (
    <FooterRightContainer>
      <div className="nav-notice">
        <a href="#!">공지 사항</a>
        {FooterConstant.NOTICE.map(notice => (
          <div>
            <span className="notice-text">{notice.DATE}</span>
            <span className="notice-text">{notice.TITLE}</span>
            <span className="notice-text-color">{notice.CATEGORY}</span>
          </div>
        ))}
      </div>
      <div className="nav-footer-menu">
        {FooterConstant.MENU.map(menu => (
          <strong>{menu}</strong>
        ))}
      </div>
      <div className="footer-company-info">
        {FooterConstant.COMPANY_INFO.map(info => (
          <p className="company-info-text">{info.CONTENT}</p>
        ))}
      </div>
    </FooterRightContainer>
  );
}

export default FooterRight;

const FooterRightContainer = styled.div`
  width: 500px;
  height: 345px;

  .nav-notice {
    a {
      text-decoration: none;
      font-size: 18px;
      font-weight: 700;
      color: white;
    }

    .notice-text {
      font-size: 15px;
      margin: 5px 5px 0 0;
      color: white;
    }

    .notice-text-color {
      color: aquamarine;
    }
  }

  .nav-footer-menu {
    width: 450px;
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;

    strong {
      width: 180px;
      font-size: 20px;
      color: white;
    }
  }

  .footer-company-info {
    margin-top: 80px;

    .company-info-text {
      margin-top: 8px;
      color: white;
    }
  }
`;
