import React from 'react';

function OrderInfo({
  choiceMessages,
  isOrderInput,
  inputMessages,
  orderMessages,
  address,
}) {
  return (
    <div>
      <div className="order-info">
        <div className="order-address">
          <strong>배송지</strong>
          <p>{address}</p>
        </div>
        <div className="order-message">
          <strong>배송메세지</strong>
          <div className="order-choice-wrap">
            <select name="choice-message" onChange={choiceMessages}>
              <option value="선택해주세요">선택해주세요</option>
              <option value="부재 시 경비실에 맡겨주세요">
                부재 시 경비실에 맡겨주세요
              </option>
              <option value="직접 받을게요">직접 받을게요</option>
              <option value="배송 전에 연락주세요">배송 전에 연락주세요</option>
              <option value="">직접 입력</option>
            </select>
            {isOrderInput && (
              <input
                type="text"
                placeholder="배송지를 입력해주세요"
                value={orderMessages}
                onChange={inputMessages}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;
