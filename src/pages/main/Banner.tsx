import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

function Banner() {
  interface AnimatedItem {
    [key: number]: any;
  }

  const animatedItem: AnimatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
  };

  return (
    <BannerContainer>
      <div className="contain">
        <div className="banner-box" {...animatedItem[0]}>
          <div className="banner-img">
            <img src="./images/main/banner1.avif" alt="메인 상품" />
          </div>
          <div className="banner-txt">
            <h2>쿠키</h2>
            <p>식사는 없어 배고파도 음료는 없어 </p>
            <p>목말라도 달콤한 맛만 디저트만 만 원하게 될 거 알잖아</p>
          </div>
        </div>
        <div className="banner-box" {...animatedItem[1]}>
          <div className="banner-img">
            <img src="./images/main/banner2.avif" alt="메인 상품" />
          </div>
          <div className="banner-txt">
            <h2>젤리</h2>
            <p>내가 만든 쿠키 Come and take a lookie</p>
            <p>
              우리 집에만 있지 놀러 와 얼마든지 굽지 그런데 너 충치 생겨도 난
              몰라
            </p>
          </div>
        </div>
      </div>
    </BannerContainer>
  );
}

export default Banner;

const BannerContainer = styled.div`
  margin: 200px 0;

  .contain {
    width: 1200px;
    margin: 0 auto;

    .banner-box {
      display: flex;
      align-items: center;
      height: 336px;
      margin-bottom: 20px;

      .banner-img {
        position: relative;
        width: 70%;
        height: 100%;
        overflow: hidden;

        img {
          @include imgSizeCover;
        }
      }

      .banner-txt {
        width: 30%;
        padding: 0 20px;

        h2 {
          margin-bottom: 5px;
          font-size: 30px;
        }

        p {
          font-size: 16px;
          line-height: 2em;
        }
      }
    }
  }
`;
