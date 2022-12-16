import React from 'react';
import styled from 'styled-components';

interface CategoryTabProps {
  currTab: string;
  setCurrTab: React.Dispatch<React.SetStateAction<string>>;
}

function CategoryTab({ currTab, setCurrTab }: CategoryTabProps) {
  const TAB_LIST = ['all', '초콜릿', '캔디', '쿠키', '젤리', '케이크'];

  return (
    <CategoryTabContainer>
      <div className="products-tabs">
        <ul className="tabs">
          {TAB_LIST.map(tab => (
            <li
              role="presentation"
              key={tab}
              className={`product-tab-name ${
                currTab === tab ? 'selected' : ''
              }`}
              onClick={() => setCurrTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    </CategoryTabContainer>
  );
}

export default CategoryTab;

const CategoryTabContainer = styled.div`
  .tabs {
    display: flex;
    justify-content: flex-start;
    margin: 0 -15px;
    border-bottom: 1px solid rgb(190, 187, 187);
  }

  .product-tab-name {
    margin: 0 15px;
    text-transform: uppercase;
    font-size: 30px;
    color: grey;
    cursor: pointer;

    &:hover {
      color: #000;
    }

    &.selected {
      color: #000;

      &:after {
        transform: scaleX(1.7);
      }
    }

    &::after {
      display: block;
      content: '';
      border-bottom: 5px solid #000;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }

    &:hover:after {
      transform: scaleX(1.2);
    }
  }
`;
