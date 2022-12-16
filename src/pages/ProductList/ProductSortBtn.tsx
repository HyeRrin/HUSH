import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Dropdown from '../../components/Dropdown';
import { getProductList } from '../../store/slices';
import { RootState } from '../../store';
import { ProductListType } from '../../types/types';

function ProductSortBtn() {
  const dispatch = useDispatch();
  const [dropdownMenu, setDropDownMenu] = useState(false);
  const productList: ProductListType[] = useSelector(
    (state: RootState) => state.productList.value,
  );

  const sortProductAsc = () => {
    const priceSorting = [...productList];
    priceSorting.sort((a: any, b: any) => a.price - b.price);
    dispatch(getProductList(priceSorting));
  };

  const sortProductDesc = () => {
    const priceSorting = [...productList];
    priceSorting.sort((a: any, b: any) => b.price - a.price);
    dispatch(getProductList(priceSorting));
  };

  return (
    <SortBtnContainer>
      <button
        type="button"
        className="product-sort-btn"
        onClick={() => {
          setDropDownMenu(!dropdownMenu);
        }}
      >
        정렬
      </button>
      <Dropdown visibility={dropdownMenu}>
        <ul className="product-dropdown">
          <button
            type="button"
            className="product-dropdown-btn"
            onClick={sortProductAsc}
          >
            <li>낮은가격순</li>
          </button>

          <button
            type="button"
            className="product-dropdown-btn"
            onClick={sortProductDesc}
          >
            <li>높은가격순</li>
          </button>
        </ul>
      </Dropdown>
    </SortBtnContainer>
  );
}

export default ProductSortBtn;

const SortBtnContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .product-sort-btn {
    width: 200px;
    height: 50px;
    background-color: white;
    border: 1px solid #000;
  }

  .product-dropdown {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0px;
    width: 200px;
    height: 300px;
    z-index: 1;
    font-size: 30px;

    .product-dropdown-btn {
      height: 50px;
      border: 1px solid black;
      background-color: white;

      &:hover {
        background-color: rgb(242, 238, 238);
      }
    }

    .product-dropdown-btn li {
      font-size: 17px;
    }
  }
`;
