import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Product from './Product';
import ProductSortBtn from './ProductSortBtn';
import { getProductList } from '../../store/slices';
import { RootState } from '../../store';
import CategoryTab from './CategoryTab';
import Pagination from './Pagination';
import ProductListBanner from './ProductListBanner';
import { ProductListType } from '../../types/types';

function ProductList() {
  const dispatch = useDispatch();
  const productList: ProductListType[] = useSelector(
    (state: RootState) => state.productList.value,
  );
  const [currTab, setCurrTab] = useState('all');
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  // const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    fetch(`data/${currTab}.json`)
      // fetch(`https://jsonplaceholder.typicode.com/posts?_start=${0}&_limit=${12}`)
      // fetch(
      //   `http://172.20.10.4:3001/products/?category=${currTab}&offset=${0}&limit=${12}`,
      //   {
      //     headers: {
      //       authorization: accessToken,
      //     },
      //   },
      // )
      .then(response => response.json())
      .then(result => dispatch(getProductList(result)));
  }, [currTab, offset, limit]);

  return (
    <ProductContainer>
      <ProductListBanner />
      <div className="product-menu-tab-wrap">
        <CategoryTab currTab={currTab} setCurrTab={setCurrTab} />
        <ProductSortBtn />
      </div>
      <div className="detail-product-middle-box">
        {productList.map(product => {
          return (
            <div className="detail-product-outer-cont" key={product.id}>
              <Product {...product} />
            </div>
          );
        })}
      </div>
      <Pagination
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </ProductContainer>
  );
}

export default ProductList;

const ProductContainer = styled.div`
  width: 1200px;
  margin: 0 auto;

  .product-menu-tab-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .detail-product-middle-box {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    .detail-product-outer-cont {
      width: 25%;
      padding: 10px;
    }
  }
`;
