import { NotebookEntry } from '../types';
import { Theme } from '../theme';

interface Props {
  shopName: string;
  entries: NotebookEntry[];
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
  isRamen: boolean;
}

export function CompareView({ shopName, entries, isOpen, onClose, theme, isRamen }: Props) {
  const { pageBg, cardBg, chipBg, deepBg, accent, accentSoft, subColor, mutedColor, border, labelColor } = theme;
  const titleColor = isRamen ? '#ffdbce' : theme.titleColor;

  // 최신 2개 기준
  const [newEntry, oldEntry] = entries.slice(0, 2);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 transition-opacity duration-300"
        style={{
          backgroundColor: 'rgba(0,0,0,0.75)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none"
      >
        <div
          className="w-full flex flex-col transition-transform duration-350 pointer-events-auto"
          style={{
            maxWidth: '390px',
            maxHeight: '90vh',
            backgroundColor: pageBg,
            borderRadius: '20px 20px 0 0',
            transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Handle */}
          <div className="flex justify-center pt-[12px] pb-[4px]">
            <div className="w-[36px] h-[4px] rounded-full" style={{ backgroundColor: mutedColor + '60' }} />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-[20px] py-[14px]" style={{ borderBottom: `1px solid ${border}` }}>
            <div>
              <div
                className="text-[11px] tracking-[1.2px] uppercase mb-[2px]"
                style={{ fontFamily: "'Manrope', sans-serif", color: accentSoft }}
              >
                Visit Comparison
              </div>
              <div
                className="text-[20px] tracking-[-0.5px]"
                style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: titleColor }}
              >
                {shopName}
              </div>
            </div>
            <button
              onClick={onClose}
              className="size-[36px] flex items-center justify-center rounded-full"
              style={{ backgroundColor: chipBg }}
            >
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <path d="M4 4l8 8M12 4l-8 8" stroke={mutedColor} strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Compare Content */}
          <div className="flex-1 overflow-y-auto px-[16px] py-[16px] flex flex-col gap-[12px]">
            {/* Column headers */}
            <div className="grid grid-cols-2 gap-[10px]">
              <div
                className="px-[12px] py-[6px] rounded-[8px] text-center"
                style={{ backgroundColor: accent + '22', border: `1px solid ${accent}55` }}
              >
                <span
                  className="text-[11px]"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: accent }}
                >
                  최근 방문
                </span>
              </div>
              <div
                className="px-[12px] py-[6px] rounded-[8px] text-center"
                style={{ backgroundColor: chipBg, border: `1px solid ${border}` }}
              >
                <span
                  className="text-[11px]"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: mutedColor }}
                >
                  이전 방문
                </span>
              </div>
            </div>

            {/* Date Row */}
            <CompareRow
              label="방문 날짜"
              left={newEntry?.date ?? '-'}
              right={oldEntry?.date ?? '-'}
              theme={theme}
              isRamen={isRamen}
              isDate
            />

            {/* Menu Row */}
            <CompareRow
              label="주문 메뉴"
              left={newEntry?.menu ?? '-'}
              right={oldEntry?.menu ?? '-'}
              theme={theme}
              isRamen={isRamen}
              highlight
            />

            {/* Memo Row */}
            <CompareRow
              label="메모"
              left={newEntry?.memo ?? '-'}
              right={oldEntry?.memo ?? '-'}
              theme={theme}
              isRamen={isRamen}
              multiLine
            />

            {/* 추가 기록이 있으면 */}
            {entries.length > 2 && (
              <div
                className="rounded-[10px] px-[14px] py-[10px] text-center"
                style={{ backgroundColor: chipBg }}
              >
                <span
                  className="text-[12px]"
                  style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: mutedColor }}
                >
                  + {entries.length - 2}개의 방문 기록이 더 있습니다
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function CompareRow({
  label, left, right, theme, isRamen, highlight, multiLine, isDate,
}: {
  label: string;
  left: string;
  right: string;
  theme: Theme;
  isRamen: boolean;
  highlight?: boolean;
  multiLine?: boolean;
  isDate?: boolean;
}) {
  const { chipBg, deepBg, accent, accentSoft, subColor, mutedColor, border } = theme;
  const titleColor = isRamen ? '#ffdbce' : theme.titleColor;

  return (
    <div className="flex flex-col gap-[6px]">
      <span
        className="text-[10px] tracking-[1px] uppercase px-[2px]"
        style={{ fontFamily: "'Manrope', sans-serif", color: mutedColor }}
      >
        {label}
      </span>
      <div className="grid grid-cols-2 gap-[10px]">
        {/* Left (new) */}
        <div
          className="rounded-[10px] px-[12px] py-[10px]"
          style={{
            backgroundColor: highlight ? accent + '18' : deepBg,
            border: `1px solid ${highlight ? accent + '55' : border}`,
          }}
        >
          <span
            className={`text-[13px] ${multiLine ? '' : 'line-clamp-2'}`}
            style={{
              fontFamily: isDate ? "'Manrope', sans-serif" : "'WenQuanYi Zen Hei', sans-serif",
              color: highlight ? (isRamen ? '#fff' : theme.titleColor) : titleColor,
              fontWeight: highlight ? 600 : 400,
              display: 'block',
            }}
          >
            {left}
          </span>
        </div>
        {/* Right (old) */}
        <div
          className="rounded-[10px] px-[12px] py-[10px]"
          style={{ backgroundColor: chipBg, border: `1px solid ${border}` }}
        >
          <span
            className={`text-[13px] ${multiLine ? '' : 'line-clamp-2'}`}
            style={{
              fontFamily: isDate ? "'Manrope', sans-serif" : "'WenQuanYi Zen Hei', sans-serif",
              color: subColor,
              display: 'block',
            }}
          >
            {right}
          </span>
        </div>
      </div>
    </div>
  );
}
