export type AppMode = 'ramen' | 'udon';

export interface Theme {
  mode: AppMode;
  pageBg: string;
  cardBg: string;
  cardBg2: string;
  chipBg: string;
  chipHover: string;
  deepBg: string;
  accent: string;
  accentSoft: string;
  accentGlow: string;
  accentGlowStrong: string;
  titleColor: string;
  subColor: string;
  mutedColor: string;
  labelColor: string;
  border: string;
  shadow: string;
  navBg: string;
  selectedText: string;
  selectedTextSub: string;
}

/* ── 라멘 모드 — 따뜻하고 밝은 푸드 앱 톤 ── */
export const ramenTheme: Theme = {
  mode: 'ramen',
  pageBg:           '#FFFBF5',
  cardBg:           '#FFFFFF',
  cardBg2:          '#FDF8F2',
  chipBg:           '#F2EBE0',
  chipHover:        '#EAE0D4',
  deepBg:           '#EDE5D8',
  accent:           '#E87C2A',            // 따뜻한 주황
  accentSoft:       '#F0A050',
  accentGlow:       'rgba(232,124,42,0.25)',
  accentGlowStrong: 'rgba(232,124,42,0.45)',
  titleColor:       '#2C1A0E',            // 짙은 브라운
  subColor:         '#7A4F30',
  mutedColor:       '#B08060',
  labelColor:       '#FFFFFF',            // 주황 버튼 위 흰 글씨
  border:           'rgba(180,130,90,0.22)',
  shadow:           'rgba(120,70,20,0.10)',
  navBg:            'rgba(255,251,245,0.97)',
  selectedText:     '#FFFFFF',
  selectedTextSub:  'rgba(255,255,255,0.75)',
};

/* ── 우동 모드 — 크림+세이지 그린 라이트 테마 ── */
export const udonTheme: Theme = {
  mode: 'udon',
  pageBg:           '#f3ede2',
  cardBg:           '#fffbf5',
  cardBg2:          '#fdf8f0',
  chipBg:           '#e8dfd0',
  chipHover:        '#ddd5c5',
  deepBg:           '#ede5d8',
  accent:           '#4a7c3f',
  accentSoft:       '#7aad65',
  accentGlow:       'rgba(74,124,63,0.25)',
  accentGlowStrong: 'rgba(74,124,63,0.4)',
  titleColor:       '#1a0f06',
  subColor:         '#5a3a1e',
  mutedColor:       '#8a6a50',
  labelColor:       '#f3ede2',
  border:           'rgba(90,58,30,0.12)',
  shadow:           'rgba(60,30,10,0.15)',
  navBg:            'rgba(243,237,226,0.97)',
  selectedText:     '#f3ede2',
  selectedTextSub:  'rgba(243,237,226,0.8)',
};
