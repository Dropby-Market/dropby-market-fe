import { Outlet, useLocation } from 'react-router-dom';
import BottomNavigation from '@/layout/BottomNavigation.tsx';
import Header from '@/layout/Header.tsx';
import { ROUTE_PATHS } from '@/shared/constant/routes.ts';
import { cn } from '@/shared/lib/utils.ts';

const visiblePathSet = new Set<string>([
  ROUTE_PATHS.ROOT,
  `/${ROUTE_PATHS.ORDER_HISTORY}`,
  `/${ROUTE_PATHS.PICKUP}`,
  `/${ROUTE_PATHS.MERCHANT}`,
]);

function Layout() {
  const { pathname } = useLocation();
  const showBottomNav = visiblePathSet.has(pathname);

  return (
    <div className="mx-auto flex min-h-screen max-w-[500px] flex-col pb-8 shadow-2xl">
      <Header />
      <main className={cn('flex flex-1 flex-col pt-[50px]', showBottomNav && 'pb-[56px]')}>
        <Outlet />
      </main>
      {showBottomNav && <BottomNavigation />}
    </div>
  );
}

export default Layout;
