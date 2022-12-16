import React from 'react';
import styled from 'styled-components';

interface ProductDataType {
  id: number;
  name: string;
  cateName: string;
  quantity: number;
  price: number;
}

function ProductInfo({ id, name, cateName, quantity, price }: ProductDataType) {
  return (
    <ProductInfoContainer>
      <div className="product-table">
        <p> </p>
        <p>제품정보</p>
        <p>수량</p>
        <p>금액</p>
        <p>합계 금액</p>
      </div>
      <div className="product-page" key={id}>
        <img
          className="productImg"
          src="/images/Nav/choco.jpeg"
          alt="productImg"
        />
        <div>
          <strong>{name}</strong>
          <p>{cateName}</p>
        </div>
        <p>{quantity}</p>
        <p>{price}</p>
        <p>{price * quantity}</p>
      </div>
    </ProductInfoContainer>
  );
}

export default ProductInfo;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .product-table {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1330px;
    height: 60px;
    border-bottom: 1px solid rgb(142, 141, 141);

    p {
      width: 150px;
      font-size: 17px;
    }
  }

  .product-page {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1330px;
    margin: 10px;
    padding-bottom: 20px;
    border-bottom: 1px solid black;

    strong {
      position: relative;
      right: 5px;
      font-size: 20px;
    }

    p {
      font-size: 15px;
      width: 140px;
    }

    img {
      width: 150px;
    }
  }
`;
