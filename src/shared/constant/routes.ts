export const ROUTE_PATHS = {
  ROOT: '/',

  MARKET: 'market',
  // MARKET_DETAIL: ':marketId',

  MERCHANT: 'merchant',
  MERCHANT_DETAIL: ':merchantId',
  MERCHANT_ORDERS: 'orders',
  MERCHANT_PRODUCTS: 'products',
  MERCHANT_PRODUCT_EDIT: 'products/edit',
  MERCHANT_PRODUCT_EDIT_WITH_ID: 'products/edit/:productId?',

  STORE: 'store',
  STORE_DETAIL: ':storeId',
  STORE_MENU_DETAIL: ':storeId/:menuId',

  NOTIFICATION: 'notification',
  ORDER_HISTORY: 'order-history',
  PAYMENT: 'payment',
  PICKUP: 'pickup',
  CART: 'cart',
} as const;

export type RoutePathKey = keyof typeof ROUTE_PATHS;

export const buildPath = {
  marketDetail: (marketId: string) => `market/${marketId}`,
  merchantDetail: (merchantId: string) => `merchant/${merchantId}`,
  merchantProductEdit: (productId?: string) =>
    productId ? `merchant/products/edit/${productId}` : `merchant/products/edit`,
  storeDetail: (storeId: string) => `store/${storeId}`,
  storeMenuDetail: (storeId: string, menuId: string) => `store/${storeId}/${menuId}`,
} as const;
