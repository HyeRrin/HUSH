import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

interface CartTableHeadProps {
  checkedList: number[];
  handleAllChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CartTableHead({ checkedList, handleAllChecked }: CartTableHeadProps) {
  const cartData = useSelector((state: any) => state.cart.value);

  return (
    <TableHead>
      <tr>
        <th>
          <input
            className="head-checkbox"
            type="checkbox"
            id="checkbox"
            checked={checkedList.length === cartData.length}
            onChange={handleAllChecked}
          />
          <label htmlFor="checkbox" />
        </th>
        <th className="head-text-info">제품 정보</th>
        <th className="head-text">수량</th>
        <th className="head-text">금액</th>
        <th className="head-text-total">합계금액</th>
      </tr>
    </TableHead>
  );
}

export default CartTableHead;

const TableHead = styled.thead`
  border-bottom: 1px solid rgb(228, 227, 227);

  .head-checkbox {
    margin: 15px 10px 15px 20px;
    cursor: pointer;
  }

  .head-text-info {
    display: inline-block;
    padding: 15px 150px;
    font-weight: 400;
    color: #757575;
  }

  .head-text {
    padding: 15px 100px;
    font-weight: 400;
    color: #757575;
  }

  .head-text-total {
    padding: 15px 40px 15px 100px;
    font-weight: 400;
    color: #757575;
  }
`;
