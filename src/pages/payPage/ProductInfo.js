import React from 'react';

function ProductInfo({ productData }) {
  return (
    <div className="info-box">
      <div className="product-table">
        <p> </p>
        <p>제품정보</p>
        <p>수량</p>
        <p>금액</p>
        <p>합계 금액</p>
      </div>
      {productData.map(item => {
        return (
          <div className="product-page" key={item.id}>
            <img
              className="productImg"
              src="/images/Nav/choco.jpeg"
              alt="productImg"
            />
            <div>
              <strong>{item.name}</strong>
              <p>{item.category_name}</p>
            </div>
            <p>{item.quantiny}</p>
            <p>{item.price}</p>
            <p>{item.price * item.quantiny}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductInfo;
