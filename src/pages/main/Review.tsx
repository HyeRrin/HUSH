import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

function Review() {
  interface Review {
    id: number;
    title: string;
    imgOn: string;
    imgOff: string;
    content: string;
    userId: string;
    date: string;
  }

  interface AnimatedItem {
    [key: number]: any;
  }

  const [reviews, setReviews] = useState([]);

  const animatedItem: AnimatedItem = {
    0: useScrollFadeIn('right', 1, 0),
    1: useScrollFadeIn('right', 1, 0.2),
    2: useScrollFadeIn('down', 1, 0.3),
    3: useScrollFadeIn('left', 1, 0.4),
    4: useScrollFadeIn('left', 1, 0.5),
  };

  useEffect(() => {
    fetch('/data/review.json')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
      });
  }, []);

  return (
    <ReviewContainer>
      <div className="contain">
        <ul>
          {reviews.map((review: Review, index) => (
            <li key={review.id} {...animatedItem[index]}>
              <div className="box">
                <h2>{review.title}</h2>
                <div className="thumb">
                  <img src={review.imgOn} alt="메인 상품" className="img-on" />
                  <img
                    src={review.imgOff}
                    alt="메인 상품"
                    className="img-off"
                  />
                </div>
                <div className="txt">{review.content}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ReviewContainer>
  );
}

export default Review;

const ReviewContainer = styled.div`
  margin-top: 150px;

  .contain {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  ul {
    display: flex;
    width: 100%;
    margin: 0 -5px;

    li {
      width: 20%;
      margin: 0 5px;
      transition: 1s ease-in;

      .box {
        font-size: 16px;

        h2 {
          margin-bottom: 5px;
          font-size: 20px;
          font-weight: 700;
        }

        .thumb {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 100%;
          overflow: hidden;
          box-sizing: border-box;
          transition: 1s ease-in;

          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .txt {
          display: -webkit-box;
          margin-top: 10px;
          height: 2.6em;
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: break-word;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .user-id {
          margin-top: 20px;
        }
      }

      .img-on {
        display: none;
      }

      .img-off {
        display: block;
      }

      &:hover .img-on {
        display: block;
        animation-duration: 3s; // 애니메이션 3초동안 실행
        animation-name: fadeout;
      }

      &:hover .img-off {
        display: none;
      }

      @keyframes fadeout {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }
    }
  }
`;
