import React from 'react';
import styled from 'styled-components';
import LikeTableProduct from './LikeTableProduct';
import LikeTableHead from './LikeTableHead';
import { LikeProductType } from '../../types/types';

interface LikeTableProps {
  checkedList: number[];
  setCheckedList: React.Dispatch<React.SetStateAction<number[]>>;
  productData: LikeProductType[];
}

function LikeTable({
  checkedList,
  setCheckedList,
  productData,
}: LikeTableProps) {
  const handleSingleChecked = (id: any) => {
    if (!checkedList.includes(id)) {
      setCheckedList([...checkedList, id]);
    } else {
      setCheckedList(checkedList.filter(el => el !== Number(id)));
    }
  };

  const handleAllChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const newArr: number[] = [];
      productData.forEach(el => newArr.push(el.product_id));
      setCheckedList(newArr);
    } else {
      setCheckedList([]);
    }
  };
  return (
    <LikeTableContainer className="like-product">
      <LikeTableHead
        checkedList={checkedList}
        productData={productData}
        handleAllChecked={handleAllChecked}
      />
      <tbody className="like-product-body">
        {productData.map(product => (
          <LikeTableProduct
            key={product.product_id}
            img={product.thumnail_url}
            name={product.product_name}
            category={product.category_name}
            price={product.price}
            handleSingleChecked={() => handleSingleChecked(product.product_id)}
            {...checkedList}
          />
        ))}
      </tbody>
    </LikeTableContainer>
  );
}

export default LikeTable;

const LikeTableContainer = styled.table`
  .like-product {
    text-align: center;
  }

  .like-product-body {
    display: inline-block;
    width: 1050px;
  }
`;
