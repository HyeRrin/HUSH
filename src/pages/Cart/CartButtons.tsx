import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface CartButtonsProps {
  checkedList: number[];
}

function CartButtons({ checkedList }: CartButtonsProps) {
  const navigate = useNavigate();

  const orderProduct = () => {
    if (checkedList.length > 0) {
      navigate('/paypage', { state: { product_id: checkedList } });
    } else {
      alert('주문할 상품을 선택해주세요!');
    }
  };

  return (
    <Style>
      <button
        type="button"
        className="cart-btn shop-btn"
        onClick={() => navigate('/main')}
      >
        쇼핑 계속하기
      </button>
      `
      <button type="button" className="cart-btn pay-btn" onClick={orderProduct}>
        주문하기
      </button>
    </Style>
  );
}

export default CartButtons;

const Style = styled.div`
  .cart-btn {
    margin: 30px 15px 100px 0;
    padding: 20px 0;
    width: 230px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      border: 1px solid #1ca14c;
      background-color: #1ca14c;
      color: white;
    }
  }

  .shop-btn {
    border: 1px solid #222;
    background-color: rgb(252, 252, 252);
  }

  .pay-btn {
    border: 1px solid #222;
    background-color: #222;
    color: white;
  }
`;
