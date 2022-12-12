import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CartTable from './CartTable';
import CartCalculate from './CartCalculate';
import CartButtons from './CartButtons';
import EmptyData from '../../components/EmptyData';
import { CartProductType } from '../../types/types';

function Cart() {
  const requestHeaders: HeadersInit = new Headers();
  const accessToken = localStorage.getItem('accessToken');
  requestHeaders.set('authorization', accessToken || 'Token not found');

  const [productData, setProductData] = useState<CartProductType[]>([]);
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
    <Style>
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
    </Style>
  );
}

export default Cart;

const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .cart-title {
    margin: 50px 0;
    text-align: center;
    font-size: 56px;
    letter-spacing: -4px;
  }

  .cart-subTitle {
    padding: 18px 504px;
    display: inline-block;
    background-color: #222;
    font-weight: bold;
    font-size: 16px;
    color: white;
  }

  .cart-delete-btn {
    margin: 15px 950px 0 0;
    padding: 10px 20px;
    border: 1px solid #222;
    background-color: rgb(252, 252, 252);
    cursor: pointer;

    &:hover {
      border: 1px solid #1ca14c;
      background-color: #1ca14c;
      color: white;
    }
  }
`;
