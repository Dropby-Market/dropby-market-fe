export interface OrderItem {
  orderItemId: number;
  productName: string;
  quantity: number;
  price: number;
}

type OrderStatus =
  | 'RECEIVED' // 접수
  | 'PREPARING' // 준비중
  | 'READY' // 준비완료
  | 'PICKED_UP' // 픽업완료
  | 'REJECTED'; // 거부

export interface Order {
  orderId: number;
  storeName: string;
  lng: number;
  lat: number;
  totalPrice: number;
  orderDate: string;
  status: OrderStatus;
  orderItems: OrderItem[];
}
