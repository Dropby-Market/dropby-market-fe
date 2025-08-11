import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy, type ReactElement } from 'react';
import Layout from '../layout/Layout.tsx';
import ErrorPage from '../shared/ui/ErrorPage.tsx';
import { ROUTE_PATHS } from '../shared/constant/routes.ts';

const Home = lazy(() => import('../page/home/Home.tsx'));
const MarketExplore = lazy(() => import('../page/Market/MarketExplore/MarketExplore.tsx'));
const MarketDetail = lazy(() => import('../page/Market/MarketDetail/MarketDetail.tsx'));
const MerchantList = lazy(() => import('../page/Merchant/MerchantList/MerchantList.tsx'));
const MerchantDetail = lazy(() => import('../page/Merchant/MerchantDetail/MerchantDetail.tsx'));
const MerchantOrderManage = lazy(
  () => import('../page/Merchant/MerchantOrderManage/MerchantOrderManage.tsx')
);
const MerchantProductManage = lazy(
  () => import('../page/Merchant/MerchantProductManage/MerchantProductManage.tsx')
);
const MerchantProductEdit = lazy(
  () => import('../page/Merchant/MerchantProductEdit/MerchantProductEdit.tsx')
);
const Notification = lazy(() => import('../page/Notification/Notification.tsx'));
const OrderHistory = lazy(() => import('../page/OrderHistory/OrderHistory.tsx'));
const Payment = lazy(() => import('../page/Payment/Payment.tsx'));
const PickupMap = lazy(() => import('../page/PickupMap/PickupMap.tsx'));
const StoreDetail = lazy(() => import('@/page/Store/StoreDetail/StoreDetail.tsx'));
const StoreMenuDetail = lazy(() => import('@/page/Store/StoreMenuDetail/StoreMenuDetail.tsx'));
const Cart = lazy(() => import('../page/Cart/Cart.tsx'));

const withSuspense = (Component: ReactElement) => (
  <Suspense fallback={<div>Loading...</div>}>{Component}</Suspense>
);

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.ROOT,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: withSuspense(<Home />) },

      {
        path: ROUTE_PATHS.MARKET,
        children: [
          { index: true, element: withSuspense(<MarketExplore />) },
          { path: ROUTE_PATHS.MARKET_DETAIL, element: withSuspense(<MarketDetail />) },
        ],
      },

      {
        path: ROUTE_PATHS.MERCHANT,
        children: [
          { index: true, element: withSuspense(<MerchantList />) },
          { path: ROUTE_PATHS.MERCHANT_DETAIL, element: withSuspense(<MerchantDetail />) },
          { path: ROUTE_PATHS.MERCHANT_ORDERS, element: withSuspense(<MerchantOrderManage />) },
          { path: ROUTE_PATHS.MERCHANT_PRODUCTS, element: withSuspense(<MerchantProductManage />) },
          { path: ROUTE_PATHS.MERCHANT_PRODUCT_EDIT_WITH_ID, element: withSuspense(<MerchantProductEdit />) },
        ],
      },

      {
        path: ROUTE_PATHS.STORE,
        children: [
          { path: ROUTE_PATHS.STORE_DETAIL, element: withSuspense(<StoreDetail />) },
          { path: ROUTE_PATHS.STORE_MENU_DETAIL, element: withSuspense(<StoreMenuDetail />) },
        ],
      },

      { path: ROUTE_PATHS.NOTIFICATION, element: withSuspense(<Notification />) },
      { path: ROUTE_PATHS.ORDER_HISTORY, element: withSuspense(<OrderHistory />) },
      { path: ROUTE_PATHS.PAYMENT, element: withSuspense(<Payment />) },
      { path: ROUTE_PATHS.PICKUP, element: withSuspense(<PickupMap />) },
      { path: ROUTE_PATHS.CART, element: withSuspense(<Cart />) },
    ],
  },
]);
