import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Constant from '../../constant/Constant';
import './SignIn.scss';

function SignIn() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const { email, password } = inputValue;

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('http://10.58.2.130:3001/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === Constant.SIGNIN.SIGNIN_SUCCESS.MESSAGE) {
          localStorage.setItem('accessToken', data.accessToken);
          alert(Constant.SIGNIN.SIGNIN_SUCCESS.ALERT);
          navigate('/');
        }
        if (Constant.SIGNIN.EMAIL_ERROR.MESSAGE) {
          alert(Constant.SIGNIN.EMAIL_ERROR.ALERT);
        }
        if (Constant.SIGNIN.PASSWORD_ERROR.MESSAGE) {
          alert(Constant.SIGNIN.PASSWORD_ERROR.ALERT);
        }
      });
  };

  return (
    <div className="login">
      <h1 className="login-title">로그인</h1>
      <form onSubmit={submitForm} className="login-form">
        <input
          onChange={handleChange}
          className="login-input"
          name="email"
          placeholder="이메일"
        />
        <input
          onChange={handleChange}
          className="login-input"
          name="password"
          placeholder="비밀번호"
        />
        <input
          type="checkbox"
          id="saveEmail"
          className="login-checkbox-input"
        />
        <label htmlFor="saveEmail" className="login-checkbox-label">
          <span>아이디 저장</span>
        </label>
        <button type="button" className="login-btn">
          로그인
        </button>
      </form>
      <p
        role="presentation"
        className="login-link-join"
        onClick={() => navigate('/signup')}
      >
        회원가입
      </p>
    </div>
  );
}

export default SignIn;
