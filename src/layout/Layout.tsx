import { Outlet } from 'react-router';

export function Layout() {
  return (
    <div>
      레이아웃(사이드바 등등)
      <Outlet />
    </div>
  );
}
