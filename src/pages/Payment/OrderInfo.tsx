import React from 'react';
import Constant from '../../commons/Constant';

interface OrderInfoProps {
  choiceMessages: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  inputMessages: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isOrderInput: boolean;
  orderMessages: string;
  address: string;
}

function OrderInfo({
  choiceMessages,
  isOrderInput,
  inputMessages,
  orderMessages,
  address,
}: OrderInfoProps) {
  return (
    <div className="order-info">
      <div className="order-address">
        <strong>배송지</strong>
        <p>{address}</p>
      </div>
      <div className="order-message">
        <strong>배송메세지</strong>
        <div className="order-choice-wrap">
          <select name="choice-message" onChange={choiceMessages}>
            {Constant.PAYMENT.SHIPPING.map(option => (
              <option value={option}>{option}</option>
            ))}
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
  );
}

export default OrderInfo;
