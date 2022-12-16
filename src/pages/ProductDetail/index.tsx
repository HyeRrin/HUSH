import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductDetailTab from './ProductDetailTab';
import ProductDetailInfo from './ProductDetailInfo';

interface ProductDataType {
  category_name: string;
  product_name: string;
  price: number;
  stock: number;
  image_url: string;
}

function ProductDetail() {
  const accessToken = localStorage.getItem('accessToken');
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('authorization', accessToken || 'Token not found');
  const params = useParams();
  const productId = params.id;
  const [productData, setProductData] = useState<ProductDataType[]>([]);

  useEffect(() => {
    // fetch(`http://192.168.87.223:3001/products/showproduct/${productId}`, {
    fetch('/data/product.json', {
      method: 'GET',
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        // setProductData(data.message);
        setProductData(data);
      });
  }, [productId]);

  if (Object.keys(productData).length === 0) return <>loading...</>;

  return (
    <ProductDetailContainer>
      <ProductDetailInfo
        category_name={productData[0].category_name}
        product_name={productData[0].product_name}
        price={productData[0].price}
        stock={productData[0].stock}
        image_url={productData[0].image_url}
      />
      <ProductDetailTab />
    </ProductDetailContainer>
  );
}

export default ProductDetail;

const ProductDetailContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
