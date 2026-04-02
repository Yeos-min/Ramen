import { useNavigate } from 'react-router';
import { useApp } from '../AppContext';
import { SignatureTag } from '../types';
import { MatchedMenuCard } from '../components/MatchedMenuCard';

const SIGNATURE_ICONS: Record<SignatureTag, string> = {
  '수제면 제조': '🍜',
  '직접 우린 육수': '🫕',
  '기간 한정 메뉴': '⏰',
  '혼밥식 좌석': '🪑',
};

export default function ResultsPage() {
  const navigate = useNavigate();
  const { getRecommendedShops, theme, mode, preference } = useApp();
  const shops = getRecommendedShops();

  const isRamen = mode === 'ramen';
  const { pageBg, cardBg, chipBg, accent, accentSoft, titleColor, subColor, mutedColor, labelColor, border, deepBg } = theme;

  return (
    <div className="w-full pb-[32px] transition-colors duration-500" style={{ backgroundColor: pageBg }}>
      {/* Header */}
      <div
        className="sticky top-0 z-10 px-[20px] py-[14px] flex items-center gap-[14px] transition-colors duration-500"
        style={{ backgroundColor: pageBg }}
      >
        <button
          onClick={() => navigate(-1)}
          className="size-[36px] flex items-center justify-center rounded-full transition-colors"
          style={{ backgroundColor: chipBg }}
        >
          <svg className="size-[16px]" fill="none" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" stroke={accentSoft} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span
          className="text-[20px] tracking-[-1px]"
          style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accent }}
        >
          면탐정
        </span>
        <span
          className="text-[13px] opacity-60"
          style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}
        >
          탐색 결과
        </span>
      </div>

      {/* Main Content */}
      <div className="w-full px-[20px] pt-[8px] flex flex-col gap-[24px]">
        {/* Title Section */}
        <div className="flex flex-col gap-[4px]">
          <div
            className="text-[11px] tracking-[1.4px] uppercase"
            style={{ fontFamily: "'Manrope', sans-serif", color: accentSoft }}
          >
            Smart Selection · {isRamen ? 'Ramen Mode' : 'Udon Mode'}
          </div>
          <div
            className="text-[28px] tracking-[-1.4px]"
            style={{
              fontFamily: "'WenQuanYi Zen Hei', sans-serif",
              lineHeight: '1.2',
              color: isRamen ? '#ffdbce' : titleColor,
            }}
          >
            <p className="mb-0">당신을 위한</p>
            <p>탐색 결과</p>
          </div>
          <div
            className="text-[13px] leading-relaxed"
            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}
          >
            취향 분석 기반으로 엄선한 울산의 숨은 {isRamen ? '라멘' : '우동'}집입니다
          </div>
        </div>

        {/* Shop Cards */}
        <div className="flex flex-col gap-[18px]">
          {shops.map((shop, idx) => (
            <button
              key={shop.id}
              onClick={() => navigate(`/shop/${shop.id}`)}
              className="rounded-[14px] overflow-hidden active:scale-[0.98] transition-transform text-left"
              style={{
                backgroundColor: cardBg,
                boxShadow: `0px 8px 24px 0px ${theme.shadow}`,
              }}
            >
              {/* Image */}
              <div className="h-[170px] relative overflow-hidden">
                <img alt={shop.name} className="w-full h-full object-cover" src={shop.imageUrl} />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${cardBg} 0%, transparent 60%)`,
                    opacity: 0.9,
                  }}
                />
                {/* Rank badge */}
                <div
                  className="absolute top-[12px] left-[12px] size-[28px] rounded-full flex items-center justify-center"
                  style={{ backgroundColor: accent }}
                >
                  <span
                    className="text-[12px]"
                    style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: labelColor }}
                  >
                    {idx + 1}
                  </span>
                </div>
                {shop.mustTry && (
                  <div
                    className="absolute top-[12px] left-[48px] px-[8px] py-[3px] rounded-full"
                    style={{ backgroundColor: accent }}
                  >
                    <span
                      className="text-[9px] uppercase"
                      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: labelColor }}
                    >
                      Must Try
                    </span>
                  </div>
                )}
                {/* Rating */}
                <div
                  className="absolute top-[12px] right-[12px] px-[10px] py-[4px] rounded-full flex items-center gap-[4px]"
                  style={{ backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
                >
                  <svg className="size-[10px]" fill="#FFB5A0" viewBox="0 0 12 12">
                    <path d="M6 1l1.545 3.13L11 4.635 8.5 7.075l.59 3.425L6 8.885l-3.09 1.615.59-3.425L1 4.635l3.455-.505L6 1z" />
                  </svg>
                  <span
                    className="text-white text-[12px]"
                    style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
                  >
                    {shop.rating}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-[18px] flex flex-col gap-[10px]">
                <div className="flex items-start justify-between">
                  <div>
                    <div
                      className="text-[20px] tracking-[-0.5px]"
                      style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: isRamen ? '#fff' : titleColor }}
                    >
                      {shop.name}
                    </div>
                    <div
                      className="text-[12px]"
                      style={{ fontFamily: "'Manrope', sans-serif", color: subColor }}
                    >
                      {shop.description}
                    </div>
                  </div>
                  <span
                    className="text-[13px] shrink-0 ml-2"
                    style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, color: accentSoft }}
                  >
                    {shop.distance}
                  </span>
                </div>

                {/* Spec chips */}
                <div className="flex gap-[6px] flex-wrap">
                  {[
                    { label: shop.broth + ' 육수' },
                    { label: shop.texture + '면' },
                    { label: shop.richness },
                    ...(shop.spiceLevel !== '없음' ? [{ label: '매운맛 ' + shop.spiceLevel }] : []),
                    ...(shop.waiting ? [{ label: '웨이팅' }] : []),
                  ].map((tag, i) => (
                    <div
                      key={i}
                      className="px-[9px] py-[3px] rounded-[4px]"
                      style={{ backgroundColor: chipBg }}
                    >
                      <span
                        className="text-[10px]"
                        style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}
                      >
                        {tag.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Signature tags */}
                {shop.signatureTags.length > 0 && (
                  <div className="flex gap-[6px] flex-wrap">
                    {shop.signatureTags.map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-[4px] px-[8px] py-[3px] rounded-[4px]"
                        style={{ backgroundColor: deepBg, border: `1px solid ${border}` }}
                      >
                        <span className="text-[10px]">{SIGNATURE_ICONS[tag]}</span>
                        <span
                          className="text-[10px]"
                          style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accentSoft }}
                        >
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* ── 취향 매칭 메뉴 ── */}
                <div className="flex flex-col gap-[6px]">
                  <div className="flex items-center gap-[6px]">
                    <svg className="size-[12px]" fill="none" viewBox="0 0 14 14">
                      <path d="M7 1l1.4 3.6L12 5.3l-2.8 2.7.7 3.8L7 10l-2.9 1.8.7-3.8L2 5.3l3.6-.7L7 1z" fill={accent} />
                    </svg>
                    <span
                      className="text-[11px] uppercase tracking-[0.8px]"
                      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: accent }}
                    >
                      취향에 맞는 메뉴
                    </span>
                  </div>
                  <MatchedMenuCard
                    menus={shop.menus}
                    preference={preference}
                    theme={theme}
                    isRamen={isRamen}
                    mode="summary"
                  />
                </div>

                {/* Signature text */}
                <div
                  className="rounded-[8px] p-[12px]"
                  style={{ backgroundColor: deepBg, borderLeft: `3px solid ${accent}` }}
                >
                  <div
                    className="text-[12px] leading-relaxed"
                    style={{
                      fontFamily: "'WenQuanYi Zen Hei', sans-serif",
                      color: isRamen ? '#ffdbce' : titleColor,
                    }}
                  >
                    {shop.signature}
                  </div>
                </div>

                <div className="flex items-center gap-[4px] justify-end">
                  <span
                    className="text-[12px]"
                    style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accentSoft }}
                  >
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

        {/* Map Button */}
        <button
          onClick={() => navigate('/map')}
          className="rounded-[12px] py-[16px] flex gap-[10px] items-center justify-center transition-colors"
          style={{ backgroundColor: chipBg, border: `1px solid ${border}` }}
        >
          <svg className="size-[18px]" fill="none" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z" stroke={accentSoft} strokeWidth="2" strokeLinecap="round" />
            <circle cx="10" cy="8" r="2" stroke={accentSoft} strokeWidth="2" />
          </svg>
          <span
            className="text-[14px]"
            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accentSoft }}
          >
            지도에서 더 찾아보기
          </span>
        </button>
      </div>
    </div>
  );
}