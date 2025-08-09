import { NavLink } from 'react-router-dom';
import { ROUTE_PATHS } from '@/shared/constant/routes.ts';
import MapIcon from '@/assets/layout/MapIcon.svg?react';
import HomeIcon from '@/assets/layout/HomeIcon.svg?react';
import MyIcon from '@/assets/layout/MyIcon.svg?react';
import OrderHistoryIcon from '@/assets/layout/OrderHistoryIcon.svg?react';
import { cn } from '@/shared/lib/utils.ts';

const navItems = [
  { to: ROUTE_PATHS.ROOT, label: '홈', icon: <HomeIcon /> },
  { to: ROUTE_PATHS.ORDER_HISTORY, label: '주문 내역', icon: <MapIcon /> },
  { to: ROUTE_PATHS.PICKUP, label: '픽업 지도', icon: <OrderHistoryIcon /> },
  { to: ROUTE_PATHS.MERCHANT, label: '상공인', icon: <MyIcon /> },
];

function BottomNavigation() {
  return (
    <nav className="shadow-bottom fixed bottom-0 z-10 flex w-full max-w-[500px] items-center bg-white pb-8">
      {navItems.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            cn(
              'flex h-[56px] flex-1 flex-col items-center justify-center gap-0.5 text-xs font-medium',
              !isActive && 'text-gray-400'
            )
          }
        >
          {icon}
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNavigation;
