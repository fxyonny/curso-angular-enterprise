export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: string;
    discount_amount: string;
    status: boolean;
    categories: Category[];
  }
  
  export interface Category {
    id: number;
    name: string;
  }