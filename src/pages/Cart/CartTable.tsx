import React from 'react';
import CartProduct from './CartProduct';
import './Cart.scss';

interface ProductData {
  pId: any;
  cateName: string;
  pName: string;
  price: number;
  quantity: number;
  url: string;
  checkBox: number;
  pStock: number;
  uId: Number;
}

interface CartTableProps {
  productData: ProductData[];
  setProductData: any;
  checkedList: number[];
  handleSingleChecked: any;
  handleAllChecked: any;
}

function CartTable({
  productData,
  setProductData,
  checkedList,
  handleSingleChecked,
  handleAllChecked,
}: CartTableProps) {
  const accessToken = localStorage.getItem('accessToken');

  return (
    <table className="cart-product">
      <thead className="cart-product-head">
        <tr>
          <th>
            <input
              className="head-checkbox"
              type="checkbox"
              id="checkbox"
              checked={checkedList.length === productData.length}
              onChange={handleAllChecked}
            />
            <label htmlFor="checkbox" />
          </th>
          <th className="head-text-info">제품 정보</th>
          <th className="head-text">수량</th>
          <th className="head-text">금액</th>
          <th className="head-text-total">합계금액</th>
        </tr>
      </thead>
      <tbody className="cart-product-body">
        {productData.map(product => (
          <CartProduct
            setProductData={setProductData}
            accessToken={accessToken}
            key={product.pId}
            id={product.pId}
            img={product.url}
            name={product.pName}
            category={product.cateName}
            quantity={product.quantity}
            price={product.price}
            stock={product.pStock}
            handleSingleChecked={handleSingleChecked}
            checkedList={checkedList}
          />
        ))}
      </tbody>
    </table>
  );
}

export default CartTable;
