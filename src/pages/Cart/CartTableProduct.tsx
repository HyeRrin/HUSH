import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface ProductData {
  pId: any;
  cateName: string;
  pName: string;
  price: number;
  quantity: number;
  url: string;
  checkBox: number;
  pStock: number;
  uId: Number;
}

interface CartProductProps {
  id: any;
  img: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  stock: number;
  handleSingleChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkedList: number[];
  setProductData: Dispatch<SetStateAction<ProductData[]>>;
  accessToken: string | null;
}

function CartProduct({
  id,
  img,
  name,
  category,
  quantity,
  price,
  stock,
  handleSingleChecked,
  checkedList,
  setProductData,
  accessToken,
}: CartProductProps) {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('authorization', accessToken || 'Token not found');
  const totalSum: number = quantity * price;

  const decreaseQuantity = () => {
    if (quantity <= 1) {
      alert('최소 구매가능 수량은 1개입니다.');
    } else {
      fetch(
        `http://172.20.10.6:3000/cart/control?productId=${id}&quantity=${
          quantity - 1
        }`,
        {
          method: 'POST',
          headers: requestHeaders,
        },
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('에러 발생!');
        })
        .catch(error => {
          alert(error);
        })
        .then(data => {
          setProductData(data.result);
        });
    }
  };

  const increaseQuantity = () => {
    if (quantity >= stock) {
      alert(`최대 구매가능 수량은 ${stock}개입니다.`);
    } else {
      fetch(
        `http://172.20.10.6:3000/cart/control?productId=${id}&quantity=${
          quantity + 1
        }`,
        {
          method: 'POST',
          headers: requestHeaders,
        },
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('에러 발생!');
        })
        .catch(error => {
          alert(error);
        })
        .then(data => {
          setProductData(data.result);
        });
    }
  };

  return (
    <Style className="cart-product-content">
      <td className="product-content-input">
        <input
          type="checkbox"
          id={id}
          checked={checkedList.includes(id)}
          onChange={handleSingleChecked}
        />
      </td>
      <td className="product-content-detail">
        <img className="content-detail-img" src={img} alt="제품 이미지" />
        <div>
          <p className="content-detail-name">{name}</p>
          <p className="content-detail-category">{category}</p>
        </div>
      </td>
      <td className="product-content-quantity">
        <button
          type="button"
          className="quantity-btn minus-btn"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <span className="quantity-count">{quantity}</span>
        <button
          type="button"
          className="quantity-btn plus-btn"
          onClick={increaseQuantity}
        >
          +
        </button>
      </td>
      <td className="product-content-price">
        ₩ {price.toLocaleString('ko-KR')}
      </td>
      <td className="product-content-totalPrice">
        ₩ {totalSum.toLocaleString('ko-KR')}
      </td>
    </Style>
  );
}

export default CartProduct;

const Style = styled.tr`
  .cart-product-content {
    border-bottom: 1px solid rgb(228, 227, 227);
  }

  .product-content-input input {
    margin: 15px 10px 15px 20px;
    cursor: pointer;
  }

  .product-content-detail {
    padding: 20px 80px 20px 20px;
    display: flex;
    align-items: center;
  }
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
    font-size: 13px;
    color: #757575;
  }

  .product-content-quantity {
    text-align: center;
    padding: 0 60px;

    .quantity-count {
      display: inline-block;
      width: 40px;
      font-size: 17px;
    }

    .quantity-btn {
      width: 12px;
      height: 12px;
      background-size: 12px;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    .minus-btn {
      background: url('/asset/images/cart_minus.png');

      &:hover {
        background-image: url('/asset/images/cart_minus_hover.png');
      }
    }

    .plus-btn {
      background-image: url('/asset/images/cart_add.png');

      &:hover {
        background-image: url('/asset/images/cart_add_hover.png');
      }
    }
  }

  .product-content-price {
    padding: 0 87px;
    font-size: 17px;
  }

  .product-content-totalPrice {
    padding: 0 20px 0 100px;
    font-size: 17px;
  }
`;
