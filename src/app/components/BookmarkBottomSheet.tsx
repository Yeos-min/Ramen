import { useState, useEffect } from 'react';
import { Shop } from '../types';
import { Theme } from '../theme';

interface Props {
  shop: Shop;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { date: string; menu: string; memo: string }) => void;
  theme: Theme;
  isRamen: boolean;
  lastEntry?: { menu: string };
}

export function BookmarkBottomSheet({ shop, isOpen, onClose, onSave, theme, isRamen, lastEntry }: Props) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [menu, setMenu] = useState('');
  const [memo, setMemo] = useState('');
  const [saving, setSaving] = useState(false);

  const { chipBg, deepBg, accent, accentSoft, accentGlow, subColor, mutedColor, labelColor, border, cardBg } = theme;

  // 시트가 열릴 때 날짜 초기화
  useEffect(() => {
    if (isOpen) {
      setDate(new Date().toISOString().split('T')[0]);
      setMenu('');
      setMemo('');
    }
  }, [isOpen]);

  const handleSave = () => {
    if (!menu.trim()) return;
    setSaving(true);
    const formattedDate = date.split('-').join('.');
    setTimeout(() => {
      onSave({ date: formattedDate, menu, memo: memo || '방문 완료!' });
      setSaving(false);
    }, 400);
  };

  // 메뉴 빠른 선택
  const menuSuggestions = shop.menus.slice(0, 4);

  const BROTH_EMOJI: Record<string, string> = {
    돼지: '🐷', 닭: '🐓', 해물: '🦐', 쇼유: '🫙', 시오: '🧂', 미소: '🫘',
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          backgroundColor: 'rgba(0,0,0,0.6)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div
        className="fixed bottom-0 left-1/2 z-50 flex flex-col transition-transform duration-350"
        style={{
          width: '100%',
          maxWidth: '390px',
          transform: `translateX(-50%) translateY(${isOpen ? '0%' : '100%'})`,
          backgroundColor: cardBg,
          borderRadius: '20px 20px 0 0',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.4)',
        }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-[12px] pb-[4px]">
          <div className="w-[36px] h-[4px] rounded-full" style={{ backgroundColor: mutedColor + '60' }} />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-[20px] py-[12px]">
          <div className="flex flex-col gap-[2px]">
            <span
              className="text-[18px] tracking-[-0.5px]"
              style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: 700, color: theme.titleColor }}
            >
              📓 탐정수첩 기록
            </span>
            <span
              className="text-[12px]"
              style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accentSoft }}
            >
              {shop.name}
            </span>
          </div>
          <button
            onClick={onClose}
            className="size-[32px] flex items-center justify-center rounded-full"
            style={{ backgroundColor: chipBg }}
          >
            <svg className="size-[14px]" fill="none" viewBox="0 0 16 16">
              <path d="M4 4l8 8M12 4l-8 8" stroke={mutedColor} strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-[14px] px-[20px] pb-[32px] overflow-y-auto" style={{ maxHeight: '70vh' }}>
          {/* Date */}
          <div className="flex flex-col gap-[5px]">
            <span className="text-[10px] tracking-[1px] uppercase" style={{ fontFamily: "'Manrope', sans-serif", color: mutedColor }}>
              방문 날짜
            </span>
            <div className="rounded-[10px] px-[14px] py-[12px]" style={{ backgroundColor: deepBg, border: `1px solid ${border}` }}>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent text-[14px] outline-none"
                style={{ fontFamily: "'Manrope', sans-serif", color: theme.titleColor }}
              />
            </div>
          </div>

          {/* Menu - 빠른 선택 */}
          <div className="flex flex-col gap-[5px]">
            <span className="text-[10px] tracking-[1px] uppercase" style={{ fontFamily: "'Manrope', sans-serif", color: mutedColor }}>
              주문한 메뉴
            </span>
            <div className="flex gap-[6px] flex-wrap mb-[4px]">
              {menuSuggestions.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMenu(m.name)}
                  className="px-[10px] py-[5px] rounded-[8px] text-left transition-all"
                  style={{
                    backgroundColor: menu === m.name ? accent : chipBg,
                    border: `1px solid ${menu === m.name ? accent : border}`,
                  }}
                >
                  <span
                    className="text-[11px]"
                    style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: menu === m.name ? labelColor : subColor }}
                  >
                    {BROTH_EMOJI[m.broth] ?? '🍜'} {m.name}
                  </span>
                </button>
              ))}
            </div>
            <div className="rounded-[10px] px-[14px] py-[12px]" style={{ backgroundColor: deepBg, border: `1px solid ${menu.trim() ? accent + '88' : border}` }}>
              <input
                type="text"
                value={menu}
                onChange={(e) => setMenu(e.target.value)}
                placeholder="직접 입력하거나 위에서 선택"
                className="w-full bg-transparent text-[14px] outline-none"
                style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: isRamen ? '#fff' : theme.titleColor }}
              />
            </div>
          </div>

          {/* Memo */}
          <div className="flex flex-col gap-[5px]">
            <span className="text-[10px] tracking-[1px] uppercase" style={{ fontFamily: "'Manrope', sans-serif", color: mutedColor }}>
              한 줄 메모 <span style={{ color: mutedColor + '80' }}>(선택)</span>
            </span>
            <div className="rounded-[10px] px-[14px] py-[12px]" style={{ backgroundColor: deepBg, border: `1px solid ${border}` }}>
              <textarea
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                placeholder="오늘의 솔직한 한 마디..."
                rows={2}
                className="w-full bg-transparent text-[14px] outline-none resize-none"
                style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: theme.titleColor }}
              />
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={!menu.trim() || saving}
            className="w-full rounded-[12px] py-[16px] flex items-center justify-center gap-[8px] transition-all active:scale-[0.98]"
            style={{
              background: menu.trim()
                ? `linear-gradient(135deg, ${accentSoft}, ${accent})`
                : chipBg,
              boxShadow: menu.trim() ? `0 8px 24px ${accentGlow}` : 'none',
              opacity: saving ? 0.7 : 1,
            }}
          >
            {saving ? (
              <span className="text-[15px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: menu.trim() ? labelColor : mutedColor }}>
                저장 중...
              </span>
            ) : (
              <>
                <svg className="size-[16px]" fill="none" viewBox="0 0 20 20">
                  <path d="M10 3.5c-3.5-3-8 0.5-7 5C4 14 10 17.5 10 17.5S16 14 17 8.5c1-4.5-3.5-8-7-5z"
                    fill={menu.trim() ? labelColor : mutedColor} />
                </svg>
                <span
                  className="text-[15px]"
                  style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: 700, color: menu.trim() ? labelColor : mutedColor }}
                >
                  수사 기록 저장
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}