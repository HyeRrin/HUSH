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
