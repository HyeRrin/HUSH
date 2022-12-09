import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Constant from '../../commons/Constant';
import './SignUp.scss';

interface UserInfo {
  email: string;
  password: any;
  name: string;
  address: string;
}

function SignUp() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    name: '',
    address: '',
  } as UserInfo);

  const [isCheckEmail, setIsCheckEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const { email, password, name, address } = inputValue;

  const isPwValid = Constant.SIGNUP.PW_VALIDATION.test(password);

  const checkDuplicate = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    fetch('http://192.168.228.223:3001/user/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === Constant.SIGNUP.EMAIL_SUCCESS.MESSAGE) {
          alert(Constant.SIGNUP.EMAIL_SUCCESS.ALERT);
          setIsCheckEmail(prev => !prev);
        }
        if (data.message === Constant.SIGNUP.EMAIL_ERROR.MESSAGE) {
          alert(Constant.SIGNUP.EMAIL_ERROR.ALERT);
        }
      });
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isCheckEmail) {
      alert(Constant.SIGNUP.EMAIL_ERROR.ALERT);
      return;
    }

    fetch('http://192.168.228.223:3001/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email,
        name,
        password,
        address,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === Constant.SIGNUP.SIGNUP_SUCCESS.MESSAGE) {
          alert(Constant.SIGNUP.SIGNUP_SUCCESS.ALERT);
          navigate('/signin');
        }
        if (data.message === Constant.SIGNUP.INVALID_PASSWORD.MESSAGE) {
          alert(Constant.SIGNUP.INVALID_PASSWORD.ALERT);
        }
      });
  };

  return (
    <>
      <h1 className="join-title">회원가입</h1>
      <h2 className="join-subTitle">정보입력</h2>
      <div className="join-content">
        <div className="join-content-head">
          <h3 className="join-content-title">기본정보</h3>
          <p className="join-caution-text">
            <span className="caution-symbol">*</span>표시는 반드시 입력하셔야
            하는 항목입니다.
          </p>
        </div>
        <form onSubmit={submitForm}>
          <div className="join-form">
            <label htmlFor="signup-email" className="form-label">
              <span className="caution-symbol">*</span>이메일
            </label>
            <input
              onChange={handleChange}
              className="form-input-email input-focus"
              name="email"
              id="signup-email"
            />
            <button
              type="button"
              className="duplicate-btn"
              onClick={checkDuplicate}
            >
              중복확인
            </button>
          </div>
          <div className="join-form join-form-pw">
            <label htmlFor="signup-password" className="form-label">
              <span className="caution-symbol">*</span>비밀번호
            </label>
            <div className="form-password-wrap">
              <input
                onChange={handleChange}
                className="form-input-long input-focus"
                name="password"
                placeholder="영문 대소문자와 특수문자 포함, 8자리 이상"
                id="signup-password"
              />
              {password.length > 0 && !isPwValid && (
                <span className="join-valid-text">
                  * 비밀번호 형식을 다시 확인해주세요.
                </span>
              )}
            </div>
          </div>
          <div className="join-form">
            <label htmlFor="signup-name" className="form-label">
              <span className="caution-symbol">*</span>이름
            </label>
            <input
              onChange={handleChange}
              className="form-input-long input-focus"
              name="name"
              id="signup-name"
            />
          </div>
          <div className="join-form">
            <label htmlFor="signup-address" className="form-label">
              <span className="caution-symbol">*</span>주소
            </label>
            <input
              onChange={handleChange}
              className="form-input-long input-focus"
              name="address"
              id="signup-address"
            />
          </div>
          <button type="button" className="join-btn">
            회원가입
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
