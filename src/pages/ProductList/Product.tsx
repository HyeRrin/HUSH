import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductListType } from '../../types/types';

function Product(product: ProductListType) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id, stock, name, thumbnail_image_url, price, category_name } =
    product;

  if (Object.keys(product).length === 0) return <>Loading...</>;

  return (
    <ProductContainer className={` ${stock === 0 ? 'product-sold-out' : ''}`}>
      <Link key={id} to={`/detail/${id}`} className="product-link">
        <div className="thumb">
          <img
            className="product-product-image"
            src={thumbnail_image_url}
            alt="상품이미지"
          />
        </div>
        <div className="product-product-info">
          <p className="bold">{name}</p>
          <p>{category_name}</p>
          <p>₩ {price}</p>
        </div>
      </Link>
    </ProductContainer>
  );
}

export default Product;

const ProductContainer = styled.div`
  position: relative;
  width: 100%;
  height: 440px;
  padding: 15px;
  background-color: #f8f8f8;
  transition-duration: 1s;
  transition-timing-function: ease-out;

  &:hover {
    background: rgba(2, 2, 2, 0.099);
    transition: background 1s ease-out;
  }

  &.product-sold-out {
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
    }

    &:before {
      content: '픔절인 싱픔 입니다.';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-align: center;
      font-size: 20px;
      color: #fff;
      z-index: 10;
    }
  }

  .product-link {
    text-decoration: none;
  }

  .thumb {
    position: relative;
    height: 0;
    padding-bottom: 100%;
    overflow: hidden;
    box-sizing: border-box;

    .product-product-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product-product-info {
    text-align: center;

    p {
      padding-top: 20px;

      &:first-child {
        font-size: 27px;
      }

      &:nth-last-child(2) {
        font-size: 23px;
      }

      &:last-child {
        font-size: 20px;
      }
    }
  }
`;
