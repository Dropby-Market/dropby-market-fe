export interface CartItem {
  productName: string;
  quantity: number;
  price: number;
  storeName: string;
  marketName: string;
}

export interface Cart {
  cartItems: CartItem[];
  totalCartPrice: number;
}

export interface AddCartItemRequest {
  items: {
    productId: number;
    storeId: number;
    quantity: number;
  }[];
}

export interface UpdateCartItemRequest {
  items: {
    cartItemId: number;
    quantity: number;
  }[];
}

export interface DeleteCartItemRequest {
  cartItemIds: number[];
}

