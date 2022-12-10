import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartTable from './CartTable';
import CartCalculate from './CartCalculate';
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

  const navigate = useNavigate();
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

  let totalPrice = 0;
  for (let i = 0; i < productData.length; i += 1) {
    for (let j = 0; j < checkedList.length; j += 1) {
      if (productData[i].pId === checkedList[j]) {
        totalPrice += productData[i].price * productData[i].quantity;
      }
    }
  }

  const orderProduct = () => {
    if (checkedList.length > 0) {
      navigate('/paypage', { state: { product_id: checkedList } });
    } else {
      alert('주문할 상품을 선택해주세요!');
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
      {productData.length < 1 && (
        <div className="product-empty">
          <img className="empty-img" src="/images/like/sad.png" alt="아이콘" />
          <p className="empty-text">아직 장바구니에 담긴 제품이 없네요!</p>
        </div>
      )}
      {productData.length > 0 && (
        <button
          type="button"
          className="cart-delete-btn"
          onClick={deleteChecked}
        >
          선택 삭제
        </button>
      )}
      <CartCalculate />
      {/* <ul className="cart-calc">
        <li>
          <span className="calc-title">선택제품</span>
          <span className="calc-count">{checkedList.length} 개</span>
        </li>
        <li>
          <span className="calc-title">제품합계</span>
          <span className="calc-sum">
            ₩ {totalPrice.toLocaleString('ko-KR')}
          </span>
        </li>
        <li className="title-wrap">
          <span className="calc-title title-shift">배송비</span>
          <span className="calc-sum">무료</span>
        </li>
        <li className="title-wrap">
          <span className="calc-title title-price">주문금액</span>
          <span className="calc-sum">
            ₩ {totalPrice.toLocaleString('ko-KR')}
          </span>
        </li>
      </ul> */}
      <div>
        <button
          type="button"
          className="cart-btn shop-btn"
          onClick={() => navigate('/main')}
        >
          쇼핑 계속하기
        </button>
        <button
          type="button"
          className="cart-btn pay-btn"
          onClick={orderProduct}
        >
          주문하기
        </button>
      </div>
    </div>
  );
}

export default Cart;
