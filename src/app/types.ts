export type BrothType = '돼지' | '닭' | '해물' | '쇼유' | '시오' | '미소';
export type TextureType = '꼬들' | '보통' | '퍼짐';
export type RichnessType = '진함' | '보통' | '맑음';
export type SpiceType = '없음' | '약간' | '보통' | '강함';
export type SignatureTag = '수제면 제조' | '직접 우린 육수' | '기간 한정 메뉴' | '혼밥식 좌석';
export type ShopType = 'ramen' | 'udon';

export interface Preference {
  broth: BrothType | null;
  texture: TextureType | null;
  richness: RichnessType | null;
  spiceLevel: SpiceType | null;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  broth: BrothType;
  texture: TextureType;
  richness: RichnessType;
  spiceLevel: SpiceType;
  description: string;
  isSignature?: boolean;
  isLimited?: boolean;
}

export interface Shop {
  id: string;
  name: string;
  description: string;
  rating: number;
  distance: string;
  imageUrl: string;
  tags: string[];
  broth: BrothType;
  texture: TextureType;
  richness: RichnessType;
  spiceLevel: SpiceType;
  waiting: boolean;
  waitingTime?: string;
  signatureTags: SignatureTag[];
  signature: string;
  location: { lat: number; lng: number };
  /** SVG 맵 내 핀 위치 (0~390, 0~480 기준) */
  mapPos: { x: number; y: number };
  mustTry: boolean;
  type: ShopType;
  menus: MenuItem[];
}

export interface NotebookEntry {
  id: string;
  shopId?: string; // 연결된 가게 ID
  date: string;
  shopName: string;
  menu: string;
  memo: string;
}

export function getMenuMatch(
  menu: MenuItem,
  pref: Preference
): { score: number; matchedLabels: string[] } {
  const matchedLabels: string[] = [];
  if (pref.broth && menu.broth === pref.broth) matchedLabels.push(pref.broth + ' 계열');
  if (pref.texture && menu.texture === pref.texture) matchedLabels.push(pref.texture + '면');
  if (pref.richness && menu.richness === pref.richness) matchedLabels.push('국물 ' + pref.richness);
  if (pref.spiceLevel && menu.spiceLevel === pref.spiceLevel) matchedLabels.push('맵기 ' + pref.spiceLevel);
  return { score: matchedLabels.length, matchedLabels };
}

export function totalSelectedCount(pref: Preference): number {
  return [pref.broth, pref.texture, pref.richness, pref.spiceLevel].filter(Boolean).length;
}

export const mockShops: Shop[] = [
  /* ── 돼지 육수 ── */
  {
    id: '1',
    name: '나루라멘',
    description: '돼지 육수 · 꼬들면 · 진함',
    rating: 4.9,
    distance: '1.2km',
    imageUrl: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=300&fit=crop',
    tags: ['돼지육수', '진국', '차슈'],
    broth: '돼지',
    texture: '꼬들',
    richness: '진함',
    spiceLevel: '약간',
    waiting: true,
    waitingTime: '약 15분',
    signatureTags: ['직접 우린 육수', '혼밥식 좌석'],
    signature: '48시간 직접 우려낸 진한 돼지 육수의 정석. 매일 새벽 4시부터 시작하는 육수 작업이 이 집의 전부입니다.',
    location: { lat: 35.5384, lng: 129.3114 },
    mapPos: { x: 168, y: 195 },
    mustTry: true,
    type: 'ramen',
    menus: [
      { id: '1-1', name: '나루 기본 돈코츠', price: 12000, broth: '돼지', texture: '꼬들', richness: '진함', spiceLevel: '없음', description: '48시간 우려낸 원조 진한 국물', isSignature: true },
      { id: '1-2', name: '나루 매운 돈코츠', price: 13000, broth: '돼지', texture: '꼬들', richness: '진함', spiceLevel: '약간', description: '기본 돈코츠에 비법 고추기름 추가' },
      { id: '1-3', name: '나루 스페셜', price: 15000, broth: '돼지', texture: '보통', richness: '진함', spiceLevel: '보통', description: '차슈 3장 + 반숙란 + 해초 토핑', isSignature: true },
      { id: '1-4', name: '시오 클리어', price: 11000, broth: '시오', texture: '보통', richness: '맑음', spiceLevel: '없음', description: '깔끔한 소금 베이스 담백 국물' },
    ],
  },
  {
    id: '4',
    name: '하카타 본점',
    description: '돼지 육수 · 꼬들면 · 진함',
    rating: 4.7,
    distance: '1.5km',
    imageUrl: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop',
    tags: ['돼지육수', '진국', '혼밥'],
    broth: '돼지',
    texture: '꼬들',
    richness: '진함',
    spiceLevel: '약간',
    waiting: true,
    waitingTime: '약 20분',
    signatureTags: ['직접 우린 육수', '혼밥식 좌석'],
    signature: '1인 독립 카운터석으로 구성된 혼밥 성지. 비법 고추 기름 소스를 뿌리면 진한 돼지 육수의 감칠맛이 폭발합니다.',
    location: { lat: 35.5374, lng: 129.3124 },
    mapPos: { x: 215, y: 248 },
    mustTry: false,
    type: 'ramen',
    menus: [
      { id: '4-1', name: '하카타 기본 라멘', price: 11000, broth: '돼지', texture: '꼬들', richness: '진함', spiceLevel: '없음', description: '순수 돼지뼈 진국, 극꼬들면', isSignature: true },
      { id: '4-2', name: '하카타 특제 라멘', price: 13000, broth: '돼지', texture: '꼬들', richness: '진함', spiceLevel: '약간', description: '비법 고추기름 + 마늘 후레이크', isSignature: true },
      { id: '4-3', name: '매운 하카타', price: 13500, broth: '돼지', texture: '꼬들', richness: '진함', spiceLevel: '보통', description: '매운맛 선택 가능 (1~3단계)' },
      { id: '4-4', name: '고마 라멘', price: 13000, broth: '돼지', texture: '보통', richness: '보통', spiceLevel: '없음', description: '참깨 크림 진국, 부드러운 면발' },
    ],
  },

  /* ── 닭 육수 ── */
  {
    id: '2',
    name: '면족 산',
    description: '닭 육수 · 꼬들면 · 보통',
    rating: 4.6,
    distance: '2.2km',
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    tags: ['닭육수', '담백', '수제면'],
    broth: '닭',
    texture: '꼬들',
    richness: '보통',
    spiceLevel: '없음',
    waiting: false,
    signatureTags: ['수제면 제조', '직접 우린 육수'],
    signature: '맑고 깔끔한 닭 육수와 주문 즉시 뽑는 수제 면발의 조화. 화학조미료 없이 오직 닭으로만 만든 깊은 육수.',
    location: { lat: 35.5404, lng: 129.3094 },
    mapPos: { x: 112, y: 138 },
    mustTry: false,
    type: 'ramen',
    menus: [
      { id: '2-1', name: '토리 파이탄 라멘', price: 13000, broth: '닭', texture: '꼬들', richness: '보통', spiceLevel: '없음', description: '닭 백탕 육수, 수제 꼬들면', isSignature: true },
      { id: '2-2', name: '수제면 쇼유', price: 12000, broth: '쇼유', texture: '꼬들', richness: '맑음', spiceLevel: '없음', description: '간장 베이스 닭육수, 수제 꼬들면' },
      { id: '2-3', name: '매콤 닭 라멘', price: 13500, broth: '닭', texture: '보통', richness: '보통', spiceLevel: '약간', description: '닭 육수에 청양 고추 오일 가미' },
      { id: '2-4', name: '마제소바', price: 12500, broth: '돼지', texture: '꼬들', richness: '진함', spiceLevel: '약간', description: '국물 없는 비빔 라멘, 진한 돼지 양념' },
    ],
  },

  /* ── 해물 육수 ── */
  {
    id: '3',
    name: '칠링탕',
    description: '해물 육수 · 보통면 · 보통',
    rating: 4.8,
    distance: '0.8km',
    imageUrl: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=400&h=300&fit=crop',
    tags: ['해물육수', '얼큰', '탄탄면'],
    broth: '해물',
    texture: '보통',
    richness: '보통',
    spiceLevel: '강함',
    waiting: true,
    waitingTime: '약 20분',
    signatureTags: ['기간 한정 메뉴', '혼밥식 좌석'],
    signature: '비법 고추 기름과 해물 육수의 만남. 매주 바뀌는 시즌 한정 메뉴가 이 집을 계속 찾게 만드는 비결.',
    location: { lat: 35.5364, lng: 129.3134 },
    mapPos: { x: 258, y: 310 },
    mustTry: true,
    type: 'ramen',
    menus: [
      { id: '3-1', name: '해물 탄탄면', price: 14000, broth: '해물', texture: '보통', richness: '보통', spiceLevel: '강함', description: '해물 육수 베이스 매운 탄탄면', isSignature: true },
      { id: '3-2', name: '담백 해물 라멘', price: 12000, broth: '해물', texture: '보통', richness: '맑음', spiceLevel: '없음', description: '깔끔한 해물 육수, 자극 없는 담백 버전' },
      { id: '3-3', name: '마라 해물 라멘', price: 14500, broth: '해물', texture: '퍼짐', richness: '진함', spiceLevel: '강함', description: '마라향 진한 해물 국물, 부드러운 면', isLimited: true },
      { id: '3-4', name: '해물 보통 라멘', price: 12500, broth: '해물', texture: '꼬들', richness: '보통', spiceLevel: '보통', description: '중간 매운맛, 해물 감칠맛 국물' },
    ],
  },

  /* ── 쇼유 ── */
  {
    id: '7',
    name: '간장옥 이노우에',
    description: '쇼유 · 꼬들면 · 보통',
    rating: 4.7,
    distance: '1.0km',
    imageUrl: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop',
    tags: ['쇼유', '간장', '깔끔'],
    broth: '쇼유',
    texture: '꼬들',
    richness: '보통',
    spiceLevel: '없음',
    waiting: false,
    signatureTags: ['직접 우린 육수', '수제면 제조'],
    signature: '20년 숙성 간장 타레와 닭·돼지 블렌드 육수의 균형. 한 모금에 일본 정통 쇼유의 향이 퍼집니다.',
    location: { lat: 35.5378, lng: 129.3108 },
    mapPos: { x: 145, y: 270 },
    mustTry: true,
    type: 'ramen',
    menus: [
      { id: '7-1', name: '정통 쇼유 라멘', price: 12000, broth: '쇼유', texture: '꼬들', richness: '보통', spiceLevel: '없음', description: '20년 숙성 간장 타레, 꼬들면', isSignature: true },
      { id: '7-2', name: '쇼유 진한 버전', price: 13000, broth: '쇼유', texture: '꼬들', richness: '진함', spiceLevel: '없음', description: '더 진하게 우린 더블 브로스' },
      { id: '7-3', name: '매운 쇼유 라멘', price: 13000, broth: '쇼유', texture: '보통', richness: '보통', spiceLevel: '약간', description: '간장 베이스에 고추 오일 추가' },
      { id: '7-4', name: '쇼유 마제소바', price: 11500, broth: '쇼유', texture: '꼬들', richness: '보통', spiceLevel: '없음', description: '쇼유 타레 비빔 스타일', isLimited: true },
    ],
  },

  /* ── 시오 ── */
  {
    id: '8',
    name: '시오야',
    description: '시오 · 보통면 · 맑음',
    rating: 4.5,
    distance: '0.6km',
    imageUrl: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400&h=300&fit=crop',
    tags: ['시오', '소금', '맑음'],
    broth: '시오',
    texture: '보통',
    richness: '맑음',
    spiceLevel: '없음',
    waiting: false,
    signatureTags: ['직접 우린 육수'],
    signature: '오키나와산 소금과 다시마로 완성한 청아한 한 그릇. 국물의 투명도가 이 집의 자부심입니다.',
    location: { lat: 35.5392, lng: 129.3128 },
    mapPos: { x: 195, y: 160 },
    mustTry: false,
    type: 'ramen',
    menus: [
      { id: '8-1', name: '기본 시오 라멘', price: 11000, broth: '시오', texture: '보통', richness: '맑음', spiceLevel: '없음', description: '오키나와산 소금, 맑은 다시 국물', isSignature: true },
      { id: '8-2', name: '시오 꼬들면', price: 11000, broth: '시오', texture: '꼬들', richness: '맑음', spiceLevel: '없음', description: '꼬들 면발 선택 시오 라멘' },
      { id: '8-3', name: '시오 진한 버전', price: 12500, broth: '시오', texture: '보통', richness: '보통', spiceLevel: '없음', description: '닭 육수를 더 넣어 농도를 높인 버전' },
      { id: '8-4', name: '매운 시오', price: 12000, broth: '시오', texture: '보통', richness: '맑음', spiceLevel: '약간', description: '청양고추 풍미의 가벼운 매운맛 추가' },
    ],
  },

  /* ── 미소 ── */
  {
    id: '9',
    name: '삿포로 미소하우스',
    description: '미소 · 보통면 · 진함',
    rating: 4.6,
    distance: '1.8km',
    imageUrl: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop',
    tags: ['미소', '된장', '진국'],
    broth: '미소',
    texture: '보통',
    richness: '진함',
    spiceLevel: '없음',
    waiting: true,
    waitingTime: '약 10분',
    signatureTags: ['직접 우린 육수', '기간 한정 메뉴'],
    signature: '홋카이도 직수입 미소 3종 블렌딩. 삿포로식 버터 콘 토핑과 함께하면 고소한 향이 극대화됩니다.',
    location: { lat: 35.5368, lng: 129.3102 },
    mapPos: { x: 88, y: 328 },
    mustTry: true,
    type: 'ramen',
    menus: [
      { id: '9-1', name: '삿포로 미소 라멘', price: 13000, broth: '미소', texture: '보통', richness: '진함', spiceLevel: '없음', description: '3종 미소 블렌드, 버터 콘 토핑', isSignature: true },
      { id: '9-2', name: '매운 미소 라멘', price: 13500, broth: '미소', texture: '보통', richness: '진함', spiceLevel: '보통', description: '미소 베이스 매운 칠리 오일 가미' },
      { id: '9-3', name: '미소 꼬들면', price: 13000, broth: '미소', texture: '꼬들', richness: '진함', spiceLevel: '없음', description: '꼬들 면발로 즐기는 진한 미소' },
      { id: '9-4', name: '시즌 미소 특선', price: 14000, broth: '미소', texture: '퍼짐', richness: '진함', spiceLevel: '약간', description: '제철 재료가 올라가는 한정 메뉴', isLimited: true },
    ],
  },

  /* ── 우동 ── */
  {
    id: '5',
    name: '우동야 타나카',
    description: '닭 육수 · 보통면 · 맑음',
    rating: 4.7,
    distance: '1.8km',
    imageUrl: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&h=300&fit=crop',
    tags: ['닭육수', '맑은국물', '수제면'],
    broth: '닭',
    texture: '보통',
    richness: '맑음',
    spiceLevel: '없음',
    waiting: false,
    signatureTags: ['수제면 제조', '직접 우린 육수'],
    signature: '일본식 다시를 베이스로 한 맑은 닭 육수에 매일 새벽 직접 뽑은 넓은 우동면. 심플하지만 완벽합니다.',
    location: { lat: 35.5394, lng: 129.3104 },
    mapPos: { x: 128, y: 175 },
    mustTry: true,
    type: 'udon',
    menus: [
      { id: '5-1', name: '가케 우동', price: 9000, broth: '닭', texture: '보통', richness: '맑음', spiceLevel: '없음', description: '맑은 닭 다시 국물, 따뜻한 기본 우동', isSignature: true },
      { id: '5-2', name: '닭 진국 우동', price: 11000, broth: '닭', texture: '꼬들', richness: '보통', spiceLevel: '없음', description: '닭 파이탄 농도의 우동, 꼬들한 면발' },
      { id: '5-3', name: '카레 우동', price: 11500, broth: '돼지', texture: '퍼짐', richness: '진함', spiceLevel: '약간', description: '진한 카레 돼지 육수, 부드러운 우동면' },
      { id: '5-4', name: '붓카케 냉우동', price: 10000, broth: '닭', texture: '꼬들', richness: '맑음', spiceLevel: '없음', description: '차가운 다시 소스를 붓는 여름 한정 메뉴', isLimited: true },
    ],
  },
  {
    id: '6',
    name: '카마타마 하우스',
    description: '해물 육수 · 퍼짐면 · 진함',
    rating: 4.5,
    distance: '0.9km',
    imageUrl: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
    tags: ['해물육수', '걸쭉', '한정메뉴'],
    broth: '해물',
    texture: '퍼짐',
    richness: '진함',
    spiceLevel: '없음',
    waiting: true,
    waitingTime: '약 10분',
    signatureTags: ['기간 한정 메뉴', '수제면 제조'],
    signature: '제철 해산물로 우려낸 진한 국물에 부드럽게 삶은 면발이 잘 스며드는 카마타마 스타일.',
    location: { lat: 35.5354, lng: 129.3144 },
    mapPos: { x: 285, y: 365 },
    mustTry: false,
    type: 'udon',
    menus: [
      { id: '6-1', name: '카마타마 우동', price: 11000, broth: '해물', texture: '퍼짐', richness: '진함', spiceLevel: '없음', description: '생계란 + 진한 해물 국물, 부드러운 면', isSignature: true },
      { id: '6-2', name: '자루 우동', price: 10000, broth: '닭', texture: '꼬들', richness: '맑음', spiceLevel: '없음', description: '쯔유에 찍어먹는 맑은 담백 스타일' },
      { id: '6-3', name: '매운 카마타마', price: 12000, broth: '해물', texture: '퍼짐', richness: '진함', spiceLevel: '보통', description: '카마타마에 매운 고추 소스 추가', isLimited: true },
      { id: '6-4', name: '해물 콘부 우동', price: 12500, broth: '해물', texture: '보통', richness: '보통', spiceLevel: '없음', description: '다시마 해물 육수, 균형 잡힌 중간 농도' },
    ],
  },
];