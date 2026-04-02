import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { mockShops, BrothType, Shop, MenuItem } from '../types';
import { useApp } from '../AppContext';
import { UlsanMapSvg } from '../components/UlsanMapSvg';
import { UdonComingSoon } from '../components/UdonComingSoon';

type FilterId = '전체' | BrothType | '진함' | '맑음' | '매운맛' | '웨이팅';

const RAMEN_FILTERS: { id: FilterId; label: string }[] = [
  { id: '전체', label: '전체' },
  { id: '돼지', label: '🐷 돼지' },
  { id: '닭', label: '🐓 닭' },
  { id: '해물', label: '🦐 해물' },
  { id: '쇼유', label: '🫙 쇼유' },
  { id: '시오', label: '🧂 시오' },
  { id: '미소', label: '🫘 미소' },
  { id: '진함', label: '진한 국물' },
  { id: '맑음', label: '맑은 국물' },
  { id: '매운맛', label: '🌶 매운맛' },
  { id: '웨이팅', label: '⏳ 웨이팅' },
];

const BROTH_COLORS: Record<string, { from: string; to: string; emoji: string }> = {
  돼지: { from: '#3d1a08', to: '#6b3015', emoji: '🐷' },
  닭:   { from: '#2d2a08', to: '#5a5018', emoji: '🐓' },
  해물: { from: '#081a2d', to: '#0e3050', emoji: '🦐' },
  쇼유: { from: '#2d0808', to: '#5a1010', emoji: '🫙' },
  시오: { from: '#08182d', to: '#153050', emoji: '🧂' },
  미소: { from: '#2a1a08', to: '#503018', emoji: '🫘' },
};

function MapMenuCard({ menu, theme, isRamen }: { menu: MenuItem; theme: any; isRamen: boolean }) {
  const colors = BROTH_COLORS[menu.broth] ?? { from: '#2a1408', to: '#4a2a18', emoji: '🍜' };
  return (
    <div
      className="shrink-0 rounded-[12px] overflow-hidden"
      style={{
        width: '120px',
        background: `linear-gradient(145deg, ${colors.from}, ${colors.to})`,
        border: `1px solid ${theme.accent}44`,
      }}
    >
      {/* 상단 이모지 영역 */}
      <div
        className="flex items-center justify-center"
        style={{ height: '52px', background: `linear-gradient(135deg, ${colors.from}, ${colors.to})` }}
      >
        <span className="text-[28px]">{colors.emoji}</span>
      </div>
      {/* 정보 */}
      <div className="px-[8px] py-[8px] flex flex-col gap-[3px]">
        <div
          className="text-[11px] line-clamp-2 leading-tight"
          style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: 600, color: isRamen ? '#ffdbce' : theme.titleColor }}
        >
          {menu.name}
        </div>
        <div className="flex gap-[3px] flex-wrap">
          <span
            className="text-[9px] px-[4px] py-[1px] rounded-[3px]"
            style={{ backgroundColor: theme.accent + '30', color: theme.accentSoft }}
          >
            {menu.broth}
          </span>
          <span
            className="text-[9px] px-[4px] py-[1px] rounded-[3px]"
            style={{ backgroundColor: theme.chipBg, color: theme.mutedColor }}
          >
            {menu.texture}면
          </span>
        </div>
        <div
          className="text-[10px] mt-[1px]"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: theme.accentSoft }}
        >
          {menu.price.toLocaleString()}원
        </div>
      </div>
    </div>
  );
}

export default function MapPage() {
  const navigate = useNavigate();
  const { theme, mode } = useApp();
  const isRamen = mode === 'ramen';

  const modeShops = useMemo(() => mockShops.filter((s) => s.type === mode), [mode]);

  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterId>('전체');

  const { pageBg, cardBg, chipBg, accent, accentSoft, accentGlow, subColor, mutedColor, labelColor, border, shadow } = theme;

  const filteredShops = useMemo(() => modeShops.filter((shop) => {
    const matchesSearch =
      !searchQuery ||
      shop.name.includes(searchQuery) ||
      shop.tags.some((t) => t.includes(searchQuery));
    if (!matchesSearch) return false;
    if (activeFilter === '전체') return true;
    if (['돼지', '닭', '해물', '쇼유', '시오', '미소'].includes(activeFilter)) return shop.broth === activeFilter;
    if (activeFilter === '진함') return shop.richness === '진함';
    if (activeFilter === '맑음') return shop.richness === '맑음';
    if (activeFilter === '매운맛') return shop.spiceLevel !== '없음';
    if (activeFilter === '웨이팅') return shop.waiting;
    return true;
  }), [modeShops, searchQuery, activeFilter]);

  const filteredIds = useMemo(() => new Set(filteredShops.map((s) => s.id)), [filteredShops]);

  const handleSelect = (shop: Shop) => {
    setSelectedShop((prev) => (prev?.id === shop.id ? null : shop));
  };

  const handleDismiss = () => setSelectedShop(null);

  if (!isRamen) {
    return (
      <div className="h-full flex flex-col overflow-hidden" style={{ backgroundColor: pageBg }}>
        <div className="shrink-0 px-[18px] py-[12px] flex items-center gap-[12px]" style={{ backgroundColor: pageBg }}>
          <button onClick={() => navigate(-1)} className="size-[36px] flex items-center justify-center rounded-full shrink-0" style={{ backgroundColor: chipBg }}>
            <svg className="size-[16px]" fill="none" viewBox="0 0 20 20">
              <path d="M13 4l-6 6 6 6" stroke={accentSoft} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="text-[20px] tracking-[-1px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accent }}>면탐정</span>
        </div>
        <div className="flex-1 overflow-y-auto">
          <UdonComingSoon />
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col overflow-hidden transition-colors duration-500" style={{ backgroundColor: pageBg }}>
      {/* Header */}
      <div className="shrink-0 px-[18px] py-[12px] flex items-center gap-[12px]" style={{ backgroundColor: pageBg }}>
        <button
          onClick={() => navigate(-1)}
          className="size-[36px] flex items-center justify-center rounded-full shrink-0"
          style={{ backgroundColor: chipBg }}
        >
          <svg className="size-[16px]" fill="none" viewBox="0 0 20 20">
            <path d="M13 4l-6 6 6 6" stroke={accentSoft} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="text-[20px] tracking-[-1px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accent }}>
          면탐정
        </span>
        <span className="text-[13px] opacity-60" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}>
          라멘 지도
        </span>
        <div className="ml-auto flex items-center gap-[4px] px-[8px] py-[3px] rounded-full" style={{ backgroundColor: chipBg, border: `1px solid ${accent}` }}>
          <svg className="size-[8px]" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" fill={accent} /></svg>
          <span className="text-[10px]" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, color: accent }}>
            울산 중구
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="shrink-0 px-[18px] pb-[8px]">
        <div className="rounded-[10px] flex items-center gap-[10px] px-[14px] py-[10px]" style={{ backgroundColor: chipBg }}>
          <svg className="size-[15px] shrink-0" fill="none" viewBox="0 0 20 20">
            <circle cx="9" cy="9" r="6" stroke={mutedColor} strokeWidth="2" />
            <path d="M14 14l4 4" stroke={mutedColor} strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="가게명, 육수 종류 검색..."
            className="flex-1 bg-transparent text-[13px] outline-none"
            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: isRamen ? '#fff' : theme.titleColor }}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="text-[13px]" style={{ color: mutedColor }}>✕</button>
          )}
        </div>
      </div>

      {/* Filter Chips */}
      <div className="shrink-0 px-[18px] pb-[8px] flex gap-[6px] overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        {RAMEN_FILTERS.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className="px-[11px] py-[6px] rounded-[14px] whitespace-nowrap transition-all duration-200"
              style={{
                backgroundColor: isActive ? accent : chipBg,
                boxShadow: isActive ? `0px 0px 8px 0px ${accentGlow}` : 'none',
              }}
            >
              <span
                className="text-[11px]"
                style={{
                  fontFamily: "'WenQuanYi Zen Hei', sans-serif",
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? labelColor : subColor,
                }}
              >
                {filter.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Map Area */}
      <div className="flex-1 min-h-0 relative overflow-hidden">
        {/* SVG Map */}
        <div className="absolute inset-0">
          <UlsanMapSvg
            shops={modeShops}
            filteredIds={filteredIds}
            selectedId={selectedShop?.id ?? null}
            onSelect={handleSelect}
            onDismiss={handleDismiss}
            theme={theme}
            isRamen={isRamen}
          />
        </div>

        {/* 필터 결과 없을 때 */}
        {filteredShops.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="px-[18px] py-[12px] rounded-[12px] flex flex-col items-center gap-[6px]"
              style={{ backgroundColor: isRamen ? 'rgba(33,15,7,0.92)' : 'rgba(243,237,226,0.92)', backdropFilter: 'blur(8px)' }}
            >
              <span className="text-[22px]">🔍</span>
              <span className="text-[13px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}>
                해당 조건의 가게가 없습니다
              </span>
            </div>
          </div>
        )}

        {/* 지도 컨트롤 */}
        <div className="absolute right-[12px] top-[12px] flex flex-col gap-[6px]">
          {[
            <path key="loc" d="M10 2a6 6 0 014.9 9.4L20 16.8l-1.4 1.4-5.2-5.1A6 6 0 1110 2zm0 2a4 4 0 100 8 4 4 0 000-8z" fill={accentSoft} />,
            <path key="plus" d="M10 5v10M5 10h10" stroke={accentSoft} strokeWidth="2" strokeLinecap="round" />,
            <path key="minus" d="M5 10h10" stroke={accentSoft} strokeWidth="2" strokeLinecap="round" />,
          ].map((icon, i) => (
            <button
              key={i}
              className="rounded-[8px] p-[8px] shadow-lg"
              style={{ backgroundColor: isRamen ? 'rgba(42,23,15,0.92)' : 'rgba(255,250,242,0.92)', backdropFilter: 'blur(6px)' }}
            >
              <svg className="size-[16px]" fill="none" viewBox="0 0 20 20">{icon}</svg>
            </button>
          ))}
        </div>

        {/* 가게 수 */}
        <div
          className="absolute left-[12px] top-[12px] px-[10px] py-[5px] rounded-[8px]"
          style={{ backgroundColor: isRamen ? 'rgba(42,23,15,0.9)' : 'rgba(255,250,242,0.9)', backdropFilter: 'blur(6px)' }}
        >
          <span className="text-[11px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}>
            {filteredShops.length}개 가게
          </span>
        </div>

        {/* ─── 하단 메뉴 카드 스트립 (선택된 가게 있을 때) ─── */}
        {selectedShop && filteredIds.has(selectedShop.id) && (
          <div
            className="absolute bottom-0 left-0 right-0 flex flex-col gap-[0px] transition-all duration-300"
            style={{
              background: isRamen
                ? 'linear-gradient(to top, rgba(33,15,7,0.98) 70%, transparent)'
                : 'linear-gradient(to top, rgba(243,237,226,0.98) 70%, transparent)',
              paddingTop: '32px',
            }}
          >
            {/* 가게명 + 상세 버튼 */}
            <div className="flex items-center justify-between px-[16px] pb-[8px]">
              <div className="flex items-center gap-[8px]">
                <span
                  className="text-[15px] tracking-[-0.5px]"
                  style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: 700, color: isRamen ? '#ffdbce' : theme.titleColor }}
                >
                  {selectedShop.name}
                </span>
                {selectedShop.waiting && (
                  <span
                    className="text-[10px] px-[6px] py-[2px] rounded-full"
                    style={{ color: accent, border: `1px solid ${accent}` }}
                  >
                    웨이팅 {selectedShop.waitingTime}
                  </span>
                )}
              </div>
              <button
                onClick={() => navigate(`/shop/${selectedShop.id}`)}
                className="flex items-center gap-[5px] px-[12px] py-[6px] rounded-[8px] active:scale-[0.96] transition-transform"
                style={{ backgroundColor: accent }}
              >
                <span
                  className="text-[11px]"
                  style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: 700, color: labelColor }}
                >
                  상세 보기
                </span>
                <svg className="size-[10px]" fill="none" viewBox="0 0 12 12">
                  <path d="M4 2l4 4-4 4" stroke={labelColor} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* 메뉴 카드 가로 스크롤 */}
            <div
              className="flex gap-[10px] px-[16px] pb-[16px] overflow-x-auto"
              style={{ scrollbarWidth: 'none' }}
            >
              <div
                className="shrink-0 rounded-[12px] px-[10px] py-[8px] flex flex-col justify-center gap-[4px]"
                style={{ width: '72px', backgroundColor: chipBg, border: `1px solid ${border}` }}
              >
                <div className="flex items-center gap-[3px]">
                  <svg className="size-[9px]" fill="#FFB5A0" viewBox="0 0 12 12">
                    <path d="M6 1l1.3 2.8L11 4.3 8.5 6.8l.6 3.2L6 8.5l-3.1 1.5.6-3.2L1 4.3l3.7-.5z" />
                  </svg>
                  <span className="text-[11px]" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: accentSoft }}>
                    {selectedShop.rating}
                  </span>
                </div>
                <span className="text-[9px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: mutedColor }}>
                  {selectedShop.distance}
                </span>
                <span className="text-[9px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: mutedColor }}>
                  메뉴 {selectedShop.menus.length}종
                </span>
              </div>

              {selectedShop.menus.map((menu) => (
                <MapMenuCard key={menu.id} menu={menu} theme={theme} isRamen={isRamen} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
