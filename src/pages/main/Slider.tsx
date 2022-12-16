import React from 'react';
import styled from 'styled-components';

interface SliderProps {
  sliders: any[];
  slideRef: any;
  count: number;
}

interface SliderType {
  id: number;
  src: string;
  alt: string;
}

function Slider({ sliders, slideRef, count }: SliderProps) {
  return (
    <SliderContainer>
      <div ref={slideRef} className="main-slider-wrap">
        {sliders.map((slider: SliderType) => (
          <div
            key={slider.id}
            className={`${'main-slider-box'} ${
              slider.id === count ? 'active' : ''
            }`}
          >
            <div className="main-slicer-thumb">
              <img src={slider.src} alt={slider.alt} />
            </div>
          </div>
        ))}
      </div>
      <div className="main-pagination">
        {sliders.map(btn => (
          <button
            type="button"
            key={btn.id}
            onClick={() => test(btn.id)}
            className={`${'btn'} ${btn.id === count ? 'active' : ''}`}
          >
            {btn.text}
          </button>
        ))}
      </div>
    </SliderContainer>
  );
}

export default Slider;

const SliderContainer = styled.div`
  .main-slider-wrap {
    display: flex;
    margin: 0 -5px;

    .main-slider-box {
      margin: 0 5px;

      .main-slicer-thumb {
        position: relative;
        width: 100vw;
        height: 600px;
        overflow: hidden;
        box-sizing: border-box;

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
    }
  }

  .main-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    .btn {
      width: 15px;
      height: 15px;
      margin: 0 10px;
      border: 0;
      border-radius: 50%;
      background: #b9b7b7;
      cursor: pointer;
      text-indent: -9999px;
      overflow: hidden;

      &.active {
        background: #070707;
      }
    }
  }
`;
