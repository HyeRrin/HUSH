import React, { useEffect, useRef, useState } from 'react';
import './Main.scss';
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
        console.log(data);
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
    <div className="main-warpper">
      <div className="main-visual">
        <Slider
          sliders={sliders}
          slideRef={slideRef}
          count={counter}
          handleSlider={handleSlider}
        />
      </div>
      <Review />
      <Banner />
    </div>
  );
}

export default Main;
