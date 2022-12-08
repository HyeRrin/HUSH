import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import OrderInfo from './OrderInfo';
import ProductInfo from './ProductInfo';
import TotalOrder from './TotalOrder';
import './PayPage.scss';

function PayPage() {
  const requestHeaders: HeadersInit = new Headers();
  const accessToken = localStorage.getItem('accessToken');
  requestHeaders.set('authorization', accessToken || 'Token not found');

  const location = useLocation();
  const [check, setCheck] = useState(false);
  const [selecter, setSelecter] = useState<number>(0);
  const [orderMessages, setOrderMessages] = useState('');
  const [isOrderInput, setIsOrderInput] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>([]);
  const [productData, setProductData] = useState([]);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { product_id } = location.state;
  const { email, name, address } = userData;

  const isCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);
  };

  const choiceMessages = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelecter(e.target.selectedIndex);
    setOrderMessages(e.target.value);
  };

  const inputMessages = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderMessages(e.target.value);
  };

  useEffect(() => {
    if (selecter === 4) setIsOrderInput(true);
    else setIsOrderInput(false);
  }, [choiceMessages]);

  useEffect(() => {
    fetch('./data/products.json', {
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });

    fetch('./data/users.json', {
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setUserData(data);
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
        productData={productData}
        product_id={product_id}
      />
    </div>
  );
}

export default PayPage;
