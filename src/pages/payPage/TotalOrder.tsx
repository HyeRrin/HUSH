import React from 'react';

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
    <>
      <div className="payment-wrap">
        <h2 className="pay-info">결제 정보</h2>ㅔ
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
        <label>
          <input type="checkbox" name="color" value="blue" onChange={isCheck} />
          <span>(필수)</span>구매하실 제품의 결제정보를 확인하였으며, 구매진행에
          동의합니다.
        </label>
        <button type="button" disabled={!check} onClick={payBtn}>
          ₩ {totalData}원 결제하기
        </button>
      </div>
    </>
  );
}

export default TotalOrder;
