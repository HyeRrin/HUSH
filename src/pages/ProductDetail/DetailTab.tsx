import React, { useState } from 'react';
import DetailPrdInfo from './DetailPrdInfo';
import DetailPrdReview from './DetailPrdReview';
import './DetailTab.scss';

interface TabContentType {
  제품정보: JSX.Element;
  제품후기: JSX.Element;
  '배송/반품/교환 안내': JSX.Element;
  '상품필수 정보': JSX.Element;
}

const TAB_CATEGORIES = [
  '제품정보',
  '제품후기',
  '배송/반품/교환 안내',
  '상품필수 정보',
];

function DetailTab() {
  const [currTab, setCurrTab] = useState<string>('제품정보');

  const TAB_CONTENT: TabContentType = {
    제품정보: <h2 className="center">준비 중 입니다.</h2>,
    제품후기: <DetailPrdReview />,
    '배송/반품/교환 안내': <h2 className="center">준비 중 입니다.</h2>,
    '상품필수 정보': <h2 className="center">준비 중 입니다.</h2>,
  };

  return (
    <>
      <div className="prd-tabs">
        <ul>
          {TAB_CATEGORIES.map(tab => (
            <li
              role="presentation"
              key={tab}
              className={`${currTab === tab ? 'active' : ''}`}
              onClick={() => setCurrTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
      <div className="tab-content">
        {TAB_CONTENT[currTab as keyof TabContentType]}
      </div>
    </>
  );
}

export default DetailTab;
