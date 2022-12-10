import React from 'react';

function CartCalculate(props) {
  return (
    <ul className="cart-calc">
      <li>
        <span className="calc-title">선택제품</span>
        <span className="calc-count">{checkedList.length} 개</span>
      </li>
      <li>
        <span className="calc-title">제품합계</span>
        <span className="calc-sum">₩ {totalPrice.toLocaleString('ko-KR')}</span>
      </li>
      <li className="title-wrap">
        <span className="calc-title title-shift">배송비</span>
        <span className="calc-sum">무료</span>
      </li>
      <li className="title-wrap">
        <span className="calc-title title-price">주문금액</span>
        <span className="calc-sum">₩ {totalPrice.toLocaleString('ko-KR')}</span>
      </li>
    </ul>
  );
}

export default CartCalculate;
