export interface Product {
  id: string;
  title: string;
  description: string;
  color: string;
  size: {
    width: number;
    depth: number;
    height: number;
    unit: string;
  };
  quantity: number;
  price: number;
  image: any;
}
