import { Outlet } from 'react-router';
import { BottomNav } from './components/BottomNav';
import { useApp } from './AppContext';
import { Toaster } from 'sonner';

export default function Root() {
  const { theme } = useApp();
  return (
    <div className="min-h-screen flex justify-center items-start" style={{ backgroundColor: '#EDE5D8' }}>
      <div
        className="relative w-full max-w-[390px] flex flex-col shadow-[0_0_60px_rgba(120,70,20,0.15)] transition-colors duration-500"
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
      {/* 토스트 알림 */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.border}`,
            color: theme.titleColor,
            fontFamily: "'WenQuanYi Zen Hei', sans-serif",
            fontSize: '13px',
          },
        }}
      />
    </div>
  );
}