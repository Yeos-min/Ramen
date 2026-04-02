import { useApp } from '../AppContext';

export function UdonComingSoon() {
  const { theme, toggleMode } = useApp();
  const { pageBg, accent, accentSoft, subColor, mutedColor, chipBg, border } = theme;

  return (
    <div
      className="flex flex-col items-center justify-center min-h-[70vh] px-[32px] text-center gap-[28px]"
      style={{ backgroundColor: pageBg }}
    >
      {/* 우동 일러스트 */}
      <div className="relative">
        <div
          className="size-[110px] rounded-full flex items-center justify-center"
          style={{ backgroundColor: chipBg, border: `2px solid ${border}` }}
        >
          <span className="text-[54px]">🍜</span>
        </div>
        <div
          className="absolute -top-[6px] -right-[6px] size-[28px] rounded-full flex items-center justify-center"
          style={{ backgroundColor: accent }}
        >
          <span className="text-[14px]">🔧</span>
        </div>
      </div>

      {/* 텍스트 */}
      <div className="flex flex-col gap-[10px]">
        <div
          className="text-[11px] tracking-[1.8px] uppercase"
          style={{ fontFamily: "'Manrope', sans-serif", color: accentSoft }}
        >
          Coming Soon
        </div>
        <div
          className="text-[28px] tracking-[-1px]"
          style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", lineHeight: 1.2, color: theme.titleColor }}
        >
          <p className="mb-0">우동 탐정 모드</p>
          <p>준비 중입니다</p>
        </div>
        <div
          className="text-[14px] leading-relaxed"
          style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}
        >
          울산 우동 맛집 데이터를 수집하고 있어요.{'\n'}조금만 기다려 주세요!
        </div>
      </div>

      {/* 준비 현황 바 */}
      <div className="w-full flex flex-col gap-[8px]">
        <div className="flex justify-between items-center">
          <span
            className="text-[11px]"
            style={{ fontFamily: "'Manrope', sans-serif", color: mutedColor }}
          >
            데이터 수집 현황
          </span>
          <span
            className="text-[11px]"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: accent }}
          >
            42%
          </span>
        </div>
        <div
          className="w-full h-[6px] rounded-full overflow-hidden"
          style={{ backgroundColor: chipBg }}
        >
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{ width: '42%', backgroundColor: accent }}
          />
        </div>
        <div className="flex flex-col gap-[6px] mt-[4px]">
          {[
            { label: '우동 가게 조사', done: true },
            { label: '메뉴 데이터 입력', done: true },
            { label: '리뷰 키워드 분석', done: false },
            { label: '최종 검수', done: false },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-[8px]">
              <div
                className="size-[14px] rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: item.done ? accent : chipBg, border: `1px solid ${item.done ? accent : border}` }}
              >
                {item.done && (
                  <svg className="size-[8px]" fill="none" viewBox="0 0 10 10">
                    <path d="M2 5l2.5 2.5L8 3" stroke={theme.labelColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span
                className="text-[12px]"
                style={{
                  fontFamily: "'WenQuanYi Zen Hei', sans-serif",
                  color: item.done ? theme.titleColor : mutedColor,
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 라멘 모드로 돌아가기 버튼 */}
      <button
        onClick={toggleMode}
        className="w-full rounded-[12px] py-[16px] flex gap-[8px] items-center justify-center active:scale-[0.98] transition-transform"
        style={{
          background: `linear-gradient(135deg, ${accentSoft}, ${accent})`,
          boxShadow: `0px 12px 28px 0px ${theme.accentGlow}`,
        }}
      >
        <span className="text-[16px]">🍖</span>
        <span
          className="text-[15px]"
          style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: 700, color: theme.labelColor }}
        >
          라멘 탐정 모드로 돌아가기
        </span>
      </button>
    </div>
  );
}
