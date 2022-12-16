import React from 'react';
import styled from 'styled-components';
import FooterConstant from '../../constant/FooterConstant';

function FooterLeft() {
  return (
    <FooterLeftContainer>
      <div className="footer-input">
        <input type="text" placeholder="이메일주소를 입력해주세요" />
        <button type="button">구독</button>
      </div>
      <div>
        <span>{FooterConstant.INTRO.CONTENT}</span>
        <span>
          <a href="#!">미리보기</a>
        </span>
      </div>
      <div className="footer-cs">
        {FooterConstant.CS_CENTER.CENTER.map(info => (
          <div>
            <strong>{info.TITLE}</strong>
            <strong>{info.NUMBER}</strong>
            <p>{info.EMAIL}</p>
          </div>
        ))}
        <div>
          {FooterConstant.CS_CENTER.CONTACT.map(info => (
            <p>
              <span>{info.TITLE}</span>
              <span>{info.HOUR}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="sns-box">
        {FooterConstant.SNS.map(sns => (
          <img src={sns.ICON} alt={sns.TITLE} />
        ))}
      </div>
    </FooterLeftContainer>
  );
}

export default FooterLeft;

const FooterLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #000;
  width: 450px;
  height: 352px;
  margin-left: 100px;

  .footer-input {
    display: flex;
    align-items: center;
    input {
      color: white;
      width: 300px;
      height: 30px;
      background: #222222;
      border: 1px solid rgba(0, 0, 0, 0);
      outline: 0px solid black;
      padding-left: 10px;
    }

    button {
      height: 30px;
      color: white;
      background: #222222;
      border: 1px solid rgba(0, 0, 0, 0);
    }
  }
  p,
  strong,
  span,
  a {
    color: white;
  }

  p {
    font-size: 15px;

    span {
      margin-left: 5px;
    }
  }

  .footer-cs {
    width: 450px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;

    strong {
      width: 180px;
      font-size: 18px;
      margin-bottom: 5px;
    }

    p {
      margin-bottom: 15px;
      width: 180px;
      font-size: 18px;
    }

    span {
      margin-bottom: 3px;
      width: 300px;
    }
  }

  .sns-box {
    display: flex;

    img {
      position: relative;
      left: -10px;
      background: #b8b7b7;
      border-radius: 50%;
      border: solid 2px #22222200;
      width: 35px;
      height: 35px;
      margin-left: 10px;
    }
  }
`;
