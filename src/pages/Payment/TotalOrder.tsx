import React from 'react';
import styled from 'styled-components';

interface TotalOrderType {
  isCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  check: boolean;
  orderMessages: string;
  address: string;
  productData: any;
  product_id: number;
}

function TotalOrder({
  isCheck,
  check,
  orderMessages,
  address,
  productData,
  product_id,
}: TotalOrderType) {
  const accessToken = localStorage.getItem('accessToken');
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('authorization', accessToken || 'Token not found');
  const totalData = productData.reduce((sum: any, num: any): number => {
    let sumForReturn = sum;
    sumForReturn += num.price * num.quantiny;
    return sumForReturn;
  }, 0);

  const payBtn = () => {
    fetch('http://192.168.87.223:3000/order', {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify({
        total: totalData,
        reqMessage: orderMessages,
        address,
        prouctId: product_id,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      });
    alert('결제가 완료되었습니다');
  };

  return (
    <TotalOrderContainer>
      <div className="payment-wrap">
        <h2 className="pay-info">결제 정보</h2>
        <div className="payment-box">
          <p className="box-start">합계</p>
          <strong>₩{totalData}</strong>
          <p>+ 배송비</p>
          <strong>무료</strong>
          <p>= 최종 결제 금액</p>
          <h3>₩{totalData}</h3>
        </div>
      </div>
      <div className="pay-footer">
        <div>
          <input type="checkbox" name="color" value="blue" onChange={isCheck} />
          <span>(필수)</span>구매하실 제품의 결제정보를 확인하였으며, 구매진행에
          동의합니다.
        </div>
        <button type="button" disabled={!check} onClick={payBtn}>
          ₩ {totalData}원 결제하기
        </button>
      </div>
    </TotalOrderContainer>
  );
}

export default TotalOrder;

const TotalOrderContainer = styled.div`
  .payment-wrap {
    width: 1630px;
    margin-top: 20px;

    h2 {
      border-bottom: 1px solid rgba(0, 0, 0, 0);
      margin-bottom: 20px;
    }

    .payment-box {
      background: rgb(240, 239, 239);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      width: 1350px;
      height: 80px;
      margin: 0 auto;

      p {
        font-size: 30px;
        margin-left: 150px;
      }

      .box-start {
        margin-left: 20px;
      }

      strong {
        font-size: 30px;
        margin: 20px;
      }

      h3 {
        font-size: 30px;
        color: rgb(117, 178, 24);
        margin-left: 20px;
      }
    }
  }

  .pay-footer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 100px;
    text-align: center;

    span {
      color: red;
      margin-right: 2px;
      font-size: 17px;
    }

    button {
      margin: 0 auto;
      background: rgb(34, 213, 46);
      width: 500px;
      height: 50px;
      margin-top: 30px;
      border: 1px solid rgba(0, 0, 0, 0);
      color: white;
      font-size: 18px;
    }
  }
`;
