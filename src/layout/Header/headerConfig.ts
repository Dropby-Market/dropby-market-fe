import { ROUTE_PATHS } from '@/shared/constant/routes.ts';

interface HeaderConfig {
  showBack?: boolean;
  showTitle?: boolean;
  showCart?: boolean;
  showNotification?: boolean;
}

interface HeaderRule {
  path: string;
  end: boolean;
  config: HeaderConfig;
}

export const headerRules: HeaderRule[] = [
  // 가게 상세
  {
    path: `/${ROUTE_PATHS.STORE}/${ROUTE_PATHS.STORE_DETAIL}`,
    end: true,
    config: { showBack: true, showTitle: true, showCart: true },
  },
  // 가게 상세 - 메뉴 상세
  {
    path: `/${ROUTE_PATHS.STORE}/${ROUTE_PATHS.STORE_MENU_DETAIL}`,
    end: true,
    config: { showBack: true, showCart: true },
  },
  // 주문 내역
  {
    path: `/${ROUTE_PATHS.ORDER_HISTORY}`,
    end: true,
    config: { showTitle: true, showCart: true, showNotification: true },
  },
  // 픽업지도
  {
    path: `/${ROUTE_PATHS.PICKUP}`,
    end: true,
    config: { showTitle: true, showCart: true, showNotification: true },
  },
  // 메인 홈
  {
    path: ROUTE_PATHS.ROOT,
    end: true,
    config: { showTitle: true, showCart: true, showNotification: true },
  },
  // 시장 탐색
  {
    path: `/${ROUTE_PATHS.MARKET}`,
    end: true,
    config: { showBack: true, showTitle: true },
  },
  // 장바구니
  {
    path: `/${ROUTE_PATHS.CART}`,
    end: true,
    config: { showBack: true, showTitle: true },
  },
  // 주문/결제
  {
    path: `/${ROUTE_PATHS.PAYMENT}`,
    end: true,
    config: { showBack: true, showTitle: true },
  },
  // 알림
  {
    path: `/${ROUTE_PATHS.NOTIFICATION}`,
    end: true,
    config: { showBack: true, showTitle: true },
  },
];
