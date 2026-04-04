import { useNavigate } from 'react-router';
import { useApp } from '../AppContext';
import { mockShops, SignatureTag } from '../types';

const SIGNATURE_ICONS: Record<SignatureTag, string> = {
  '수제면 제조': '🍜',
  '직접 우린 육수': '🫕',
  '기간 한정 메뉴': '⏰',
  '혼밥식 좌석': '🪑',
};

export default function EventsPage() {
  const navigate = useNavigate();
  const { theme, mode } = useApp();
  const isRamen = mode === 'ramen';

  const {
    pageBg, cardBg, chipBg, deepBg,
    accent, accentSoft, accentGlow, accentGlowStrong,
    subColor, mutedColor, labelColor, border, shadow,
  } = theme;
  const titleColor = theme.titleColor;

  // 기간 한정 메뉴가 있는 가게 + 해당 한정 메뉴 목록
  const eventShops = mockShops
    .filter(s => s.type === mode)
    .map(shop => ({
      shop,
      limitedMenus: shop.menus.filter(m => m.isLimited),
    }))
    .filter(({ limitedMenus }) => limitedMenus.length > 0);

  return (
    <div className="w-full pb-[40px] transition-colors duration-500" style={{ backgroundColor: pageBg }}>

      {/* 헤더 */}
      <div
        className="sticky top-0 z-10 flex items-center gap-[14px] px-[20px] py-[14px] transition-colors duration-500"
        style={{ backgroundColor: pageBg }}
      >
        <button
          onClick={() => navigate(-1)}
          className="size-[36px] flex items-center justify-center rounded-full active:scale-[0.92] transition-transform"
          style={{ backgroundColor: chipBg }}
        >
          <svg className="size-[16px]" fill="none" viewBox="0 0 20 20">
            <path d="M13 4l-6 6 6 6" stroke={accentSoft} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="text-[20px] tracking-[-1px]"
          style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accent }}>
          면탐정
        </span>
        <span className="text-[13px] opacity-60"
          style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}>
          이벤트 라멘
        </span>
      </div>

      <div className="px-[20px] flex flex-col gap-[28px]">

        {/* 타이틀 섹션 */}
        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center gap-[8px]">
            <div
              className="px-[10px] py-[4px] rounded-full flex items-center gap-[6px]"
              style={{ background: `linear-gradient(90deg, ${accent}, ${accentSoft})` }}
            >
              <span className="text-[10px]" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: labelColor, letterSpacing: '0.5px' }}>
                LIMITED
              </span>
            </div>
            <span className="text-[11px] tracking-[1px] uppercase"
              style={{ fontFamily: "'Manrope', sans-serif", color: mutedColor }}>
              이번 주 한정 메뉴
            </span>
          </div>
          <div className="text-[30px] tracking-[-1.5px] leading-[1.2]"
            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: titleColor }}>
            <p className="mb-0">🔥 이벤트</p>
            <p>라멘 탐색</p>
          </div>
          <p className="text-[13px] leading-relaxed"
            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}>
            지금만 먹을 수 있는 시즌 한정 메뉴를 모았습니다
          </p>
        </div>

        {/* 이벤트 가게 카드 목록 */}
        {eventShops.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-[12px] py-[60px]">
            <span className="text-[36px]">🍜</span>
            <span className="text-[14px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}>
              현재 진행 중인 이벤트 메뉴가 없습니다
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-[20px]">
            {eventShops.map(({ shop, limitedMenus }) => (
              <button
                key={shop.id}
                onClick={() => navigate(`/shop/${shop.id}`)}
                className="rounded-[16px] overflow-hidden text-left active:scale-[0.98] transition-transform"
                style={{ backgroundColor: cardBg, boxShadow: `0 8px 28px ${shadow}` }}
              >
                {/* 가게 이미지 + 배지 */}
                <div className="h-[160px] relative overflow-hidden">
                  <img
                    src={shop.imageUrl}
                    alt={shop.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${cardBg} 0%, transparent 55%)`, opacity: 0.92 }}
                  />

                  {/* 이벤트 뱃지 */}
                  <div
                    className="absolute top-[12px] left-[12px] flex items-center gap-[5px] px-[10px] py-[4px] rounded-full"
                    style={{ background: `linear-gradient(90deg, ${accent}, ${accentSoft})`, boxShadow: `0 4px 12px ${accentGlow}` }}
                  >
                    <span className="text-[10px]" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: labelColor }}>
                      🔥 한정 메뉴 {limitedMenus.length}개
                    </span>
                  </div>

                  {/* 평점 */}
                  <div
                    className="absolute top-[12px] right-[12px] flex items-center gap-[4px] px-[10px] py-[4px] rounded-full"
                    style={{ backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
                  >
                    <svg className="size-[10px]" fill="#FFB5A0" viewBox="0 0 12 12">
                      <path d="M6 1l1.545 3.13L11 4.635 8.5 7.075l.59 3.425L6 8.885l-3.09 1.615.59-3.425L1 4.635l3.455-.505L6 1z" />
                    </svg>
                    <span className="text-[12px] text-white" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
                      {shop.rating}
                    </span>
                  </div>
                </div>

                {/* 카드 바디 */}
                <div className="p-[18px] flex flex-col gap-[14px]">
                  {/* 가게 이름 + 거리 */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[20px] tracking-[-0.5px]"
                        style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: titleColor }}>
                        {shop.name}
                      </div>
                      <div className="flex gap-[6px] flex-wrap mt-[4px]">
                        {shop.broth.map(b => (
                          <span key={b} className="text-[11px] px-[7px] py-[2px] rounded-[4px]"
                            style={{ backgroundColor: chipBg, fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}>
                            {b} 육수
                          </span>
                        ))}
                        <span className="text-[11px] px-[7px] py-[2px] rounded-[4px]"
                          style={{ backgroundColor: chipBg, fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}>
                          {shop.richness}
                        </span>
                      </div>
                    </div>
                    <span className="text-[12px] shrink-0 ml-2"
                      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, color: accentSoft }}>
                      {shop.distance}
                    </span>
                  </div>

                  {/* 한정 메뉴 목록 */}
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex items-center gap-[6px]">
                      <span className="text-[10px]">⏰</span>
                      <span className="text-[11px] uppercase tracking-[0.8px]"
                        style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: accent }}>
                        이번 주 한정 메뉴
                      </span>
                    </div>
                    {limitedMenus.map(menu => (
                      <div
                        key={menu.id}
                        className="flex items-center justify-between rounded-[10px] px-[12px] py-[10px]"
                        style={{ backgroundColor: deepBg, border: `1px solid ${accent}44` }}
                      >
                        <div className="flex flex-col gap-[2px]">
                          <span className="text-[13px]"
                            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: titleColor }}>
                            {menu.name}
                          </span>
                          <span className="text-[11px]"
                            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}>
                            {menu.description}
                          </span>
                        </div>
                        <div className="flex flex-col items-end gap-[4px] shrink-0 ml-[12px]">
                          <span className="text-[13px]"
                            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: accent }}>
                            {menu.price.toLocaleString()}원
                          </span>
                          <div
                            className="px-[6px] py-[2px] rounded-full"
                            style={{ background: `linear-gradient(90deg, ${accent}44, ${accentSoft}44)`, border: `1px solid ${accent}66` }}
                          >
                            <span className="text-[9px]"
                              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: accent }}>
                              LIMITED
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 시그니처 태그 */}
                  {shop.signatureTags.length > 0 && (
                    <div className="flex gap-[6px] flex-wrap">
                      {shop.signatureTags.map(tag => (
                        <div key={tag}
                          className="flex items-center gap-[4px] px-[8px] py-[3px] rounded-[4px]"
                          style={{ backgroundColor: deepBg, border: `1px solid ${border}` }}>
                          <span className="text-[10px]">{SIGNATURE_ICONS[tag]}</span>
                          <span className="text-[10px]"
                            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accentSoft }}>
                            {tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-[4px] justify-end">
                    <span className="text-[12px]"
                      style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accentSoft }}>
                      상세보기
                    </span>
                    <svg className="size-[14px]" fill="none" viewBox="0 0 16 16">
                      <path d="M6 12l4-4-4-4" stroke={accentSoft} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}