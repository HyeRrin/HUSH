import React, { useState, useEffect } from 'react';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import './Review.scss';

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
    <div className="main-review">
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
    </div>
  );
}

export default Review;
