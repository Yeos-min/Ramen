import { useState, useMemo } from 'react';
import { useApp } from '../AppContext';
import { useNavigate } from 'react-router';
import { NotebookEntry, mockShops } from '../types';
import { CompareView } from '../components/CompareView';
import svgPaths from '../../imports/탐정수첩📓/svg-2k5p8fjeqy';
import imgRamen from '../../imports/탐정수첩📓/10e8596bf94cb0e55bdf2cc012009e43255159ba.png';

/** 가게별로 묶인 기록 그룹 */
interface ShopGroup {
  key: string;       // shopId or shopName
  shopId?: string;
  shopName: string;
  imageUrl?: string;
  entries: NotebookEntry[];
}

function InlineAddForm({
  shopName,
  shopId,
  onSave,
  onCancel,
  theme,
  isRamen,
  menus,
}: {
  shopName: string;
  shopId?: string;
  onSave: (data: Omit<NotebookEntry, 'id'>) => void;
  onCancel: () => void;
  theme: any;
  isRamen: boolean;
  menus?: { name: string }[];
}) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [menu, setMenu] = useState('');
  const [memo, setMemo] = useState('');
  const { deepBg, border, accent, accentSoft, accentGlow, subColor, mutedColor, labelColor, chipBg } = theme;

  const handleSave = () => {
    if (!menu.trim()) return;
    onSave({
      shopId,
      shopName,
      date: date.split('-').join('.'),
      menu,
      memo: memo || '방문 완료!',
    });
  };

  return (
    <div
      className="flex flex-col gap-[10px] rounded-[10px] p-[14px]"
      style={{ backgroundColor: deepBg, border: `1px solid ${accent}55` }}
    >
      <span className="text-[11px] uppercase tracking-[0.8px]" style={{ fontFamily: "'Manrope', sans-serif", color: accentSoft }}>
        재방문 기록 추가
      </span>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full bg-transparent text-[13px] outline-none rounded-[6px] px-[10px] py-[8px]"
        style={{ fontFamily: "'Manrope', sans-serif", color: isRamen ? '#ffdbce' : theme.titleColor, border: `1px solid ${border}` }}
      />
      {menus && menus.length > 0 && (
        <div className="flex gap-[4px] flex-wrap">
          {menus.slice(0, 4).map((m) => (
            <button
              key={m.name}
              onClick={() => setMenu(m.name)}
              className="text-[10px] px-[8px] py-[3px] rounded-[6px] transition-all"
              style={{
                backgroundColor: menu === m.name ? accent : chipBg,
                color: menu === m.name ? labelColor : subColor,
                fontFamily: "'WenQuanYi Zen Hei', sans-serif",
              }}
            >
              {m.name}
            </button>
          ))}
        </div>
      )}
      <input
        type="text"
        value={menu}
        onChange={(e) => setMenu(e.target.value)}
        placeholder="주문한 메뉴"
        className="w-full bg-transparent text-[13px] outline-none rounded-[6px] px-[10px] py-[8px]"
        style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: isRamen ? '#fff' : theme.titleColor, border: `1px solid ${border}` }}
      />
      <textarea
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        placeholder="한 줄 메모 (선택)"
        rows={2}
        className="w-full bg-transparent text-[13px] outline-none resize-none rounded-[6px] px-[10px] py-[8px]"
        style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: isRamen ? '#fff' : theme.titleColor, border: `1px solid ${border}` }}
      />
      <div className="flex gap-[8px]">
        <button
          onClick={handleSave}
          disabled={!menu.trim()}
          className="flex-1 rounded-[8px] py-[10px] transition-all active:scale-[0.98]"
          style={{
            backgroundColor: menu.trim() ? accent : theme.chipBg,
            boxShadow: menu.trim() ? `0 4px 12px ${accentGlow}` : 'none',
          }}
        >
          <span className="text-[13px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: 700, color: menu.trim() ? labelColor : mutedColor }}>
            저장
          </span>
        </button>
        <button
          onClick={onCancel}
          className="px-[16px] rounded-[8px] py-[10px]"
          style={{ backgroundColor: theme.chipBg }}
        >
          <span className="text-[13px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: mutedColor }}>
            취소
          </span>
        </button>
      </div>
    </div>
  );
}

function EntryCard({
  entry,
  onUpdate,
  onDelete,
  theme,
  isRamen,
  isLatest,
}: {
  entry: NotebookEntry;
  onUpdate: (id: string, updates: Partial<Omit<NotebookEntry, 'id'>>) => void;
  onDelete: (id: string) => void;
  theme: any;
  isRamen: boolean;
  isLatest: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [editMenu, setEditMenu] = useState(entry.menu);
  const [editMemo, setEditMemo] = useState(entry.memo);
  const { chipBg, deepBg, border, accent, accentSoft, subColor, mutedColor, labelColor } = theme;

  const handleSaveEdit = () => {
    onUpdate(entry.id, { menu: editMenu, memo: editMemo });
    setEditing(false);
  };

  return (
    <div
      className="rounded-[10px] p-[14px] flex flex-col gap-[8px]"
      style={{
        backgroundColor: isLatest ? accent + '0e' : chipBg,
        border: `1px solid ${isLatest ? accent + '44' : border}`,
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px]" style={{ fontFamily: "'Manrope', sans-serif", color: mutedColor }}>
          {entry.date}
          {isLatest && (
            <span className="ml-[6px] px-[5px] py-[1px] rounded-[3px] text-[9px]"
              style={{ backgroundColor: accent, color: labelColor, fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
              최신
            </span>
          )}
        </span>
        <div className="flex gap-[6px]">
          <button
            onClick={() => { setEditing(!editing); setEditMenu(entry.menu); setEditMemo(entry.memo); }}
            className="text-[11px] px-[8px] py-[3px] rounded-[5px]"
            style={{ backgroundColor: chipBg, color: accentSoft }}
          >
            수정
          </button>
          <button
            onClick={() => onDelete(entry.id)}
            className="text-[11px] px-[8px] py-[3px] rounded-[5px]"
            style={{ backgroundColor: chipBg, color: mutedColor }}
          >
            삭제
          </button>
        </div>
      </div>

      {editing ? (
        <div className="flex flex-col gap-[6px]">
          <input
            value={editMenu}
            onChange={(e) => setEditMenu(e.target.value)}
            className="w-full bg-transparent text-[13px] outline-none rounded-[6px] px-[8px] py-[6px]"
            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: isRamen ? '#fff' : theme.titleColor, border: `1px solid ${border}` }}
          />
          <textarea
            value={editMemo}
            onChange={(e) => setEditMemo(e.target.value)}
            rows={2}
            className="w-full bg-transparent text-[12px] outline-none resize-none rounded-[6px] px-[8px] py-[6px]"
            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: isRamen ? '#ccc' : subColor, border: `1px solid ${border}` }}
          />
          <div className="flex gap-[6px]">
            <button
              onClick={handleSaveEdit}
              className="flex-1 rounded-[6px] py-[8px]"
              style={{ backgroundColor: accent }}
            >
              <span className="text-[12px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: labelColor }}>저장</span>
            </button>
            <button onClick={() => setEditing(false)} className="px-[14px] rounded-[6px] py-[8px]" style={{ backgroundColor: chipBg }}>
              <span className="text-[12px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: mutedColor }}>취소</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div
            className="text-[14px]"
            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: isRamen ? '#ffdbce' : theme.titleColor, fontWeight: 600 }}
          >
            {entry.menu}
          </div>
          {entry.memo && (
            <div
              className="text-[12px] leading-relaxed"
              style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}
            >
              {entry.memo}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function NotebookPage() {
  const { notebookEntries, addNotebookEntry, updateNotebookEntry, deleteNotebookEntry, theme, mode } = useApp();
  const navigate = useNavigate();

  const [compareTarget, setCompareTarget] = useState<ShopGroup | null>(null);
  const [addingFor, setAddingFor] = useState<string | null>(null); // shopGroup key

  const isRamen = mode === 'ramen';
  const { pageBg, cardBg, chipBg, deepBg, accent, accentSoft, subColor, mutedColor, labelColor, border } = theme;
  const titleColor = isRamen ? '#ffdbce' : theme.titleColor;

  // 가게별 그룹 집계
  const shopGroups = useMemo<ShopGroup[]>(() => {
    const map = new Map<string, ShopGroup>();
    notebookEntries.forEach((entry) => {
      const key = entry.shopId ?? entry.shopName;
      if (!map.has(key)) {
        const shopData = entry.shopId ? mockShops.find((s) => s.id === entry.shopId) : undefined;
        map.set(key, {
          key,
          shopId: entry.shopId,
          shopName: entry.shopName,
          imageUrl: shopData?.imageUrl,
          entries: [],
        });
      }
      map.get(key)!.entries.push(entry);
    });
    // 각 그룹 내 최신순 정렬
    map.forEach((g) => g.entries.sort((a, b) => b.date.localeCompare(a.date)));
    // 그룹도 최신 방문 기준 정렬
    return Array.from(map.values()).sort((a, b) =>
      b.entries[0].date.localeCompare(a.entries[0].date)
    );
  }, [notebookEntries]);

  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());
  const toggleExpand = (key: string) =>
    setExpandedKeys((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  return (
    <div className="w-full pb-[32px] transition-colors duration-500" style={{ backgroundColor: pageBg }}>
      {/* Header */}
      <div
        className="sticky top-0 z-10 px-[20px] pt-[16px] pb-[12px] transition-colors duration-500"
        style={{ backgroundColor: pageBg }}
      >
        {/* 뒤로가기 */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-[8px] mb-[12px] active:opacity-70 transition-opacity"
        >
          <div className="size-[34px] flex items-center justify-center rounded-full" style={{ backgroundColor: chipBg }}>
            <svg className="size-[16px]" fill="none" viewBox="0 0 20 20">
              <path d="M13 4l-6 6 6 6" stroke={accentSoft} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-[13px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}>
            이전 화면으로
          </span>
        </button>

        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-[2px]">
            <div className="text-[28px] tracking-[-0.8px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accentSoft }}>
              탐정수첩 📓
            </div>
            <div className="text-[13px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: mutedColor }}>
              나만의 수사 일지
            </div>
          </div>
          <div
            className="px-[10px] py-[4px] rounded-full"
            style={{ backgroundColor: accent + '22', border: `1px solid ${accent}44` }}
          >
            <span className="text-[12px]" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: accent }}>
              {shopGroups.length}개 가게 · {notebookEntries.length}건
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-[20px] flex flex-col gap-[16px]">
        {shopGroups.length === 0 ? (
          /* 기록 없을 때 Empty State */
          <div className="flex flex-col items-center gap-[16px] py-[60px] text-center">
            <div className="size-[64px] flex items-center justify-center rounded-full" style={{ backgroundColor: chipBg }}>
              <svg className="size-full" fill="none" viewBox="0 0 90 80">
                <path d={svgPaths.p2b159580} fill={isRamen ? '#FFDBCE' : '#5a3a1e'} opacity="0.2" />
              </svg>
            </div>
            <div className="flex flex-col gap-[6px]">
              <div className="text-[18px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: titleColor }}>
                아직 기록이 없습니다
              </div>
              <div className="text-[13px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: mutedColor }}>
                가게 상세에서 ♡ 버튼으로 기록을 추가하세요
              </div>
            </div>
            <button
              onClick={() => navigate('/')}
              className="px-[20px] py-[12px] rounded-[10px] active:scale-[0.98] transition-transform"
              style={{ backgroundColor: accent, boxShadow: `0 8px 20px ${theme.accentGlow}` }}
            >
              <span className="text-[14px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: 700, color: labelColor }}>
                라멘 탐색하러 가기
              </span>
            </button>
          </div>
        ) : (
          shopGroups.map((group) => {
            const isExpanded = expandedKeys.has(group.key);
            const isAddingHere = addingFor === group.key;
            const shopData = group.shopId ? mockShops.find((s) => s.id === group.shopId) : undefined;
            const latestEntry = group.entries[0];
            const hasMultiple = group.entries.length >= 2;

            return (
              <div
                key={group.key}
                className="rounded-[14px] overflow-hidden"
                style={{ backgroundColor: cardBg, border: `1px solid ${border}` }}
              >
                {/* 가게 헤더 */}
                <div className="relative">
                  {group.imageUrl && (
                    <img
                      src={group.imageUrl}
                      alt={group.shopName}
                      className="w-full object-cover"
                      style={{ height: '72px', filter: 'brightness(0.4) saturate(0.6)' }}
                    />
                  )}
                  <div
                    className={`${group.imageUrl ? 'absolute inset-0' : ''} flex items-center justify-between px-[16px] py-[12px]`}
                  >
                    <div className="flex items-center gap-[10px]">
                      {/* 저장 뱃지 */}
                      <div
                        className="size-[36px] rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: accent + '30', border: `1.5px solid ${accent}` }}
                      >
                        <svg className="size-[16px]" fill={accent} viewBox="0 0 24 24">
                          <path d="M12 21C12 21 3 14.5 3 8.5a5 5 0 019-3 5 5 0 019 3C21 14.5 12 21 12 21z" />
                        </svg>
                      </div>
                      <div>
                        <div
                          className="text-[16px] tracking-[-0.3px]"
                          style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: 700, color: group.imageUrl ? '#fff' : titleColor }}
                        >
                          {group.shopName}
                        </div>
                        <div
                          className="text-[11px]"
                          style={{ fontFamily: "'Manrope', sans-serif", color: group.imageUrl ? 'rgba(255,255,255,0.6)' : mutedColor }}
                        >
                          총 {group.entries.length}번 방문 · 최근 {latestEntry.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-[6px]">
                      {group.shopId && (
                        <button
                          onClick={() => navigate(`/shop/${group.shopId}`)}
                          className="px-[8px] py-[4px] rounded-[6px] text-[10px]"
                          style={{ backgroundColor: group.imageUrl ? 'rgba(255,255,255,0.15)' : chipBg, color: group.imageUrl ? '#fff' : accentSoft }}
                        >
                          상세 →
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* 기록 카드들 */}
                <div className="p-[14px] flex flex-col gap-[8px]">
                  {/* 최신 기록 항상 표시 */}
                  <EntryCard
                    entry={latestEntry}
                    onUpdate={updateNotebookEntry}
                    onDelete={deleteNotebookEntry}
                    theme={theme}
                    isRamen={isRamen}
                    isLatest={true}
                  />

                  {/* 이전 기록 (토글) */}
                  {hasMultiple && (
                    <>
                      {isExpanded && group.entries.slice(1).map((entry) => (
                        <EntryCard
                          key={entry.id}
                          entry={entry}
                          onUpdate={updateNotebookEntry}
                          onDelete={deleteNotebookEntry}
                          theme={theme}
                          isRamen={isRamen}
                          isLatest={false}
                        />
                      ))}

                      {/* 펼치기/접기 버튼 */}
                      <button
                        onClick={() => toggleExpand(group.key)}
                        className="w-full py-[8px] rounded-[8px] flex items-center justify-center gap-[5px]"
                        style={{ backgroundColor: chipBg }}
                      >
                        <span
                          className="text-[11px]"
                          style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: mutedColor }}
                        >
                          {isExpanded ? '접기' : `이전 기록 ${group.entries.length - 1}건 보기`}
                        </span>
                        <svg
                          className="size-[12px] transition-transform"
                          style={{ transform: isExpanded ? 'rotate(180deg)' : 'none' }}
                          fill="none" viewBox="0 0 12 12"
                        >
                          <path d="M2 4l4 4 4-4" stroke={mutedColor} strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* 재방문 기록 추가 폼 */}
                  {isAddingHere ? (
                    <InlineAddForm
                      shopName={group.shopName}
                      shopId={group.shopId}
                      onSave={(data) => {
                        addNotebookEntry(data);
                        setAddingFor(null);
                      }}
                      onCancel={() => setAddingFor(null)}
                      theme={theme}
                      isRamen={isRamen}
                      menus={shopData?.menus}
                    />
                  ) : (
                    <div className="flex gap-[6px]">
                      {/* 재방문 기록 추가 */}
                      <button
                        onClick={() => setAddingFor(group.key)}
                        className="flex-1 py-[9px] rounded-[8px] flex items-center justify-center gap-[5px] active:scale-[0.97] transition-transform"
                        style={{ backgroundColor: accent + '18', border: `1px solid ${accent}44` }}
                      >
                        <svg className="size-[12px]" fill="none" viewBox="0 0 14 14">
                          <path d="M7 2v10M2 7h10" stroke={accent} strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span
                          className="text-[11px]"
                          style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accent, fontWeight: 600 }}
                        >
                          재방문 기록 추가
                        </span>
                      </button>

                      {/* 이전 기록과 비교 */}
                      {hasMultiple && (
                        <button
                          onClick={() => setCompareTarget(group)}
                          className="flex-1 py-[9px] rounded-[8px] flex items-center justify-center gap-[5px] active:scale-[0.97] transition-transform"
                          style={{ backgroundColor: chipBg, border: `1px solid ${border}` }}
                        >
                          <svg className="size-[12px]" fill="none" viewBox="0 0 14 14">
                            <path d="M2 4h4M2 7h6M2 10h4" stroke={accentSoft} strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M8 4h4M10 7h2M9 10h3" stroke={mutedColor} strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M7 2v10" stroke={border} strokeWidth="1" />
                          </svg>
                          <span
                            className="text-[11px]"
                            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accentSoft }}
                          >
                            이전 기록 비교
                          </span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}

        {/* 분위기 이미지 */}
        {shopGroups.length > 0 && (
          <div className="h-[120px] rounded-[14px] overflow-hidden relative mt-[4px]">
            <img
              alt="Atmosphere"
              className="w-full h-[180%] object-cover absolute top-[-40%] opacity-40"
              src={imgRamen}
              style={{ filter: isRamen ? 'saturate(0)' : 'saturate(0) sepia(0.3)' }}
            />
            <div
              className="absolute inset-0 flex items-end p-[16px]"
              style={{ background: `linear-gradient(to bottom, transparent, ${pageBg}CC)` }}
            >
              <span
                className="text-[10px] tracking-[2px] uppercase"
                style={{ fontFamily: "'Manrope', sans-serif", color: mutedColor }}
              >
                Authentic Investigation
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Compare View Modal */}
      {compareTarget && (
        <CompareView
          shopName={compareTarget.shopName}
          entries={compareTarget.entries}
          isOpen={!!compareTarget}
          onClose={() => setCompareTarget(null)}
          theme={theme}
          isRamen={isRamen}
        />
      )}
    </div>
  );
}
