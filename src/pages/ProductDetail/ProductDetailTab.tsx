import React, { useState } from 'react';
import styled from 'styled-components';
import ProductReview from './ProductReview/ProductReview';

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

function ProductDetailTab() {
  const [currTab, setCurrTab] = useState<string>('제품정보');

  const TAB_CONTENT: TabContentType = {
    제품정보: <h2 className="center">준비 중 입니다.</h2>,
    제품후기: <ProductReview />,
    '배송/반품/교환 안내': <h2 className="center">준비 중 입니다.</h2>,
    '상품필수 정보': <h2 className="center">준비 중 입니다.</h2>,
  };

  return (
    <DetailTabContainer>
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
    </DetailTabContainer>
  );
}

export default ProductDetailTab;

const DetailTabContainer = styled.div`
  .prd-tabs {
    margin: 100px 0 65px 0;
    border-bottom: 1px solid #ddd;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        position: relative;
        padding: 10px 20px;
        font-size: 18px;
        cursor: pointer;

        &.active:after {
          content: '';
          display: block;
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #000;
        }
      }
    }
  }

  .tab-content {
    min-height: 100px;
    margin-bottom: 100px;
  }

  .center {
    font-size: 20px;
    text-align: center;
  }
`;
