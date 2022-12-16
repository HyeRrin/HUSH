import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ProductDataType {
  category_name: string;
  product_name: string;
  price: number;
  stock: number;
  image_url: string;
}

function ProductDetailInfo({
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
    <DetailInfoContainer>
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
    </DetailInfoContainer>
  );
}

export default ProductDetailInfo;

const DetailInfoContainer = styled.div`
  display: flex;
  margin: 0 -20px;

  .detail-prd-img {
    width: 50%;
    margin: 0 20px;

    span {
      display: block;
      position: relative;
      width: 100%;
      height: 700px;
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

  .detail-prd-info {
    width: 50%;
    margin: 0 20px;

    .thumb {
      position: relative;
      width: 288px;
      height: 288px;
      margin: 0 auto;
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

    .detail-prd-names {
      margin-top: 20px;
      margin-bottom: 50px;
      text-align: center;

      .prd-tit-name {
        font-size: 32px;
        line-height: 1.3em;
        letter-spacing: -0.6px;
      }

      .prd-cat-name {
        margin-top: 15px;
        font-size: 18px;
      }
    }

    .prd-price-box {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 10px 0;
      border-top: 1px solid #bdbdbd;
      border-bottom: 1px solid #bdbdbd;

      .price {
        font-size: 26px;
        line-height: 1.3em;
        margin-right: 40px;
      }

      button {
        width: 24px;
        height: 24px;
        background: transparent;
        border: 0;
        cursor: pointer;

        img {
          width: 100%;
        }
      }

      .quantity-num {
        width: 42px;
        height: 24px;
        border: 0;
        outline: none;
        text-align: center;
        font-size: 18px;
        padding: 5px;
      }
    }

    .total-price {
      margin: 25px 0;
      @include flexSort(space-between, center);

      .total-title {
        color: #535353;
      }

      p {
        font-size: 26px;
        font-weight: 700;
      }
    }

    .prd-button-box {
      display: flex;

      a {
        height: 70px;
        line-height: 70px;
        font-size: 18px;
        color: #fff;
        text-align: center;
        text-decoration: none;
        border: 1px solid #000;

        &.lick-btn {
          width: 70px;
          margin-right: 8px;
          background: transparent;

          img {
            width: 18px;
            vertical-align: middle;
          }
        }

        &.basket-btn {
          width: calc(100% - 78px);
          background: #000;
        }
      }
    }
  }
`;
