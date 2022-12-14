import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../store';

interface LikeTableHeadProps {
  checkedList: number[];
  handleAllChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LikeTableHead({ checkedList, handleAllChecked }: LikeTableHeadProps) {
  const likeData = useSelector((state: RootState) => state.like.value);

  return (
    <Style>
      <tr>
        <th>
          <input
            className="head-checkbox"
            type="checkbox"
            id="checkbox"
            checked={checkedList.length === likeData.length}
            onChange={handleAllChecked}
          />
          <label htmlFor="checkbox" />
        </th>
        <th className="head-text-info">제품 정보</th>
        <th className="head-text">금액</th>
        <th className="head-text">선택</th>
      </tr>
    </Style>
  );
}

export default LikeTableHead;

const Style = styled.thead`
  display: inline-block;
  width: 1050px;
  border-top: 3px solid #222;
  border-bottom: 1px solid rgb(228, 227, 227);

  .head-checkbox {
    margin: 15px 10px 15px 20px;
    cursor: pointer;
  }

  .head-text-info {
    width: 547px;
    display: inline-block;
    padding: 15px 200px 15px 0;
    font-weight: 400;
    font-size: 16px;
    color: #757575;
  }

  .head-text {
    padding: 15px 100px;
    font-weight: 400;
    font-size: 16px;
    color: #757575;
  }

  .head-text-total {
    padding: 15px 40px 15px 100px;
    font-weight: 400;
    color: #757575;
  }
`;
