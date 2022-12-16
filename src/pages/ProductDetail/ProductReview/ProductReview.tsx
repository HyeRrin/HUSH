import React, { useState } from 'react';
import styled from 'styled-components';
import ProductReviewList from './ProductReviewList';
import ProductReviewModal from './ProductReviewModal';

function ProductReview() {
  const [modal, setModal] = useState(false);
  const [textArea, setTextArea] = useState('');
  const [listContent, setListContent] = useState<string[]>([]);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setListContent(prev => [...prev, textArea]);
    setTextArea('');
    setModal(!modal);
  };

  return (
    <ProductReviewContainer>
      <div className="review-write-btn">
        <button type="button" onClick={handleModal}>
          제품후기 작성
        </button>
      </div>
      {modal && (
        <ProductReviewModal
          textArea={textArea}
          handleTextarea={handleTextarea}
          handleSubmit={handleSubmit}
          handleModal={handleModal}
        />
      )}
      <div className="review-list-content">
        <ul className="review-list-cont">
          {listContent.length > 0 ? (
            <ProductReviewList content={listContent} />
          ) : (
            <li className="none">등록된 후기가 없습니다.</li>
          )}
        </ul>
      </div>
    </ProductReviewContainer>
  );
}

export default ProductReview;

const ProductReviewContainer = styled.div`
  .review-write-btn {
    margin-bottom: 20px;
    text-align: right;

    button {
      height: 40px;
      padding: 10px;
      font-size: 14px;
      color: #fff;
      border: 0;
      background: #000;
      cursor: pointer;
    }
  }

  .review-list-cont {
    border-bottom: 1px solid #ddd;

    li {
      padding: 25px 50px;
      border-top: 1px solid #ddd;

      &.none {
        text-align: center;
      }

      .review-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }
    }
  }
`;
