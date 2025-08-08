import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[500px] flex-col shadow-2xl">
      <Outlet />
    </div>
  );
}

export default Layout;
