import React from 'react';
import { useSelector } from 'react-redux';
import CartTableHead from './CartTableHead';
import CartTableProduct from './CartTableProduct';

interface CartTableProps {
  checkedList: number[];
  handleSingleChecked: any;
  handleAllChecked: any;
}

function CartTable({
  checkedList,
  handleSingleChecked,
  handleAllChecked,
}: CartTableProps) {
  const accessToken = localStorage.getItem('accessToken');
  const cartData = useSelector((state: any) => state.cart.value);

  return (
    <table className="cart-product">
      <CartTableHead
        checkedList={checkedList}
        handleAllChecked={handleAllChecked}
      />
      <tbody>
        {cartData.map((product: any) => (
          <CartTableProduct
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
