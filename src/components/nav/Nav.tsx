import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavModal from './NavModal';
import './Nav.scss';

const loginImg = ['/images/Nav/loginClick.png', '/images/Nav/login.png'];

interface PointType {
  [key: string]: number | null;
}

function Nav() {
  const location = useLocation();

  const [isSearch, setIsSearch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isMenuImg, setIsMenuImg] = useState(false);

  useEffect(() => {
    setIsMenu(false);
    setIsSearch(false);
  }, [location.pathname]);

  const showSearchToggle = () => {
    setIsSearch(toggle => !toggle);
  };
  const closeSearchModal = () => {
    setIsSearch(false);
  };

  const menuModalToggle = () => {
    setIsMenu(prev => !prev);
  };

  const [pointInput, setPointInput] = useState({});
  const { point }: PointType = pointInput;

  useEffect(() => {
    fetch('http://192.168.87.223:3001/user/point', {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE2NjQwMDk3ODR9.nvQGE9HLe8n-JCgqqRk3O-2dGEujzQhWIgm0WyCKN60',
      },
    })
      .then(response => response.json())
      .then(result => setPointInput(result.message));
  }, []);

  return (
    <div className="nav-wrap">
      <div className="nav-aside">
        <p>23SS HUSH 에디션 입고 알림 OPEN!</p>
      </div>
      <div className="nav-body">
        <div className="nav-body-left">
          <h1 className="nav-logo">
            <Link to="/" className="nav-logo-text">
              Hush
            </Link>
          </h1>
          <ul className="nav-menu">
            <li>
              <Link to="/productlist">제품</Link>
            </li>
            <li>
              <Link to="intro">허쉬소개</Link>
            </li>
            <li>
              <Link to="store">매장안내</Link>
            </li>
            <li>
              <Link to="/event">이벤트</Link>
            </li>
          </ul>
        </div>
        <ul className="nav-body-right">
          <li>
            <a className="point-info" href="#!">
              {point}
              <span>point</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                role="presentation"
                onClick={showSearchToggle}
                className="search-modal-btn"
                src="/images/Nav/search.png"
                alt="검색"
              />
            </a>
          </li>
          <li>
            <Link to="/cart">
              <img
                className="basket-page-btn"
                src="/images/Nav/basket.png"
                alt="장바구니"
              />
            </Link>
          </li>
          <li className="login-page-box">
            <a
              href="#!"
              onClick={e => {
                e.preventDefault();
              }}
            >
              <img
                role="presentation"
                className="login-page-btn"
                onMouseOver={() => setIsMenuImg(true)}
                onFocus={() => setIsMenuImg(true)}
                onMouseOut={() => setIsMenuImg(false)}
                onBlur={() => setIsMenuImg(false)}
                onClick={menuModalToggle}
                src={isMenuImg ? loginImg[0] : loginImg[1]}
                alt="텝메뉴"
              />
            </a>
            {isMenu && (
              <div className="my-page-modal">
                <ul>
                  <li>
                    <Link to="/signup">회원가입</Link>
                  </li>
                  <li>
                    <Link to="/signin">로그인</Link>
                  </li>
                  <li>
                    <Link to="/like">찜!</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
      {isSearch && <NavModal closeModal={closeSearchModal} />}
    </div>
  );
}

export default Nav;
