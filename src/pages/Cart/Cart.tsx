import React, { useState, useEffect } from 'react';

import CartTable from './CartTable';
import CartCalculate from './CartCalculate';
import CartButtons from './CartButtons';
import EmptyData from '../../components/EmptyData/EmptyData';
import './Cart.scss';

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

function Cart() {
  const requestHeaders: HeadersInit = new Headers();
  const accessToken = localStorage.getItem('accessToken');
  requestHeaders.set('authorization', accessToken || 'Token not found');

  const [productData, setProductData] = useState<ProductData[]>([]);
  const [checkedList, setCheckedList] = useState<number[]>([]);

  useEffect(() => {
    fetch('/data/cart.json', {
      headers: requestHeaders,
    })
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
        setProductData(data);
      });
  }, []);

  const handleSingleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckedList([...checkedList, Number(e.target.id)]);
    } else {
      setCheckedList(checkedList.filter(el => el !== Number(e.target.id)));
    }
  };

  const handleAllChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allCheckedList: number[] = [];
      productData.forEach(el => allCheckedList.push(el.pId));
      setCheckedList(allCheckedList);
    } else {
      setCheckedList([]);
    }
  };

  const checkedQueryString = () => {
    let checkedProducts = '';
    for (let i = 0; i < checkedList.length; i += 1) {
      checkedProducts += `productId=${checkedList[i]}&`;
    }
    return checkedProducts.slice(0, -1);
  };

  const deleteChecked = () => {
    if (checkedList.length > 0) {
      fetch(`http://172.20.10.6:3000/cart?${checkedQueryString()}`, {
        method: 'DELETE',
        headers: requestHeaders,
      })
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
      setCheckedList([]);
    } else {
      alert('삭제할 상품을 선택해주세요!');
    }
  };

  return (
    <div className="cart">
      <h1 className="cart-title">장바구니</h1>
      <div className="cart-subTitle">일반배송</div>
      <CartTable
        productData={productData}
        setProductData={setProductData}
        checkedList={checkedList}
        handleSingleChecked={handleSingleChecked}
        handleAllChecked={handleAllChecked}
      />
      {productData.length < 1 && <EmptyData content="장바구니" />}
      {productData.length > 0 && (
        <button
          type="button"
          className="cart-delete-btn"
          onClick={deleteChecked}
        >
          선택 삭제
        </button>
      )}
      <CartCalculate productData={productData} checkedList={checkedList} />
      <CartButtons checkedList={checkedList} />
    </div>
  );
}

export default Cart;
