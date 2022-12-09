import React, { useState, useEffect } from 'react';
import LikeProduct from './LikeProduct';
import './Like.scss';

interface ProductDataType {
  product_id: number;
  category_name: string;
  product_name: string;
  price: number;
  quantity: number;
  thumnail_url: string;
}

function Like() {
  const accessToken = localStorage.getItem('accessToken');
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('authorization', accessToken || 'Token not found');

  const [productData, setProductData] = useState<ProductDataType[]>([]);
  const [checkedList, setCheckedList] = useState<number[]>([]);

  const getData = () => {
    // fetch('http://172.20.10.4:3000/user/like', {
    fetch('./data/like.json', {
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
        setProductData(data.likes);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSingleChecked = (id: any) => {
    if (!checkedList.includes(id)) {
      setCheckedList([...checkedList, id]);
    } else {
      setCheckedList(checkedList.filter(el => el !== Number(id)));
    }
  };

  const handleAllChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const newArr: number[] = [];
      productData.forEach(el => newArr.push(el.product_id));
      setCheckedList(newArr);
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
      fetch(
        `http://172.20.10.4:3000/user/like/deletelike?${checkedQueryString()}`,
        {
          method: 'DELETE',
          headers: requestHeaders,
        },
      )
        .then(response => {
          if (response.ok) {
            getData();
          }
          throw new Error('에러 발생!');
        })
        .catch(error => {
          alert(error);
        });
    } else {
      alert('삭제할 상품을 선택해주세요!');
    }
  };

  return (
    <div className="like">
      <h1 className="like-title">찜목록</h1>
      <table className="like-product">
        <thead className="like-product-head">
          <tr>
            <th>
              <input
                className="head-checkbox"
                type="checkbox"
                id="checkbox"
                checked={checkedList.length === productData.length}
                onChange={handleAllChecked}
              />
              <label htmlFor="checkbox" />
            </th>
            <th className="head-text-info">제품 정보</th>
            <th className="head-text">금액</th>
            <th className="head-text">선택</th>
          </tr>
        </thead>
        <tbody className="like-product-body">
          {productData.map(product => (
            <LikeProduct
              key={product.product_id}
              img={product.thumnail_url}
              name={product.product_name}
              category={product.category_name}
              price={product.price}
              handleSingleChecked={() =>
                handleSingleChecked(product.product_id)
              }
              {...checkedList}
            />
          ))}
        </tbody>
      </table>
      {productData.length < 1 && (
        <div className="product-empty">
          <img className="empty-img" src="/images/like/sad.png" alt="아이콘" />
          <p className="empty-text">아직 찜한 상품이 없네요!</p>
        </div>
      )}
      {productData.length > 0 && (
        <button
          type="button"
          className="like-delete-btn"
          onClick={deleteChecked}
        >
          선택 삭제
        </button>
      )}
    </div>
  );
}

export default Like;
