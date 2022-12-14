import React from 'react';
import styled from 'styled-components';

interface LikeProductType {
  img: string;
  name: string;
  category: string;
  price: number;
  handleSingleChecked: () => void;
}

function LikeTableProduct({
  img,
  name,
  category,
  price,
  handleSingleChecked,
}: LikeProductType) {
  return (
    <LikeTableRow>
      <td className="product-content-input">
        <input type="checkbox" onChange={handleSingleChecked} />
      </td>
      <td className="product-content-detail">
        <img className="content-detail-img" src={img} alt="제품 이미지" />
        <div>
          <p className="content-detail-name">{name}</p>
          <p className="content-detail-category">{category}</p>
        </div>
      </td>
      <td className="product-content-price">
        ₩ {price.toLocaleString('ko-KR')}
      </td>
      <td className="product-content-select">
        <button
          type="button"
          className="content-select-btn"
          onClick={() => alert('준비중입니다!')}
        >
          제품보기
        </button>
      </td>
    </LikeTableRow>
  );
}

export default LikeTableProduct;

const LikeTableRow = styled.tr`
  border-bottom: 1px solid rgb(228, 227, 227);

  .product-content-input {
    width: 20px;
  }
  .product-content-input input {
    margin: 15px 10px 15px 20px;
    cursor: pointer;
  }

  .product-content-detail {
    width: 547px;
    padding: 20px 0 20px 15px;
    display: flex;
    align-items: center;

    .content-detail-img {
      width: 100px;
      height: 100px;
    }

    .content-detail-name {
      margin: 0 0 5px 25px;
      font-size: 16px;
    }

    .content-detail-category {
      margin: 0 0 0 25px;
      text-align: left;
      font-size: 13px;
      color: #757575;
    }
  }

  .product-content-price {
    text-align: center;
    width: 230px;
    padding: 20px 0 20px;
    font-size: 17px;
  }

  .product-content-select {
    width: 230px;
    padding: 20px 0 20px;
    text-align: center;

    .content-select-btn {
      padding: 10px 20px;
      border: 1px solid #222;
      background-color: #222;
      color: white;
      cursor: pointer;

      &:hover {
        border: 1px solid #1ca14c;
        background-color: #1ca14c;
        color: white;
      }
    }
  }
`;
