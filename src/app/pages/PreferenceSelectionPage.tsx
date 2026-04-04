import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useApp } from '../AppContext';
import { BrothType, TextureType, RichnessType, SpiceType } from '../types';
import imgHero from '../../imports/취향선택홈/711a0dd0e9ed3b4ddb2e3a5db68c1756b4149c8d.png';
import imgUserProfile from '../../imports/취향선택홈/304831b272b75dd2baf688d90d323584cd5f4d47.png';
import { UdonComingSoon } from '../components/UdonComingSoon';
import { toast } from 'sonner';

/* ── 육수 옵션 ── */
type BrothGroup = {
  groupLabel: string;
  groupSub: string;
  options: { id: BrothType; label: string; desc: string; emoji: string }[];
};

const BROTH_GROUPS: BrothGroup[] = [
  {
    groupLabel: '육수 베이스',
    groupSub: 'Base Broth',
    options: [
      { id: '돼지', label: '돼지 육수', desc: '진하고 크리미한 돼지뼈 베이스', emoji: '🐷' },
      { id: '닭',   label: '닭 육수',   desc: '맑고 깊은 닭 우림 육수',       emoji: '🐓' },
      { id: '해물', label: '해물 육수', desc: '풍부한 바다 감칠맛 베이스',    emoji: '🦐' },
    ],
  },
  {
    groupLabel: '타레 (양념)',
    groupSub: 'Seasoning Tare',
    options: [
      { id: '쇼유', label: '쇼유 (간장)', desc: '20년 숙성 간장의 깊은 풍미',   emoji: '🫙' },
      { id: '시오', label: '시오 (소금)', desc: '청아하고 투명한 소금 베이스',  emoji: '🧂' },
      { id: '미소', label: '미소 (된장)', desc: '구수하고 진한 된장 베이스',    emoji: '🫘' },
    ],
  },
];

const TEXTURE_OPTIONS: { id: TextureType; label: string; subLabel: string }[] = [
  { id: '꼬들', label: '꼬들', subLabel: 'Firm'    },
  { id: '보통', label: '보통', subLabel: 'Regular' },
  { id: '퍼짐', label: '퍼짐', subLabel: 'Soft'    },
];

const RICHNESS_OPTIONS: { id: RichnessType; label: string; subLabel: string }[] = [
  { id: '진함', label: '진함', subLabel: 'Rich'   },
  { id: '보통', label: '보통', subLabel: 'Medium' },
  { id: '맑음', label: '맑음', subLabel: 'Clear'  },
];

const SPICE_OPTIONS: { id: SpiceType; label: string; spiceEmoji: string; color: string }[] = [
  { id: '없음', label: '없음', spiceEmoji: '○',       color: '#6b8cba' },
  { id: '약간', label: '약간', spiceEmoji: '🌶',      color: '#f0a050' },
  { id: '보통', label: '보통', spiceEmoji: '🌶🌶',   color: '#e06030' },
  { id: '강함', label: '강함', spiceEmoji: '🌶🌶🌶', color: '#c02010' },
];

/* ── 섹션 타이틀 (테마 색상 사용, 필수* 지원) ── */
function SectionTitle({
  ko, en, accent, titleColor, required,
}: {
  ko: string; en: string; accent: string; titleColor: string; required?: boolean;
}) {
  return (
    <div className="flex items-center gap-[8px]">
      <span style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: titleColor }}>
        {ko}
        {required && (
          <span style={{ color: '#E53935', marginLeft: '3px', fontFamily: 'sans-serif' }}>*</span>
        )}
      </span>
      <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, color: accent }}>
        {en}
      </span>
    </div>
  );
}

/* ── 체크 아이콘 ── */
function CheckIcon({ color }: { color: string }) {
  return (
    <svg className="size-[14px]" fill="none" viewBox="0 0 16 16">
      <path d="M3 8l4 4 6-7" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PreferenceSelectionPage() {
  const navigate = useNavigate();
  const { preference, setPreference, mode, toggleMode, theme } = useApp();

  /* ── 상태 ── */
  const [selectedBroths, setSelectedBroths] = useState<BrothType[]>(preference.broth);
  const [selectedTexture, setSelectedTexture] = useState<TextureType | null>(preference.texture);
  const [selectedRichness, setSelectedRichness] = useState<RichnessType | null>(preference.richness);
  const [selectedSpice, setSelectedSpice] = useState<SpiceType | null>(preference.spiceLevel);

  const toggleBroth = (b: BrothType) =>
    setSelectedBroths(prev =>
      prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]
    );

  const brothOk = selectedBroths.length > 0;

  const handleFind = () => {
    if (!brothOk) {
      toast.error('육수 종류를 1개 이상 선택해주세요', { duration: 2500 });
      return;
    }
    setPreference({ broth: selectedBroths, texture: selectedTexture, richness: selectedRichness, spiceLevel: selectedSpice });
    navigate('/results');
  };

  const isRamen = mode === 'ramen';
  const {
    pageBg, cardBg, chipBg, deepBg, accent, accentSoft,
    titleColor, subColor, mutedColor, labelColor, border, accentGlow, theme: _t, ...rest
  } = { theme: null, ...theme };

  /* ── 우동 모드: 준비중 화면 ── */
  if (!isRamen) {
    return (
      <div className="w-full transition-colors duration-500" style={{ backgroundColor: pageBg }}>
        <div
          className="sticky top-0 z-10 flex h-[64px] items-center justify-between px-[20px] transition-colors duration-500"
          style={{ backgroundColor: pageBg }}
        >
          <div className="flex gap-[10px] items-center">
            <span style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accent }}>면탐정</span>
            <span className="text-[12px] opacity-60" style={{ fontFamily: "'Manrope', sans-serif", color: subColor }}>Udon Guide</span>
          </div>
          <div className="flex items-center gap-[10px]">
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

      {/* ── Sticky Header ── */}
      <div
        className="sticky top-0 z-10 flex h-[64px] items-center justify-between px-[20px] transition-colors duration-500"
        style={{ backgroundColor: pageBg, borderBottom: `1px solid ${theme.border}` }}
      >
        <div className="flex gap-[10px] items-center">
          <span style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accent }}>
            면탐정
          </span>
          <span className="text-[12px] opacity-60" style={{ fontFamily: "'Manrope', sans-serif", color: subColor }}>
            Ramen Guide
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
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

      {/* ── Main Content ── */}
      <div className="w-full px-[20px] pt-[16px] pb-[40px] flex flex-col gap-[32px]">

        {/* Hero */}
        <div className="flex flex-col gap-[6px]">
          <div className="text-[11px] tracking-[1.4px] uppercase" style={{ fontFamily: "'Manrope', sans-serif", color: accentSoft }}>
            Finding Hidden Gems
          </div>
          <div className="tracking-[-2px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", lineHeight: '1.15', color: titleColor }}>
            <p className="mb-0">울산의 숨겨진</p>
            <p>라멘을 찾아서</p>
          </div>
          <div className="h-[160px] rounded-[16px] overflow-hidden relative mt-2"
            style={{ boxShadow: `0 8px 24px ${theme.shadow}` }}>
            <img
              alt="Ramen"
              className="w-full h-[180%] object-cover absolute top-[-40%]"
              src={imgHero}
              style={{ filter: 'saturate(0.9) brightness(1.0)' }}
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(to top, ${pageBg}cc 0%, transparent 60%)` }}
            />
            <div
              className="absolute top-[12px] right-[12px] px-[10px] py-[4px] rounded-full"
              style={{ backgroundColor: accent }}
            >
              <span className="text-[11px] uppercase tracking-[0.5px]" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: labelColor }}>
                Ramen Mode
              </span>
            </div>
          </div>
        </div>

        {/* ── 이벤트 배너 ── */}
        <button
          onClick={() => navigate('/events')}
          className="flex items-center justify-between rounded-[14px] px-[16px] py-[13px] active:scale-[0.98] transition-transform"
          style={{
            background: `linear-gradient(120deg, ${accent}18 0%, ${accentSoft}12 100%)`,
            border: `1.5px solid ${accent}50`,
            boxShadow: `0 4px 16px ${accent}18`,
          }}
        >
          <div className="flex items-center gap-[10px]">
            <div
              className="size-[36px] rounded-full flex items-center justify-center shrink-0"
              style={{ background: `linear-gradient(135deg, ${accent}, ${accentSoft})`, boxShadow: `0 4px 12px ${accent}50` }}
            >
              <span style={{ fontSize: '18px', lineHeight: 1 }}>🔥</span>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: 700, color: accent }}>
                이번 주 이벤트 라멘
              </span>
              <span className="text-[11px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}>
                지금만 먹을 수 있는 시즌 한정 메뉴 탐색
              </span>
            </div>
          </div>
          <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 16 16">
            <path d="M6 12l4-4-4-4" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* ── 육수 선택 (필수·복수선택) ── */}
        <div className="flex flex-col gap-[14px]">
          <div className="flex items-end justify-between">
            <SectionTitle ko="육수" en="Broth / Tare" accent={accentSoft} titleColor={titleColor} required />
            <span className="text-[11px] tracking-[0.5px]"
              style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: brothOk ? accent : '#E53935', fontWeight: 600 }}>
              {brothOk ? `${selectedBroths.length}개 선택됨` : '1개 이상 선택 필수'}
            </span>
          </div>

          {BROTH_GROUPS.map((group) => (
            <div key={group.groupLabel} className="flex flex-col gap-[8px]">
              {/* 그룹 라벨 */}
              <div className="flex items-center gap-[8px]">
                <div className="h-[1px] w-[12px]" style={{ backgroundColor: border }} />
                <span className="text-[10px] uppercase tracking-[1px]"
                  style={{ fontFamily: "'Manrope', sans-serif", color: mutedColor }}>
                  {group.groupLabel} · {group.groupSub}
                </span>
                <div className="flex-1 h-[1px]" style={{ backgroundColor: border }} />
              </div>

              {/* 옵션 — 체크박스 방식 */}
              <div className="flex flex-col gap-[7px]">
                {group.options.map((opt) => {
                  const isChecked = selectedBroths.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleBroth(opt.id)}
                      className="flex items-center justify-between px-[16px] py-[13px] rounded-[12px] transition-all duration-200 text-left active:scale-[0.98]"
                      style={{
                        backgroundColor: isChecked ? `${accent}18` : chipBg,
                        border: `2px solid ${isChecked ? accent : 'transparent'}`,
                        boxShadow: isChecked ? `0 4px 16px ${accent}28` : 'none',
                      }}
                    >
                      <div className="flex gap-[12px] items-center">
                        <span className="text-[24px]">{opt.emoji}</span>
                        <div>
                          <div style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: isChecked ? 700 : 400, color: isChecked ? accent : titleColor }}>
                            {opt.label}
                          </div>
                          <div className="text-[11px]" style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}>
                            {opt.desc}
                          </div>
                        </div>
                      </div>

                      {/* 체크박스 아이콘 */}
                      <div
                        className="size-[22px] rounded-[6px] border-2 shrink-0 flex items-center justify-center transition-all duration-200"
                        style={{
                          borderColor: isChecked ? accent : theme.border,
                          backgroundColor: isChecked ? accent : 'transparent',
                        }}
                      >
                        {isChecked && <CheckIcon color={labelColor} />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ── 국물 농도 ── */}
        <div className="flex flex-col gap-[14px]">
          <SectionTitle ko="국물 농도" en="Richness" accent={accentSoft} titleColor={titleColor} />
          <div className="rounded-[12px] p-[5px] flex gap-[5px]" style={{ backgroundColor: deepBg }}>
            {RICHNESS_OPTIONS.map((r) => {
              const isActive = selectedRichness === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setSelectedRichness(isActive ? null : r.id)}
                  className="flex-1 py-[12px] rounded-[8px] transition-all duration-200 active:scale-[0.96]"
                  style={{
                    backgroundColor: isActive ? accent : chipBg,
                    boxShadow: isActive ? `0 4px 12px ${theme.accentGlow}` : 'none',
                  }}
                >
                  <div className="text-[13px] text-center"
                    style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: isActive ? 700 : 400, color: isActive ? labelColor : subColor }}>
                    {r.label}
                  </div>
                  <div className="text-[10px] text-center mt-[1px]"
                    style={{ fontFamily: "'Manrope', sans-serif", color: isActive ? theme.selectedTextSub : mutedColor }}>
                    {r.subLabel}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 면 삶기 ── */}
        <div className="flex flex-col gap-[14px]">
          <SectionTitle ko="면 삶기" en="Texture" accent={accentSoft} titleColor={titleColor} />
          <div className="rounded-[12px] p-[5px] flex gap-[5px]" style={{ backgroundColor: deepBg }}>
            {TEXTURE_OPTIONS.map((t) => {
              const isActive = selectedTexture === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTexture(isActive ? null : t.id)}
                  className="flex-1 py-[12px] rounded-[8px] transition-all duration-200 active:scale-[0.96]"
                  style={{
                    backgroundColor: isActive ? accent : chipBg,
                    boxShadow: isActive ? `0 4px 12px ${theme.accentGlow}` : 'none',
                  }}
                >
                  <div className="text-[13px] text-center"
                    style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: isActive ? 700 : 400, color: isActive ? labelColor : subColor }}>
                    {t.label}
                  </div>
                  <div className="text-[10px] text-center mt-[1px]"
                    style={{ fontFamily: "'Manrope', sans-serif", color: isActive ? theme.selectedTextSub : mutedColor }}>
                    {t.subLabel}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 맵기 ── */}
        <div className="flex flex-col gap-[14px]">
          <div className="flex items-end justify-between">
            <SectionTitle ko="맵기" en="Spice" accent={accentSoft} titleColor={titleColor} />
            {selectedSpice && (
              <span className="text-[12px]"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, color: accentSoft }}>
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
                  className="flex-1 py-[13px] rounded-[10px] transition-all duration-200 flex flex-col items-center gap-[4px] active:scale-[0.96]"
                  style={{
                    backgroundColor: isActive ? s.color : chipBg,
                    boxShadow: isActive ? `0 4px 14px ${s.color}55` : 'none',
                    border: `1.5px solid ${isActive ? s.color : border}`,
                  }}
                >
                  <span className="text-[15px] leading-none">{s.spiceEmoji}</span>
                  <span className="text-[11px]"
                    style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: isActive ? 700 : 400, color: isActive ? '#ffffff' : subColor }}>
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="flex flex-col gap-[12px] pt-[4px]">
          <button
            onClick={handleFind}
            disabled={!brothOk}
            className="rounded-[14px] py-[20px] flex gap-[10px] items-center justify-center transition-all duration-200"
            style={{
              background: brothOk
                ? `linear-gradient(135deg, ${accentSoft}, ${accent})`
                : chipBg,
              boxShadow: brothOk ? `0 16px 40px ${theme.accentGlow}` : 'none',
              border: brothOk ? 'none' : `1.5px solid ${border}`,
              opacity: brothOk ? 1 : 0.55,
              cursor: brothOk ? 'pointer' : 'not-allowed',
              transform: 'scale(1)',
              active: brothOk ? 'scale(0.98)' : undefined,
            }}
          >
            <span style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: 700, color: brothOk ? labelColor : mutedColor }}>
              나의 라멘 찾기
            </span>
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <path d="M6 12l4-4-4-4" stroke={brothOk ? labelColor : mutedColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {!brothOk && (
            <p className="text-[11px] text-center"
              style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: '#E53935' }}>
              육수 종류를 1개 이상 선택해야 탐색할 수 있습니다
            </p>
          )}

          <p className="text-[12px] text-center leading-relaxed"
            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: mutedColor }}>
            선택한 취향을 분석해 울산의 숨은 맛집을 제안합니다
          </p>
        </div>
      </div>
    </div>
  );
}
