import { Outlet } from 'react-router';
import { BottomNav } from './components/BottomNav';
import { useApp } from './AppContext';

export default function Root() {
  const { theme } = useApp();
  return (
    <div className="min-h-screen flex justify-center items-start" style={{ backgroundColor: '#0a0300' }}>
      <div
        className="relative w-full max-w-[390px] flex flex-col shadow-[0_0_80px_rgba(0,0,0,0.4)] transition-colors duration-500"
        style={{ height: '100dvh', backgroundColor: theme.pageBg }}
      >
        {/* Scrollable content area */}
        <div
          className="flex-1 min-h-0 overflow-y-auto"
          // @ts-ignore
          style={{ scrollbarWidth: 'none' }}
        >
          <Outlet />
        </div>
        {/* Shared bottom navigation */}
        <BottomNav />
      </div>
    </div>
  );
}
