import React from 'react';
import './LikeProduct.scss';

interface LikeProductType {
  img: string;
  name: string;
  category: string;
  price: number;
  handleSingleChecked: () => void;
}

function LikeProduct({
  img,
  name,
  category,
  price,
  handleSingleChecked,
}: LikeProductType) {
  return (
    <tr className="like-product-content">
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
    </tr>
  );
}

export default LikeProduct;
