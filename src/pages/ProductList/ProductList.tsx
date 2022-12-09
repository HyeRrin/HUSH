import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Product from './Product';
import Dropdown from './ProductDropdown';
import './ProductList.scss';

const TAB_LIST = ['all', '초콜릿', '캔디', '쿠키', '젤리', '케이크'];

function ProductList() {
  const [currTab, setCurrTab] = useState('all');
  const [productLists, setProductLists] = useState<any[]>([]);
  const [dropdownMenu, setDropDownMenu] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  // const limit = 12;
  // const offset = 0;

  const movePage = (pageNum: number) => {
    searchParams.set('offset', String((pageNum - 1) * 5));
    setSearchParams(searchParams);
  };

  const sortProductAsc = () => {
    const priceSorting = [...productLists];
    priceSorting.sort((a: any, b: any) => a - b);
    setProductLists(priceSorting);
  };

  const sortProductDesc = () => {
    const priceSorting = [...productLists];
    priceSorting.sort((a: any, b: any) => b - a);
    setProductLists(priceSorting);
  };

  // const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/posts?_start=${0}&_limit=${12}`)
    fetch(`data/${currTab}.json`)
      // fetch(
      //   `http://172.20.10.4:3001/products/?category=${currTab}&offset=${0}&limit=${12}`,
      //   {
      //     headers: {
      //       authorization: accessToken,
      //     },
      //   }
      // )
      .then(response => response.json())
      .then(result => setProductLists(result));
  }, [currTab, offset, limit]);

  return (
    <section className="product">
      <div className="product-nav">nav</div>
      <div className="product-pic">
        <img src="/images/cusCakes.jpg" alt="상품" />
        <div className="product-image-letter">
          <h2>HUSH</h2>
          <h3>ENJOY YOUR DESSERT!</h3>
        </div>
      </div>

      <div className="product-menu-tab-wrap">
        <div className="products-tabs-cont">
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
        </div>
        <div className="product-tog-cont">
          <div className="product-toggle">
            <button
              type="button"
              className="product-btn"
              onClick={() => {
                setDropDownMenu(!dropdownMenu);
              }}
            >
              필터링
            </button>
            <div>
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
            </div>
          </div>
        </div>
      </div>

      <div className="detail-product-wrap">
        <div className="detail-product-middle-box">
          {productLists.map(product => {
            return (
              <div className="detail-product-outer-cont" key={product.id}>
                <Product {...product} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="product-footer-button">
        <button type="button" onClick={() => movePage(1)}>
          1
        </button>
        <button type="button" onClick={() => movePage(2)}>
          2
        </button>
        <button type="button" onClick={() => movePage(3)}>
          3
        </button>
        <button type="button" onClick={() => movePage(4)}>
          4
        </button>
      </div>
    </section>
  );
}

export default ProductList;
