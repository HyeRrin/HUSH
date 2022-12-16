import React from 'react';
import styled from 'styled-components';

function ProductListBanner() {
  return (
    <BannerContainer>
      <img src="/images/cusCakes.jpg" alt="상품" />
      <div className="product-image-letter">
        <h2>HUSH</h2>
        <h3>ENJOY YOUR DESSERT!</h3>
      </div>
    </BannerContainer>
  );
}

export default ProductListBanner;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 460px;
  margin-bottom: 100px;
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

  .product-image-letter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h2 {
      margin-bottom: 50px;
      text-align: center;
      font-size: 100px;
      line-height: 1.3em;
      font-family: 'lush';
      color: whitesmoke;
    }

    h3 {
      font-size: 70px;
      line-height: 1.3em;
      font-family: 'lush';
      color: whitesmoke;
    }
  }
`;
