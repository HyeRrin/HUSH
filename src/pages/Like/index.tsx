import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LikeTable from './LikeTable/LikeTable';
import EmptyData from '../../components/EmptyData';
import { LikeProductType } from '../../types/types';

function Like() {
  const accessToken = localStorage.getItem('accessToken');
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('authorization', accessToken || 'Token not found');

  const [productData, setProductData] = useState<LikeProductType[]>([]);
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
        // setProductData(data.likes);
        setProductData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
    <LikeContainer>
      <h1 className="like-title">찜목록</h1>
      <LikeTable
        productData={productData}
        checkedList={checkedList}
        setCheckedList={setCheckedList}
      />
      {productData.length < 1 && <EmptyData content="찜목록" />}
      {productData.length > 0 && (
        <button
          type="button"
          className="like-delete-btn"
          onClick={deleteChecked}
        >
          선택 삭제
        </button>
      )}
    </LikeContainer>
  );
}

export default Like;

const LikeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .like-title {
    margin: 80px 960px 50px 0;
    font-size: 35px;
    letter-spacing: -4px;
  }

  .like-delete-btn {
    margin: 30px 950px 0 0;
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
