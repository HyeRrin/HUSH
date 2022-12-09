import React, { useState } from 'react';
import DetailReviewList from './DetailReviewList';
import './DetailPrdReview.scss';

function DetailPrdReview() {
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
  console.log(listContent);

  return (
    <div className="detail-prd-review">
      <div className="review-write-btn">
        <button type="button" onClick={handleModal}>
          제풒후기 작성
        </button>
      </div>
      {modal && (
        <div className="review-write-modal-wrap">
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
        </div>
      )}
      <div className="review-list-content">
        <ul className="review-list-cont">
          {listContent.length > 0 ? (
            <DetailReviewList content={listContent} />
          ) : (
            <li className="none">등록된 후기가 없습니다.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default DetailPrdReview;
