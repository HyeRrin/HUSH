import React from 'react';
import styled from 'styled-components';

interface EmptyDataType {
  content: string;
}

function EmptyData({ content }: EmptyDataType) {
  return (
    <Style>
      <img className="empty-img" src="/images/like/sad.png" alt="아이콘" />
      <p className="empty-text">아직 {content}에 담긴 제품이 없네요!</p>
    </Style>
  );
}

export default EmptyData;

const Style = styled.div`
  padding: 110px 0 70px;
  text-align: center;

  .empty-img {
    width: 60px;
  }

  .empty-text {
    margin: 20px;
    font-size: 18px;
    color: #1ca14c;
  }
`;
