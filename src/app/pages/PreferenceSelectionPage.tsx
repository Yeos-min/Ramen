import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useApp } from '../AppContext';
import { BrothType, TextureType, RichnessType, SpiceType } from '../types';
import imgHero from '../../imports/취향선택홈/711a0dd0e9ed3b4ddb2e3a5db68c1756b4149c8d.png';
import imgUserProfile from '../../imports/취향선택홈/304831b272b75dd2baf688d90d323584cd5f4d47.png';
import { UdonComingSoon } from '../components/UdonComingSoon';

/* ── 육수 옵션 ── */
type BrothGroup = { groupLabel: string; groupSub: string; options: { id: BrothType; label: string; desc: string; emoji: string }[] };

const BROTH_GROUPS: BrothGroup[] = [
  {
    groupLabel: '육수 베이스',
    groupSub: 'Base Broth',
    options: [
      { id: '돼지', label: '돼지 육수', desc: '진하고 크리미한 돼지뼈 베이스', emoji: '🐷' },
      { id: '닭', label: '닭 육수', desc: '맑고 깊은 닭 우림 육수', emoji: '🐓' },
      { id: '해물', label: '해물 육수', desc: '풍부한 바다 감칠맛 베이스', emoji: '🦐' },
    ],
  },
  {
    groupLabel: '타레 (양념)',
    groupSub: 'Seasoning Tare',
    options: [
      { id: '쇼유', label: '쇼유 (간장)', desc: '20년 숙성 간장의 깊은 풍미', emoji: '🫙' },
      { id: '시오', label: '시오 (소금)', desc: '청아하고 투명한 소금 베이스', emoji: '🧂' },
      { id: '미소', label: '미소 (된장)', desc: '구수하고 진한 된장 베이스', emoji: '🫘' },
    ],
  },
];

const TEXTURE_OPTIONS: { id: TextureType; label: string; subLabel: string }[] = [
  { id: '꼬들', label: '꼬들', subLabel: 'Firm' },
  { id: '보통', label: '보통', subLabel: 'Regular' },
  { id: '퍼짐', label: '퍼짐', subLabel: 'Soft' },
];

const RICHNESS_OPTIONS: { id: RichnessType; label: string; subLabel: string }[] = [
  { id: '진함', label: '진함', subLabel: 'Rich' },
  { id: '보통', label: '보통', subLabel: 'Medium' },
  { id: '맑음', label: '맑음', subLabel: 'Clear' },
];

const SPICE_OPTIONS: { id: SpiceType; label: string; spiceEmoji: string; color: string }[] = [
  { id: '없음', label: '없음', spiceEmoji: '○', color: '#6b8cba' },
  { id: '약간', label: '약간', spiceEmoji: '🌶', color: '#f0a050' },
  { id: '보통', label: '보통', spiceEmoji: '🌶🌶', color: '#e06030' },
  { id: '강함', label: '강함', spiceEmoji: '🌶🌶🌶', color: '#c02010' },
];

function SectionTitle({ ko, en, accent }: { ko: string; en: string; accent: string }) {
  return (
    <div className="flex items-center gap-[8px]">
      <span className="text-[22px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: '#ffdbce' }}>
        {ko}
      </span>
      <span className="text-[13px]" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, color: accent }}>
        {en}
      </span>
    </div>
  );
}

export default function PreferenceSelectionPage() {
  const navigate = useNavigate();
  const { preference, setPreference, mode, toggleMode, theme } = useApp();

  const [selectedBroth, setSelectedBroth] = useState<BrothType | null>(preference.broth);
  const [selectedTexture, setSelectedTexture] = useState<TextureType | null>(preference.texture);
  const [selectedRichness, setSelectedRichness] = useState<RichnessType | null>(preference.richness);
  const [selectedSpice, setSelectedSpice] = useState<SpiceType | null>(preference.spiceLevel);

  const handleFind = () => {
    if (!selectedBroth) { alert('육수 종류를 선택해주세요!'); return; }
    setPreference({ broth: selectedBroth, texture: selectedTexture, richness: selectedRichness, spiceLevel: selectedSpice });
    navigate('/results');
  };

  const isRamen = mode === 'ramen';
  const { pageBg, chipBg, accent, accentSoft, subColor, mutedColor, labelColor, deepBg } = theme;

  /* ── 우동 모드: 준비중 화면 ── */
  if (!isRamen) {
    return (
      <div className="w-full transition-colors duration-500" style={{ backgroundColor: pageBg }}>
        {/* Header */}
        <div className="sticky top-0 z-10 flex h-[64px] items-center justify-between px-[20px] transition-colors duration-500" style={{ backgroundColor: pageBg }}>
          <div className="flex gap-[10px] items-center">
            <span className="text-[22px] tracking-[-1px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accent }}>면탐정</span>
            <span className="text-[12px] opacity-60" style={{ fontFamily: "'Manrope', sans-serif", color: subColor }}>Udon Guide</span>
          </div>
          <div className="flex items-center gap-[10px]">
            {/* Mode Toggle */}
            <button
              onClick={toggleMode}
              className="flex items-center rounded-full p-[3px] transition-all duration-300"
              style={{ backgroundColor: chipBg, border: `1.5px solid ${accent}`, boxShadow: `0 0 8px ${theme.accentGlow}` }}
            >
              <div className="px-[10px] py-[4px] rounded-full" style={{ color: mutedColor, fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontSize: '11px', fontWeight: 700 }}>라멘</div>
              <div className="px-[10px] py-[4px] rounded-full" style={{ backgroundColor: accent, color: labelColor, fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontSize: '11px', fontWeight: 700 }}>우동</div>
            </button>
            <div className="rounded-[12px] size-[38px] overflow-hidden" style={{ border: `2px solid ${chipBg}` }}>
              <img alt="User" className="size-full object-cover" src={imgUserProfile} />
            </div>
          </div>
        </div>
        <UdonComingSoon />
      </div>
    );
  }

  /* ── 라멘 모드 ── */
  return (
    <div className="w-full transition-colors duration-500" style={{ backgroundColor: pageBg }}>
      {/* Sticky Header */}
      <div
        className="sticky top-0 z-10 flex h-[64px] items-center justify-between px-[20px] transition-colors duration-500"
        style={{ backgroundColor: pageBg }}
      >
        <div className="flex gap-[10px] items-center">
          <span className="text-[22px] tracking-[-1px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accent }}>
            면탐정
          </span>
          <span className="text-[12px] opacity-60" style={{ fontFamily: "'Manrope', sans-serif", color: subColor }}>
            Ramen Guide
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
          {/* Mode Toggle */}
          <button
            onClick={toggleMode}
            className="flex items-center rounded-full p-[3px] transition-all duration-300"
            style={{ backgroundColor: chipBg, border: `1.5px solid ${accent}`, boxShadow: `0 0 8px ${theme.accentGlow}` }}
          >
            <div
              className="px-[10px] py-[4px] rounded-full transition-all duration-300"
              style={{ backgroundColor: accent, color: labelColor, fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontSize: '11px', fontWeight: 700 }}
            >
              라멘
            </div>
            <div
              className="px-[10px] py-[4px] rounded-full transition-all duration-300"
              style={{ color: mutedColor, fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontSize: '11px', fontWeight: 700 }}
            >
              우동
            </div>
          </button>
          <div className="rounded-[12px] size-[38px] overflow-hidden" style={{ border: `2px solid ${chipBg}` }}>
            <img alt="User" className="size-full object-cover" src={imgUserProfile} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-[20px] pt-[12px] pb-[40px] flex flex-col gap-[36px]">
        {/* Hero */}
        <div className="flex flex-col gap-[6px]">
          <div className="text-[11px] tracking-[1.4px] uppercase" style={{ fontFamily: "'Manrope', sans-serif", color: accentSoft }}>
            Finding Hidden Gems
          </div>
          <div className="text-[36px] tracking-[-2px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", lineHeight: '1.15', color: '#ffdbce' }}>
            <p className="mb-0">울산의 숨겨진</p>
            <p>라멘을 찾아서</p>
          </div>
          <div className="h-[160px] rounded-[14px] overflow-hidden relative mt-2">
            <img
              alt="Ramen"
              className="w-full h-[180%] object-cover absolute top-[-40%]"
              src={imgHero}
              style={{ filter: 'saturate(0.6) brightness(0.8)' }}
            />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${pageBg} 0%, transparent 60%)`, opacity: 0.85 }} />
            <div className="absolute top-[12px] right-[12px] px-[10px] py-[4px] rounded-full" style={{ backgroundColor: accent }}>
              <span className="text-[11px] uppercase tracking-[0.5px]" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: labelColor }}>
                Ramen Mode
              </span>
            </div>
          </div>
        </div>

        {/* ── 육수 선택 ── */}
        <div className="flex flex-col gap-[14px]">
          <div className="flex items-end justify-between">
            <SectionTitle ko="육수" en="Broth / Tare" accent={accentSoft} />
            <span className="text-[11px] tracking-[1px] uppercase" style={{ fontFamily: "'Manrope', sans-serif", color: mutedColor }}>
              Select One
            </span>
          </div>

          {BROTH_GROUPS.map((group) => (
            <div key={group.groupLabel} className="flex flex-col gap-[8px]">
              {/* 그룹 라벨 */}
              <div className="flex items-center gap-[8px]">
                <div className="h-[1px] w-[12px]" style={{ backgroundColor: theme.border }} />
                <span className="text-[10px] uppercase tracking-[1px]" style={{ fontFamily: "'Manrope', sans-serif", color: mutedColor }}>
                  {group.groupLabel} · {group.groupSub}
                </span>
                <div className="flex-1 h-[1px]" style={{ backgroundColor: theme.border }} />
              </div>
              {/* 옵션 */}
              <div className="flex flex-col gap-[8px]">
                {group.options.map((opt) => {
                  const isSelected = selectedBroth === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedBroth(isSelected ? null : opt.id)}
                      className="flex items-center justify-between px-[16px] py-[14px] rounded-[12px] transition-all duration-200 text-left"
                      style={{
                        backgroundColor: isSelected ? accent : chipBg,
                        boxShadow: isSelected ? `0px 0px 18px 0px ${theme.accentGlow}` : 'none',
                      }}
                    >
                      <div className="flex gap-[12px] items-center">
                        <span className="text-[24px]">{opt.emoji}</span>
                        <div>
                          <div className="text-[15px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: 600, color: isSelected ? labelColor : '#ffdbce' }}>
                            {opt.label}
                          </div>
                          <div className="text-[11px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: isSelected ? theme.selectedTextSub : subColor }}>
                            {opt.desc}
                          </div>
                        </div>
                      </div>
                      <div
                        className="size-[18px] rounded-full border-2 shrink-0 flex items-center justify-center transition-all"
                        style={{ borderColor: isSelected ? labelColor : mutedColor, backgroundColor: isSelected ? labelColor : 'transparent' }}
                      >
                        {isSelected && <div className="size-[7px] rounded-full" style={{ backgroundColor: accent }} />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ── 면 삶기 ── */}
        <div className="flex flex-col gap-[14px]">
          <SectionTitle ko="면 삶기" en="Texture" accent={accentSoft} />
          <div className="rounded-[12px] p-[5px] flex gap-[5px]" style={{ backgroundColor: deepBg }}>
            {TEXTURE_OPTIONS.map((t) => {
              const isActive = selectedTexture === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTexture(isActive ? null : t.id)}
                  className="flex-1 py-[12px] rounded-[8px] transition-all duration-200"
                  style={{ backgroundColor: isActive ? accent : chipBg, boxShadow: isActive ? `0px 0px 10px 0px ${theme.accentGlow}` : 'none' }}
                >
                  <div className="text-[13px] text-center" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: isActive ? 700 : 400, color: isActive ? labelColor : subColor }}>
                    {t.label}
                  </div>
                  <div className="text-[10px] text-center mt-[1px]" style={{ fontFamily: "'Manrope', sans-serif", color: isActive ? theme.selectedTextSub : mutedColor }}>
                    {t.subLabel}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 국물 농도 ── */}
        <div className="flex flex-col gap-[14px]">
          <SectionTitle ko="국물 농도" en="Richness" accent={accentSoft} />
          <div className="rounded-[12px] p-[5px] flex gap-[5px]" style={{ backgroundColor: deepBg }}>
            {RICHNESS_OPTIONS.map((r) => {
              const isActive = selectedRichness === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setSelectedRichness(isActive ? null : r.id)}
                  className="flex-1 py-[12px] rounded-[8px] transition-all duration-200"
                  style={{ backgroundColor: isActive ? accent : chipBg, boxShadow: isActive ? `0px 0px 10px 0px ${theme.accentGlow}` : 'none' }}
                >
                  <div className="text-[13px] text-center" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: isActive ? 700 : 400, color: isActive ? labelColor : subColor }}>
                    {r.label}
                  </div>
                  <div className="text-[10px] text-center mt-[1px]" style={{ fontFamily: "'Manrope', sans-serif", color: isActive ? theme.selectedTextSub : mutedColor }}>
                    {r.subLabel}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 맵기 ── */}
        <div className="flex flex-col gap-[14px]">
          <div className="flex items-end justify-between">
            <SectionTitle ko="맵기" en="Spice" accent={accentSoft} />
            {selectedSpice && (
              <span className="text-[12px]" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, color: accentSoft }}>
                {selectedSpice} 선택됨
              </span>
            )}
          </div>
          <div className="flex gap-[8px]">
            {SPICE_OPTIONS.map((s) => {
              const isActive = selectedSpice === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedSpice(isActive ? null : s.id)}
                  className="flex-1 py-[13px] rounded-[10px] transition-all duration-200 flex flex-col items-center gap-[4px]"
                  style={{
                    backgroundColor: isActive ? s.color : chipBg,
                    boxShadow: isActive ? `0px 0px 12px 0px ${s.color}66` : 'none',
                    border: isActive ? 'none' : `1.5px solid ${theme.border}`,
                  }}
                >
                  <span className="text-[15px] leading-none">{s.spiceEmoji}</span>
                  <span className="text-[11px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: isActive ? 700 : 400, color: isActive ? '#ffffff' : subColor }}>
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="flex flex-col gap-[14px] pt-[4px]">
          <button
            onClick={handleFind}
            className="rounded-[12px] py-[20px] flex gap-[10px] items-center justify-center active:scale-[0.98] transition-transform"
            style={{ background: `linear-gradient(135deg, ${accentSoft}, ${accent})`, boxShadow: `0px 16px 40px 0px ${theme.accentGlow}` }}
          >
            <span className="text-[18px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: labelColor, fontWeight: 700 }}>
              나의 라멘 찾기
            </span>
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <path d="M6 12l4-4-4-4" stroke={labelColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <p className="text-[12px] text-center leading-relaxed" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: mutedColor }}>
            선택한 취향을 분석해 울산의 숨은 맛집을 제안합니다
          </p>
        </div>
      </div>
    </div>
  );
}
