import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import OrderInfo from './OrderInfo';
import ProductInfo from './ProductInfo';
import TotalOrder from './TotalOrder';
import './PayPage.scss';

function PayPage() {
  const [check, setCheck] = useState(false);

  const isCheck = e => {
    setCheck(e.target.checked);
  };

  const [selecter, setSelecter] = useState('');
  const [orderMessages, setOrderMessages] = useState('');
  const [isOrderInput, setIsOrderInput] = useState(false);

  const choiceMessages = e => {
    setSelecter(e.target.selectedIndex);
    setOrderMessages(e.target.value);
  };

  const inputMessages = e => {
    setOrderMessages(e.target.value);
  };

  useEffect(() => {
    selecter === 4 ? setIsOrderInput(true) : setIsOrderInput(false);
  }, [choiceMessages]);

  const location = useLocation();
  const { product_id } = location.state;

  const [userData, setUserData] = useState([]);
  const [productData, setProductData] = useState([]);
  const { email, name, address } = userData;
  const accessToken = localStorage.getItem('accessToken'); //로그인 시 발행 토큰

  const checkedQueryString = () => {
    let checkedProducts = '';
    for (let i = 0; i < product_id.length; i++) {
      checkedProducts += `productId=${product_id[i]}&`;
    }
    return checkedProducts.slice(0, -1);
  };

  useEffect(() => {
    fetch('./data/users.json', {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE2NjQwMDk3ODR9.nvQGE9HLe8n-JCgqqRk3O-2dGEujzQhWIgm0WyCKN60',
      },
    })
      .then(res => res.json())
      .then(data => {
        setUserData(data.message);
      });
  }, []);

  useEffect(() => {
    fetch('./data/products.json', {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE2NjQwMDk3ODR9.nvQGE9HLe8n-JCgqqRk3O-2dGEujzQhWIgm0WyCKN60',
      },
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data.message);
      });
  }, []);

  return (
    <div className="pay-wrap">
      <h1>주문/결제</h1>
      <div className="product-wrap">
        <h2>제품정보</h2>
        <ProductInfo productData={productData} />
      </div>
      <div className="orderer-wrap">
        <h2>주문자 정보</h2>
        <div className="orderer-info">
          <p>주문자 정보</p>
          <div className="orderer-match">
            <p>{name}</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
      <div className="order-wrap">
        <h2>배송 정보</h2>
        <OrderInfo
          choiceMessages={choiceMessages}
          inputMessages={inputMessages}
          isOrderInput={isOrderInput}
          orderMessages={orderMessages}
          address={address}
        />
      </div>
      <TotalOrder
        isCheck={isCheck}
        check={check}
        orderMessages={orderMessages}
        address={address}
        testProductId={testProductId}
        productData={productData}
        product_id={product_id}
      />
    </div>
  );
}

export default PayPage;
