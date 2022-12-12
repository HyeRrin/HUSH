import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <button
        type="button"
        className="cart-btn shop-btn"
        onClick={() => navigate('/main')}
      >
        쇼핑 계속하기
      </button>
      <button type="button" className="cart-btn pay-btn" onClick={orderProduct}>
        주문하기
      </button>
    </div>
  );
}

export default CartButtons;
