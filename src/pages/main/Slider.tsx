import React from 'react';
import styled from 'styled-components';
import '../../styles/variables.scss';

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
      {/* <div className="main-pagination">
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
      </div> */}
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
          @include imgSizeCover;
        }
      }
    }
  }

  .main-pagination {
    @include flexCenter;
    margin-top: 10px;

    .btn {
      width: 10px;
      height: 10px;
      margin: 0 3px;
      border: 0;
      border-radius: 50%;
      background: #000;
      cursor: pointer;
      text-indent: -9999px;
      overflow: hidden;

      &.active {
        width: 15px;
        height: 15px;
      }
    }
  }
`;
