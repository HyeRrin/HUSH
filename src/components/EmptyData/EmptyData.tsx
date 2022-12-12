import React from 'react';
import './EmptyData.scss';

interface EmptyDataType {
  content: string;
}

function EmptyData({ content }: EmptyDataType) {
  return (
    <div className="product-empty">
      <img className="empty-img" src="/images/like/sad.png" alt="아이콘" />
      <p className="empty-text">아직 {content}에 담긴 제품이 없네요!</p>
    </div>
  );
}

export default EmptyData;
