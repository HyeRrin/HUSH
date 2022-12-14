import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

interface CartCalculateProps {
  checkedList: number[];
}

function CartCalculate({ checkedList }: CartCalculateProps) {
  const cartData = useSelector((state: any) => state.cart.value);
  let totalPrice = 0;
  for (let i = 0; i < cartData.length; i += 1) {
    for (let j = 0; j < checkedList.length; j += 1) {
      if (cartData[i].pId === checkedList[j]) {
        totalPrice += cartData[i].price * cartData[i].quantity;
      }
    }
  }

  return (
    <Styled className="cart-calc">
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
    </Styled>
  );
}

export default CartCalculate;

const Styled = styled.ul`
  margin: 30px 0 40px 0;
  padding: 30px 0;
  width: 1060px;
  display: flex;
  justify-content: space-around;
  background-color: rgb(250, 250, 250);

  .calc-title {
    font-size: 18px;
    color: #757575;
  }

  .title-wrap {
    position: relative;
  }

  .title-shift::before {
    position: absolute;
    left: -75px;
    content: '+';
    font-size: 40px;
  }

  .title-price::before {
    position: absolute;
    left: -75px;
    content: '=';
    font-size: 40px;
  }

  .calc-count {
    margin: 0 0 0 20px;
    font-size: 22px;
    font-weight: bold;
  }

  .calc-sum {
    margin: 0 0 0 20px;
    font-size: 22px;
    font-weight: bold;
    color: #1ca14c;
  }
`;
