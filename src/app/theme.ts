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

export const ramenTheme: Theme = {
  mode: 'ramen',
  pageBg: '#210f07',
  cardBg: '#2a170f',
  cardBg2: '#2c1810',
  chipBg: '#3b251c',
  chipHover: '#472f26',
  deepBg: '#1b0904',
  accent: '#ff5722',
  accentSoft: '#ffb5a0',
  accentGlow: 'rgba(255,87,34,0.3)',
  accentGlowStrong: 'rgba(255,87,34,0.5)',
  titleColor: '#ffdbce',
  subColor: '#e4beb4',
  mutedColor: '#ab8980',
  labelColor: '#541200',
  border: 'rgba(91,64,57,0.2)',
  shadow: 'rgba(27,9,4,0.5)',
  navBg: 'rgba(33,15,7,0.97)',
  selectedText: '#541200',
  selectedTextSub: 'rgba(84,18,0,0.75)',
};

export const udonTheme: Theme = {
  mode: 'udon',
  pageBg: '#f3ede2',
  cardBg: '#fffbf5',
  cardBg2: '#fdf8f0',
  chipBg: '#e8dfd0',
  chipHover: '#ddd5c5',
  deepBg: '#ede5d8',
  accent: '#4a7c3f',
  accentSoft: '#7aad65',
  accentGlow: 'rgba(74,124,63,0.25)',
  accentGlowStrong: 'rgba(74,124,63,0.4)',
  titleColor: '#1a0f06',
  subColor: '#5a3a1e',
  mutedColor: '#8a6a50',
  labelColor: '#f3ede2',
  border: 'rgba(90,58,30,0.12)',
  shadow: 'rgba(60,30,10,0.15)',
  navBg: 'rgba(243,237,226,0.97)',
  selectedText: '#f3ede2',
  selectedTextSub: 'rgba(243,237,226,0.8)',
};
