import ArrowIcon from '@/assets/layout/ArrowIcon.svg?react';
import CartIcon from '@/assets/layout/CartIcon.svg?react';
import BellIcon from '@/assets/layout/BellIcon.svg?react';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/shared/constant/routes.ts';

function Header() {
  return (
    <header className="fixed top-0 z-10 flex h-[50px] w-full max-w-[500px] items-center justify-between bg-white px-4">
      <Link to={ROUTE_PATHS.MARKET} className="flex">
        <h1 className="text-base font-semibold leading-6">천안중앙시장</h1>
        <ArrowIcon className="text-gray-400" />
      </Link>

      <div className="flex gap-5">
        <Link to={ROUTE_PATHS.CART}>
          <CartIcon />
        </Link>
        <Link to={ROUTE_PATHS.NOTIFICATION}>
          <BellIcon />
        </Link>
      </div>
    </header>
  );
}

export default Header;
