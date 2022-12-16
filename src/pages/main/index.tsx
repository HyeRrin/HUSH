import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Review from './Review';
import Slider from './Slider';
import Banner from './Banner';

function Main() {
  const slideRef = useRef<any>();
  const [counter, setCounter] = useState(1);
  const [sliders, setSlider] = useState([]);

  const handleSlider = (count: number) => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';

    if (count >= sliders.length) {
      slideRef.current.style.transform = 'translateX(0)';
    } else {
      slideRef.current.style.transform = `translateX(-${count}00%)`;
    }
  };

  useEffect(() => {
    fetch('/data/slider.json')
      .then(res => res.json())
      .then(data => {
        setSlider(data);
      });
  }, []);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCounter((): any => {
        if (counter < sliders.length) {
          setCounter(counter + 1);
        } else {
          setCounter(1);
        }
      });

      handleSlider(counter);

      return () => clearTimeout(interval);
    }, 3000);
  });

  return (
    <MainContainer>
      <div className="main-visual">
        <Slider sliders={sliders} slideRef={slideRef} count={counter} />
      </div>
      <Review />
      <Banner />
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  .main-visual {
    overflow: hidden;
  }
`;
