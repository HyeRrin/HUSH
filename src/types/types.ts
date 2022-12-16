export interface CartProductType {
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

export interface LikeProductType {
  product_id: number;
  category_name: string;
  product_name: string;
  price: number;
  quantity: number;
  thumnail_url: string;
}

export interface ProductListType {
  id: number;
  name: string;
  price: string;
  stock: number;
  thumbnail_image_url: string;
  category_name: string;
  create_at: string;
}
