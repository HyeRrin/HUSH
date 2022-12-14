import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Constant from '../../constant/Constant';
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
      <h1 className="join-title">????????????</h1>
      <h2 className="join-subTitle">????????????</h2>
      <div className="join-content">
        <div className="join-content-head">
          <h3 className="join-content-title">????????????</h3>
          <p className="join-caution-text">
            <span className="caution-symbol">*</span>????????? ????????? ???????????????
            ?????? ???????????????.
          </p>
        </div>
        <form onSubmit={submitForm}>
          <div className="join-form">
            <label htmlFor="signup-email" className="form-label">
              <span className="caution-symbol">*</span>?????????
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
              ????????????
            </button>
          </div>
          <div className="join-form join-form-pw">
            <label htmlFor="signup-password" className="form-label">
              <span className="caution-symbol">*</span>????????????
            </label>
            <div className="form-password-wrap">
              <input
                onChange={handleChange}
                className="form-input-long input-focus"
                name="password"
                placeholder="?????? ??????????????? ???????????? ??????, 8?????? ??????"
                id="signup-password"
              />
              {password.length > 0 && !isPwValid && (
                <span className="join-valid-text">
                  * ???????????? ????????? ?????? ??????????????????.
                </span>
              )}
            </div>
          </div>
          <div className="join-form">
            <label htmlFor="signup-name" className="form-label">
              <span className="caution-symbol">*</span>??????
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
              <span className="caution-symbol">*</span>??????
            </label>
            <input
              onChange={handleChange}
              className="form-input-long input-focus"
              name="address"
              id="signup-address"
            />
          </div>
          <button type="button" className="join-btn">
            ????????????
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
