import { useNavigate, useLocation } from 'react-router';
import { useApp } from '../AppContext';

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useApp();
  const path = location.pathname;

  const isHome = path === '/' || path === '/results';
  const isMap = path === '/map';
  const isNotebook = path === '/notebook';

  const navItems = [
    {
      key: 'home',
      label: '홈',
      active: isHome,
      onClick: () => navigate('/'),
      icon: (active: boolean) => (
        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
          <path
            d="M3 10.5L10 3l7 7.5M5.5 8v9a1.5 1.5 0 001.5 1.5h3V13h4v5.5h3a1.5 1.5 0 001.5-1.5V8"
            stroke={active ? theme.labelColor : theme.mutedColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      ),
    },
    {
      key: 'map',
      label: '지도',
      active: isMap,
      onClick: () => navigate('/map'),
      icon: (active: boolean) => (
        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
          <path
            d="M10 2a6 6 0 016 6c0 4.5-6 10-6 10S4 12.5 4 8a6 6 0 016-6z"
            fill={active ? theme.labelColor : theme.mutedColor}
          />
          <circle cx="10" cy="8" r="2" fill={active ? theme.pageBg : theme.pageBg} />
        </svg>
      ),
    },
    {
      key: 'notebook',
      label: '수첩',
      active: isNotebook,
      onClick: () => navigate('/notebook'),
      icon: (active: boolean) => (
        <svg className="size-[20px]" fill="none" viewBox="0 0 18 20">
          <rect
            x="2" y="2" width="14" height="16" rx="2"
            stroke={active ? theme.labelColor : theme.mutedColor}
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M5 7h8M5 10.5h8M5 14h5"
            stroke={active ? theme.labelColor : theme.mutedColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="shrink-0 backdrop-blur-[12px] h-[72px] flex items-center justify-around px-4 transition-colors duration-500"
      style={{
        backgroundColor: theme.navBg,
        borderTop: `1px solid ${theme.border}`,
        boxShadow: `0px -8px 24px 0px ${theme.shadow}`,
      }}
    >
      {navItems.map((item) => (
        <button
          key={item.key}
          onClick={item.onClick}
          className="flex flex-col items-center gap-[4px] px-5 py-2 rounded-xl transition-all duration-200"
          style={
            item.active
              ? {
                  backgroundColor: theme.accent,
                  boxShadow: `0px 0px 14px 0px ${theme.accentGlow}`,
                }
              : { opacity: 0.5 }
          }
        >
          {item.icon(item.active)}
          <span
            className="text-[10px] tracking-wide"
            style={{
              fontFamily: "'WenQuanYi Zen Hei', sans-serif",
              color: item.active ? theme.labelColor : theme.mutedColor,
            }}
          >
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}
