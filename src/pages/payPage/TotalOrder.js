import React from 'react';

function TotalOrder({
  isCheck,
  check,
  orderMessages,
  address,
  productData,
  product_id,
}) {
  const totalData = productData.reduce((sum, num) => {
    return (sum += num.price * num.quantiny);
  }, 0);

  const payBtn = () => {
    fetch('http://192.168.87.223:3000/order', {
      method: 'POST',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE2NjM3NTcxNTZ9.aWMCo2vBo_8cEUxE1HwGRekiuQvgRYEwS09JdFiQDmw',
      },
      body: JSON.stringify({
        total: totalData,
        reqMessage: orderMessages,
        address: address,
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
          <strong>{'₩' + totalData}</strong>
          <p>+ 배송비</p>
          <strong>무료</strong>
          <p>= 최종 결제 금액</p>
          <h3>{'₩' + totalData}</h3>
        </div>
      </div>
      <div className="pay-footer">
        <label>
          <input type="checkbox" name="color" value="blue" onChange={isCheck} />
          <span>(필수)</span>구매하실 제품의 결제정보를 확인하였으며, 구매진행에
          동의합니다.
        </label>
        <button disabled={check === false ? true : false} onClick={payBtn}>
          {'₩' + totalData}원 결제하기
        </button>
      </div>
    </>
  );
}

export default TotalOrder;
