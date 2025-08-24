import ArrowIcon from '@/assets/layout/ArrowIcon.svg?react';
import CartIcon from '@/assets/layout/CartIcon.svg?react';
import BellIcon from '@/assets/layout/BellIcon.svg?react';
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@/shared/constant/routes.ts';
import { headerRules } from '@/layout/Header/headerConfig.ts';

// 제목 설정 해야함
export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const matchedRule = headerRules.find(rule =>
    matchPath({ path: rule.path, end: rule.end }, pathname)
  );

  const config = matchedRule?.config;
  if (!config) return null;

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(ROUTE_PATHS.ROOT);
    }
  };

  return (
    <header className="fixed top-0 z-10 flex h-[50px] w-full max-w-md items-center justify-between bg-white px-4">
      {config.showBack && (
        <button
          type="button"
          onClick={handleBack}
          className="flex items-center justify-center p-2.5"
        >
          <ArrowIcon className="rotate-90" />
        </button>
      )}

      {config.showTitle &&
        (pathname === ROUTE_PATHS.ROOT ? (
          <Link to={ROUTE_PATHS.MARKET} className="flex">
            <h1 className="text-base font-semibold leading-6">천안중앙시장</h1>
            <ArrowIcon className="text-gray-400" />
          </Link>
        ) : (
          <h1 className="text-base font-semibold leading-6">{config.title}</h1>
        ))}

      <div className="flex">
        {config.showCart && (
          <Link to={ROUTE_PATHS.CART} className="p-2.5">
            <CartIcon />
          </Link>
        )}

        {config.showNotification && (
          <Link to={ROUTE_PATHS.NOTIFICATION} className="p-2.5">
            <BellIcon />
          </Link>
        )}

        {!config.showNotification && !config.showCart && <div className="w-[44px]" />}
      </div>
    </header>
  );
}
