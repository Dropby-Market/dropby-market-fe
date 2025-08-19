export const END_POINT = {
  GET_MARKETS: `/api/v1/markets`,
  GET_MARKET: (marketId: number) => `/api/v1/markets/${marketId}`,
  GET_ORDER_HISTORY: `/api/v1/orders`,
  GET_STORES: `/api/v1/stores/index/1`,

  // 장바구니
  CARTS: `/api/v1/carts`,
};
