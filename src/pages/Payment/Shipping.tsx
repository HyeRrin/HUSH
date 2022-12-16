import React from 'react';
import styled from 'styled-components';
import Constant from '../../constant/Constant';

interface ShippingProps {
  choiceMessages: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  inputMessages: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isOrderInput: boolean;
  orderMessages: string;
  address: string;
}

function Shipping({
  choiceMessages,
  isOrderInput,
  inputMessages,
  orderMessages,
  address,
}: ShippingProps) {
  return (
    <ShippingContainer>
      <div className="order-address">
        <p className="order-title">배송지</p>
        <p>{address}</p>
      </div>
      <div className="order-message">
        <p className="order-title">배송메세지</p>
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
    </ShippingContainer>
  );
}

export default Shipping;

const ShippingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 1330px;
  height: 140px;
  margin: 0 auto;
  padding-left: 50px;
  border-bottom: 1px solid black;

  .order-title {
    font-size: 20px;
    margin-right: 10px;
  }

  .order-address {
    display: flex;
    margin-bottom: 20px;
  }

  .order-message {
    display: flex;

    .order-choice-wrap {
      position: relative;
      display: flex;
      flex-direction: column;

      input {
        position: relative;
        top: 10px;
      }
    }
  }
`;
