import React from 'react';

interface ProductDataType {
  id: number;
  name: string;
  cateName: string;
  quantity: number;
  price: number;
}

function ProductInfo({ id, name, cateName, quantity, price }: ProductDataType) {
  return (
    <div className="info-box">
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
    </div>
  );
}

export default ProductInfo;
