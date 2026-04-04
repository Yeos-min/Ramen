import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { mockShops, SignatureTag, getMenuMatch, totalSelectedCount } from '../types';
import { useApp } from '../AppContext';
import { MatchedMenuCard } from '../components/MatchedMenuCard';
import { BookmarkBottomSheet } from '../components/BookmarkBottomSheet';
import svgPaths from '../../imports/가게상세정보상세형/svg-g3qprezm69';

const SIGNATURE_ICONS: Record<SignatureTag, string> = {
  '수제면 제조': '🍜',
  '직접 우린 육수': '🫕',
  '기간 한정 메뉴': '⏰',
  '혼밥식 좌석': '🪑',
};

const SIGNATURE_DESC: Record<SignatureTag, string> = {
  '수제면 제조': '매일 직접 뽑는 면',
  '직접 우린 육수': '화학조미료 無',
  '기간 한정 메뉴': '시즌 스페셜',
  '혼밥식 좌석': '1인 카운터석',
};

export default function ShopDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { theme, mode, preference, isShopSaved, addNotebookEntry, getEntriesByShop } = useApp();
  const shop = mockShops.find((s) => s.id === id);

  const [sheetOpen, setSheetOpen] = useState(false);

  const isRamen = mode === 'ramen';
  const { pageBg, cardBg, cardBg2, chipBg, accent, accentSoft, accentGlow, subColor, mutedColor, labelColor, border, deepBg, shadow } = theme;

  const savedStatus = shop ? isShopSaved(shop.id) : false;
  const savedEntries = shop ? getEntriesByShop(shop.id) : [];
  const lastEntry = savedEntries[0];

  const selectedCount = totalSelectedCount(preference);
  const perfectMenus = selectedCount > 0
    ? shop?.menus.filter((m) => getMenuMatch(m, preference).score === selectedCount) ?? []
    : [];

  const handleDirections = () => {
    if (!shop) return;
    const { lat, lng } = shop.location;
    const kakaoUrl = `https://map.kakao.com/link/to/${encodeURIComponent(shop.name)},${lat},${lng}`;
    window.open(kakaoUrl, '_blank', 'noopener,noreferrer');
  };

  const handleBookmarkSave = (data: { date: string; menu: string; memo: string }) => {
    if (!shop) return;
    addNotebookEntry({
      shopId: shop.id,
      shopName: shop.name,
      date: data.date,
      menu: data.menu,
      memo: data.memo,
    });
    setSheetOpen(false);
  };

  if (!shop) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: pageBg }}>
        <div style={{ color: subColor }}>가게를 찾을 수 없습니다.</div>
      </div>
    );
  }

  const metaItems = [
    { label: '육수 종류', value: shop.broth + ' 계열' },
    { label: '면 삶기', value: shop.texture + '면' },
    { label: '국물 농도', value: shop.richness },
    { label: '매운맛', value: shop.spiceLevel },
    { label: '웨이팅', value: shop.waiting ? `있음 ${shop.waitingTime ? `(${shop.waitingTime})` : ''}` : '없음' },
  ];

  return (
    <div className="w-full transition-colors duration-500" style={{ backgroundColor: pageBg }}>
      {/* Header Image */}
      <div className="w-full h-[220px] relative overflow-hidden">
        <img
          alt={shop.name}
          className="w-full h-[190%] object-cover absolute top-[-45%]"
          src={shop.imageUrl}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 40%, ${pageBg} 100%)`,
            opacity: 0.85,
          }}
        />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-[16px] left-[16px] rounded-[12px] p-[10px] z-10 active:scale-95 transition-transform"
          style={{ backgroundColor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)' }}
        >
          <div className="size-[16px]">
            <svg className="size-full" fill="none" viewBox="0 0 16 16">
              <path d={svgPaths.p300a1100} fill="#541200" />
            </svg>
          </div>
        </button>

        {/* 하트(찜) 버튼 */}
        <button
          onClick={() => setSheetOpen(true)}
          className="absolute top-[16px] right-[60px] rounded-[12px] p-[10px] z-10 active:scale-95 transition-transform"
          style={{ backgroundColor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)' }}
        >
          <svg className="size-[18px]" fill="none" viewBox="0 0 24 24">
            {savedStatus ? (
              <path
                d="M12 21C12 21 3 14.5 3 8.5a5 5 0 019-3 5 5 0 019 3C21 14.5 12 21 12 21z"
                fill={accent}
                stroke={accent}
                strokeWidth="1.5"
              />
            ) : (
              <path
                d="M12 21C12 21 3 14.5 3 8.5a5 5 0 019-3 5 5 0 019 3C21 14.5 12 21 12 21z"
                stroke="#541200"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>

        {/* Rating Badge */}
        <div
          className="absolute top-[16px] right-[16px] px-[12px] py-[6px] rounded-full flex items-center gap-[4px] z-10"
          style={{ backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}
        >
          <svg className="size-[12px]" fill="#FFB5A0" viewBox="0 0 12 12">
            <path d="M6 1l1.545 3.13L11 4.635 8.5 7.075l.59 3.425L6 8.885l-3.09 1.615.59-3.425L1 4.635l3.455-.505L6 1z" />
          </svg>
          <span className="text-white text-[14px]" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
            {shop.rating}
          </span>
        </div>

        {/* Type badge */}
        <div
          className="absolute bottom-[16px] left-[16px] px-[10px] py-[4px] rounded-full z-10"
          style={{ backgroundColor: accent }}
        >
          <span
            className="text-[10px] uppercase tracking-[0.5px]"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: labelColor }}
          >
            {shop.type === 'ramen' ? 'Ramen' : 'Udon'}
          </span>
        </div>

        {/* 찜 완료 배지 (저장된 경우) */}
        {savedStatus && (
          <div
            className="absolute bottom-[16px] right-[16px] px-[10px] py-[4px] rounded-full z-10 flex items-center gap-[4px]"
            style={{ backgroundColor: accent + 'cc', backdropFilter: 'blur(6px)' }}
          >
            <svg className="size-[10px]" fill={labelColor} viewBox="0 0 20 20">
              <path d="M10 18S2 12.5 2 7a5 5 0 018-4 5 5 0 018 4c0 5.5-8 11-8 11z" />
            </svg>
            <span
              className="text-[10px]"
              style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: 700, color: labelColor }}
            >
              수첩에 저장됨 ({savedEntries.length}회)
            </span>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div
        className="px-[20px] pt-[24px] flex flex-col gap-[24px] pb-[40px] transition-colors duration-500"
        style={{ backgroundColor: cardBg2 }}
      >
        {/* Store Header */}
        <div className="flex flex-col gap-[8px]">
          <div className="flex gap-[10px] items-center flex-wrap">
            <span
              className="text-[28px] tracking-[-0.7px]"
              style={{
                fontFamily: "'WenQuanYi Zen Hei', sans-serif",
                color: theme.titleColor,
              }}
            >
              {shop.name}
            </span>
            {shop.waiting && (
              <div
                className="rounded-full px-[9px] py-[3px]"
                style={{ border: `1px solid ${accent}` }}
              >
                <span
                  className="text-[10px] tracking-[0.5px]"
                  style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accent }}
                >
                  웨이팅 있음
                </span>
              </div>
            )}
          </div>
          <div
            className="text-[14px] leading-relaxed"
            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}
          >
            {shop.description}
          </div>
        </div>

        {/* Signature Tags */}
        {shop.signatureTags.length > 0 && (
          <div className="flex flex-col gap-[10px]">
            <span
              className="text-[11px] tracking-[1.2px] uppercase"
              style={{ fontFamily: "'Manrope', sans-serif", color: mutedColor }}
            >
              Signature
            </span>
            <div className="flex gap-[8px] flex-wrap">
              {shop.signatureTags.map((tag) => (
                <div
                  key={tag}
                  className="flex flex-col items-center gap-[4px] px-[14px] py-[10px] rounded-[10px]"
                  style={{ backgroundColor: chipBg, border: `1px solid ${border}` }}
                >
                  <span className="text-[20px]">{SIGNATURE_ICONS[tag]}</span>
                  <span
                    className="text-[11px]"
                    style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: 600, color: accentSoft }}
                  >
                    {tag}
                  </span>
                  <span
                    className="text-[9px]"
                    style={{ fontFamily: "'Manrope', sans-serif", color: mutedColor }}
                  >
                    {SIGNATURE_DESC[tag]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Signature Box */}
        <div
          className="rounded-[12px] p-[20px] flex flex-col gap-[8px]"
          style={{
            backgroundColor: deepBg,
            border: `1px solid ${accent}`,
            boxShadow: `0px 8px 24px 0px ${accentGlow}`,
          }}
        >
          <div
            className="text-[12px]"
            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accent }}
          >
            ✦ 이 가게만의 특이점
          </div>
          <div
            className="text-[15px] leading-relaxed"
            style={{
              fontFamily: "'WenQuanYi Zen Hei', sans-serif",
              color: theme.titleColor,
            }}
          >
            {shop.signature}
          </div>
        </div>

        {/* Technical Metadata */}
        <div className="flex flex-col gap-[0px]">
          <span
            className="text-[11px] tracking-[1.2px] uppercase mb-[12px]"
            style={{ fontFamily: "'Manrope', sans-serif", color: mutedColor }}
          >
            Detail Info
          </span>
          {metaItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between py-[13px]"
              style={{ borderBottom: `1px solid ${border}` }}
            >
              <span
                className="text-[13px]"
                style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}
              >
                {item.label}
              </span>
              <span
                className="text-[14px]"
                style={{
                  fontFamily: "'WenQuanYi Zen Hei', sans-serif",
                  fontWeight: 600,
                  color: theme.titleColor,
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* 메뉴 섹션 */}
        <div className="flex flex-col gap-[14px]">
          <div className="flex items-center justify-between">
            <span
              className="text-[11px] tracking-[1.2px] uppercase"
              style={{ fontFamily: "'Manrope', sans-serif", color: mutedColor }}
            >
              Menu
            </span>
            {selectedCount > 0 && (
              <span
                className="text-[11px]"
                style={{ fontFamily: "'Manrope', sans-serif", color: accentSoft }}
              >
                ✦ = 취향 일치
              </span>
            )}
          </div>

          {perfectMenus.length > 0 && (
            <div
              className="rounded-[10px] px-[14px] py-[10px] flex items-center gap-[8px]"
              style={{ backgroundColor: accent + '1a', border: `1.5px solid ${accent}` }}
            >
              <span className="text-[18px]">🎯</span>
              <div>
                <div
                  className="text-[12px]"
                  style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: 700, color: accent }}
                >
                  선택한 취향과 딱 맞는 메뉴가 있어요!
                </div>
                <div
                  className="text-[11px] mt-[1px]"
                  style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}
                >
                  {perfectMenus.map((m) => m.name).join(', ')}
                </div>
              </div>
            </div>
          )}

          <MatchedMenuCard
            menus={shop.menus}
            preference={preference}
            theme={theme}
            isRamen={isRamen}
            mode="full"
          />
        </div>

        {/* Keyword Reviews */}
        <div className="flex flex-col gap-[12px]">
          <span
            className="text-[11px] tracking-[1.4px] uppercase"
            style={{ fontFamily: "'Manrope', sans-serif", color: mutedColor }}
          >
            Keyword Review
          </span>
          <div className="flex gap-[8px] flex-wrap">
            {shop.tags.map((tag) => (
              <div
                key={tag}
                className="rounded-[6px] px-[12px] py-[6px]"
                style={{
                  backgroundColor: '#e8f4e4',
                  border: `1px solid #b0d4a0`,
                }}
              >
                <span
                  className="text-[12px]"
                  style={{
                    fontFamily: "'WenQuanYi Zen Hei', sans-serif",
                    color: '#3a6a30',
                  }}
                >
                  [{tag}]
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-[10px] pt-[4px]">
          {/* 탐정수첩 기록하기 */}
          <button
            onClick={() => setSheetOpen(true)}
            className="rounded-[12px] px-[24px] py-[15px] flex gap-[8px] items-center justify-center active:scale-[0.98] transition-all"
            style={{
              backgroundColor: savedStatus ? accent + '20' : chipBg,
              border: `1px solid ${savedStatus ? accent : border}`,
            }}
          >
            <svg className="size-[16px]" fill="none" viewBox="0 0 24 24">
              {savedStatus ? (
                <path
                  d="M12 21C12 21 3 14.5 3 8.5a5 5 0 019-3 5 5 0 019 3C21 14.5 12 21 12 21z"
                  fill={accent}
                />
              ) : (
                <path
                  d="M12 21C12 21 3 14.5 3 8.5a5 5 0 019-3 5 5 0 019 3C21 14.5 12 21 12 21z"
                  stroke={accentSoft}
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              )}
            </svg>
            <span
              className="text-[14px]"
              style={{
                fontFamily: "'WenQuanYi Zen Hei', sans-serif",
                color: savedStatus ? accent : accentSoft,
                fontWeight: savedStatus ? 700 : 400,
              }}
            >
              {savedStatus
                ? `탐정수첩에 저장됨 · 재방문 기록 추가`
                : '탐정수첩에 기록하기'}
            </span>
          </button>

          <button
            onClick={handleDirections}
            className="w-full rounded-[12px] px-[24px] py-[15px] flex gap-[8px] items-center justify-center active:scale-[0.98] transition-transform"
            style={{
              background: `linear-gradient(135deg, ${accentSoft}, ${accent})`,
              boxShadow: `0px 12px 32px 0px ${theme.accentGlowStrong}`,
            }}
          >
            <div className="size-[18px]">
              <svg className="size-full" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p3be96a00} fill={labelColor} />
              </svg>
            </div>
            <span
              className="text-[15px]"
              style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: labelColor, fontWeight: 700 }}
            >
              길찾기
            </span>
          </button>
        </div>
      </div>

      {/* Bookmark Bottom Sheet */}
      <BookmarkBottomSheet
        shop={shop}
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
        onSave={handleBookmarkSave}
        theme={theme}
        isRamen={isRamen}
        lastEntry={lastEntry}
      />
    </div>
  );
}