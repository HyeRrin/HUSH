import React from 'react';
import styled from 'styled-components';

interface ProductReviewModalProps {
  textArea: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleModal: () => void;
}

function ProductReviewModal({
  textArea,
  handleSubmit,
  handleTextarea,
  handleModal,
}: ProductReviewModalProps) {
  return (
    <ReviewModalContainer>
      <div className="write-modal-content">
        <h2>제품후기 작성</h2>
        <form onSubmit={handleSubmit}>
          <div className="group">
            <label htmlFor="content">내용</label>
            <textarea
              className="textarea"
              id="content"
              name="content"
              value={textArea}
              onChange={handleTextarea}
              placeholder="후기 내용을 작성해주세요.
특수문자(<, >, |, = , &lt, &gt 등) 입력은 불가능합니다."
              required
            />
          </div>
          <div className="submit-btn">
            <button type="submit">확인</button>
          </div>
        </form>
        <button type="button" className="close-btn" onClick={handleModal}>
          x
        </button>
      </div>
    </ReviewModalContainer>
  );
}

export default ProductReviewModal;

const ReviewModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);

  .write-modal-content {
    position: relative;
    width: 1000px;
    padding: 40px 100px;
    background: #fff;

    h2 {
      font-size: 32px;
      margin-bottom: 25px;
    }

    .close-btn {
      position: absolute;
      top: 35px;
      right: 100px;
      border: 0;
      background: transparent;
      color: #222;
      font-size: 30px;
      line-height: 30px;
      cursor: pointer;
    }

    .group {
      display: flex;
      align-items: center;
      padding: 20px 0;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;

      label {
        width: 20%;
        padding-left: 20px;
        font-size: 18px;
      }

      textarea {
        width: 485px;
        height: 240px;
      }
    }

    .submit-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;

      button {
        width: 232px;
        height: 65px;
        border: 0;
        background: #000;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;
