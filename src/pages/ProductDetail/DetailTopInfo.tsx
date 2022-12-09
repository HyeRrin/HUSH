import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ProductDataType {
  category_name: string;
  product_name: string;
  price: number;
  stock: number;
  image_url: string;
}

function DetailTopInfo({
  category_name,
  product_name,
  price,
  stock,
  image_url,
}: ProductDataType) {
  const [number, setNumber] = useState(1);

  const onIncrease = () => {
    if (number === stock) {
      setNumber(stock);
      alert(`최대 구매 가능 수량은 ${stock}개 입니다.`);

      return;
    }
    setNumber(number + 1);
  };

  const onDecrease = () => {
    if (number === 1) {
      setNumber(1);
      alert('해당 제품의 최소 구매 수량은 1개 입니다.');

      return;
    }

    setNumber(number - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(e.target.value);
    setNumber(targetValue);
  };

  const calculatePrice = number * price;

  return (
    <>
      <div className="detail-prd-img">
        <span>
          <img src={image_url} alt="" />
        </span>
      </div>
      <div className="detail-prd-info">
        <div className="thumb">
          <span>
            <img src={image_url} alt="" />
          </span>
        </div>
        <div className="detail-prd-names">
          <h2 className="prd-tit-name">{product_name}</h2>
          <p className="prd-cat-name">{category_name}</p>
        </div>
        <div className="prd-price-box">
          <strong className="price"> ￦ {price}</strong>
          <div className="quantity-box">
            <button type="button" className="minus" onClick={onDecrease}>
              <img src="../images/detail/minus_ico.png" alt="-" />
            </button>
            <input
              type="text"
              value={number}
              onChange={handleChange}
              className="quantity-num"
            />
            <button type="button" className="plus" onClick={onIncrease}>
              <img src="../images/detail/plus_ico.png" alt="+" />
            </button>
          </div>
        </div>
        <div className="total-price">
          <span className="total-title">총 합계 금액</span>
          <p>￦ {calculatePrice}</p>
        </div>
        <div className="prd-button-box">
          <Link to="/like" className="lick-btn">
            <img src="../images/detail/heart.png" alt="찜 목록" />
          </Link>
          <Link to="/cart" className="basket-btn">
            장바구니
          </Link>
        </div>
      </div>
    </>
  );
}

export default DetailTopInfo;
