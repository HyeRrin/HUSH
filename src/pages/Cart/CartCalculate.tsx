import React from 'react';

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

interface CartCalculateProps {
  productData: ProductData[];
  checkedList: number[];
}

function CartCalculate({ productData, checkedList }: CartCalculateProps) {
  let totalPrice = 0;
  for (let i = 0; i < productData.length; i += 1) {
    for (let j = 0; j < checkedList.length; j += 1) {
      if (productData[i].pId === checkedList[j]) {
        totalPrice += productData[i].price * productData[i].quantity;
      }
    }
  }

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
