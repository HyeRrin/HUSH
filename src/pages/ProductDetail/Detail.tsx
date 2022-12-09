import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailTab from './DetailTab';
import DetailTopInfo from './DetailTopInfo';
import './Detail.scss';

interface ProductDataType {
  category_name: string;
  product_name: string;
  price: number;
  stock: number;
  image_url: string;
}

function Detail() {
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
    <div className="detail-content">
      <div className="detail-wrap">
        <DetailTopInfo
          category_name={productData[0].category_name}
          product_name={productData[0].product_name}
          price={productData[0].price}
          stock={productData[0].stock}
          image_url={productData[0].image_url}
        />
      </div>
      <div className="prd-detail">
        <DetailTab />
      </div>
    </div>
  );
}

export default Detail;
