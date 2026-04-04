/**
 * MapPage — 카카오 지도 + 장소 검색 API
 * 카카오 JavaScript 키: 8d3328b4142c5552c1daa5eec04243f9
 *
 * 로딩 전략:
 *  - autoload=true 스크립트 주입 → 100ms 폴링으로 window.kakao.maps 감지 → 즉시 초기화
 *  - 검색 결과 sessionStorage 캐싱 → 재방문 시 즉시 표시
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useApp } from '../AppContext';
import { UdonComingSoon } from '../components/UdonComingSoon';

const KAKAO_APP_KEY = '8d3328b4142c5552c1daa5eec04243f9';
const CACHE_PREFIX  = 'ramen-map-v1-';
const POLL_MS       = 100;

declare global {
  interface Window { kakao: any; }
}

const CHAIN_BLACKLIST = ['이치란', '잇푸도', '키스케'];

type FilterId = '전체' | '돼지뼈' | '닭육수' | '해물' | '쇼유' | '시오' | '미소' | '진한국물' | '매운맛';

const FILTERS: { id: FilterId; label: string; keyword: string }[] = [
  { id: '전체',     label: '전체',       keyword: '울산 라멘' },
  { id: '돼지뼈',   label: '🐷 돼지뼈', keyword: '울산 돼지뼈 라멘' },
  { id: '닭육수',   label: '🐓 닭육수', keyword: '울산 닭 라멘' },
  { id: '해물',     label: '🦐 해물',   keyword: '울산 해물 라멘' },
  { id: '쇼유',     label: '🫙 쇼유',   keyword: '울산 쇼유 라멘' },
  { id: '시오',     label: '🧂 시오',   keyword: '울산 시오 라멘' },
  { id: '미소',     label: '🫘 미소',   keyword: '울산 미소 라멘' },
  { id: '진한국물', label: '진한 국물', keyword: '울산 진한 국물 라멘' },
  { id: '매운맛',   label: '🌶 매운맛', keyword: '울산 매운 라멘' },
];

interface KakaoPlace {
  id: string;
  place_name: string;
  road_address_name: string;
  address_name: string;
  phone: string;
  x: string;
  y: string;
  place_url: string;
}

// ── sessionStorage 캐시 헬퍼 ──────────────────────────────────────────────
function readCache(filterId: FilterId): KakaoPlace[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_PREFIX + filterId);
    return raw ? (JSON.parse(raw) as KakaoPlace[]) : null;
  } catch { return null; }
}
function writeCache(filterId: FilterId, data: KakaoPlace[]) {
  try { sessionStorage.setItem(CACHE_PREFIX + filterId, JSON.stringify(data)); } catch {}
}

// ── 메인 컴포넌트 ─────────────────────────────────────────────────────────
export default function MapPage() {
  const navigate = useNavigate();
  const { theme, mode } = useApp();
  const isRamen = mode === 'ramen';
  const {
    pageBg, chipBg, accent, accentSoft, accentGlow, accentGlowStrong,
    subColor, mutedColor, labelColor, border,
  } = theme;

  // kakao 이벤트 콜백(비동기 클로저) 안에서 최신값을 읽기 위한 ref
  const isRamenRef = useRef(isRamen);
  const accentRef  = useRef(accent);
  useEffect(() => { isRamenRef.current = isRamen; }, [isRamen]);
  useEffect(() => { accentRef.current  = accent;  }, [accent]);

  const mapRef     = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const overlayRef = useRef<any>(null);

  const [mapReady,      setMapReady]      = useState(false);
  const [searching,     setSearching]     = useState(false);
  const [places,        setPlaces]        = useState<KakaoPlace[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<KakaoPlace | null>(null);
  const [activeFilter,  setActiveFilter]  = useState<FilterId>('전체');

  // ── 말풍선 닫기 ──────────────────────────────────────────────────────────
  const closeOverlay = useCallback(() => {
    if (overlayRef.current) {
      overlayRef.current.setMap(null);
      overlayRef.current = null;
    }
  }, []);

  // ── ① 카카오 SDK 주입 + 100ms 폴링으로 감지 → 지도 초기화 ─────────────
  useEffect(() => {
    // 지도 초기화 (window.kakao.maps 준비 완료 후 호출)
    const initMap = () => {
      const container = document.getElementById('kakao-map');
      if (!container || mapRef.current) return;

      mapRef.current = new window.kakao.maps.Map(container, {
        center: new window.kakao.maps.LatLng(35.5384, 129.3114),
        level: 5,
      });

      // 지도 빈 영역 클릭 → 말풍선 + 하단 카드 닫기
      window.kakao.maps.event.addListener(mapRef.current, 'click', () => {
        closeOverlay();
        setSelectedPlace(null);
      });

      setMapReady(true);
    };

    // 이미 로드된 경우 즉시 초기화
    if (window.kakao?.maps) {
      initMap();
      return;
    }

    // 스크립트 태그 주입 (autoload=true → 스크립트 로드 완료 시 자동 초기화)
    if (!document.querySelector('script[src*="dapi.kakao.com"]')) {
      const script = document.createElement('script');
      script.type  = 'text/javascript';
      // autoload=true (기본값): 스크립트 로드되면 window.kakao.maps 자동으로 준비됨
      script.src   = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&libraries=services`;
      document.head.appendChild(script);
    }

    // 100ms 간격으로 window.kakao.maps 준비 여부 체크
    const poll = setInterval(() => {
      if (window.kakao?.maps) {
        clearInterval(poll);
        initMap();
      }
    }, POLL_MS);

    return () => {
      clearInterval(poll);
      markersRef.current.forEach(m => m.setMap(null));
      markersRef.current = [];
      closeOverlay();
    };
  }, [closeOverlay]);

  // ── ② 장소 검색 ─────────────────────────────────────────────────────────
  const doSearch = useCallback((filterId: FilterId) => {
    if (!mapRef.current || !window.kakao?.maps?.services) return;
    const filter = FILTERS.find(f => f.id === filterId);
    if (!filter) return;

    // 캐시 히트 → 즉시 마커 렌더
    const cached = readCache(filterId);
    if (cached) {
      renderMarkers(cached);
      setPlaces(cached);
      setSearching(false);
      return;
    }

    setSearching(true);
    setSelectedPlace(null);
    closeOverlay();
    markersRef.current.forEach(m => m.setMap(null));
    markersRef.current = [];

    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(
      filter.keyword,
      (data: KakaoPlace[], status: string) => {
        setSearching(false);
        if (status !== window.kakao.maps.services.Status.OK) {
          setPlaces([]);
          return;
        }
        const result = data.filter(p => !CHAIN_BLACKLIST.some(c => p.place_name.includes(c)));
        writeCache(filterId, result);
        setPlaces(result);
        renderMarkers(result);
      },
      {
        location: new window.kakao.maps.LatLng(35.5384, 129.3114),
        radius: 15000,
        sort: window.kakao.maps.services.SortBy.ACCURACY,
        size: 15,
      }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closeOverlay]);

  // 마커 일괄 생성 (doSearch에서 캐시/신규 공통 사용)
  const renderMarkers = useCallback((result: KakaoPlace[]) => {
    markersRef.current.forEach(m => m.setMap(null));
    markersRef.current = [];

    const ac = accentRef.current;
    const pinSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="42" viewBox="0 0 30 42">
      <path d="M15 0C6.7 0 0 6.7 0 15c0 10 15 27 15 27S30 25 30 15C30 6.7 23.3 0 15 0z" fill="${ac}"/>
      <circle cx="15" cy="15" r="6.5" fill="rgba(255,255,255,0.92)"/>
      <circle cx="15" cy="15" r="3.2" fill="${ac}"/>
    </svg>`;
    const pinUrl = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(pinSvg)));
    const markerImage = new window.kakao.maps.MarkerImage(
      pinUrl,
      new window.kakao.maps.Size(30, 42),
      { offset: new window.kakao.maps.Point(15, 42) }
    );

    const bounds = new window.kakao.maps.LatLngBounds();
    const newMarkers: any[] = [];

    result.forEach(place => {
      const pos = new window.kakao.maps.LatLng(Number(place.y), Number(place.x));
      bounds.extend(pos);

      const marker = new window.kakao.maps.Marker({
        map: mapRef.current,
        position: pos,
        image: markerImage,
        title: place.place_name,
      });

      window.kakao.maps.event.addListener(marker, 'click', () => {
        closeOverlay();

        const ramen  = isRamenRef.current;
        const col    = accentRef.current;
        const bgCol  = '#FFFBF5';
        const namCol = '#2C1A0E';
        const subCol = '#7A4F30';
        const addr   = place.road_address_name || place.address_name;

        const el = document.createElement('div');
        el.style.cssText = 'position:relative;pointer-events:none;filter:drop-shadow(0 4px 14px rgba(0,0,0,0.5));';
        el.innerHTML = `
          <div style="background:${bgCol};border:2px solid ${col};border-radius:10px;
                      padding:9px 14px;min-width:160px;max-width:220px;box-sizing:border-box;">
            <div style="color:${namCol};font-size:12px;font-weight:700;font-family:sans-serif;
                        margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
              ${place.place_name}
            </div>
            <div style="color:${subCol};font-size:10px;font-family:sans-serif;line-height:1.5;word-break:keep-all;">
              ${addr}
            </div>
          </div>
          <div style="position:absolute;bottom:-9px;left:50%;transform:translateX(-50%);width:0;height:0;
                      border-left:8px solid transparent;border-right:8px solid transparent;border-top:10px solid ${col};"></div>
          <div style="position:absolute;bottom:-6px;left:50%;transform:translateX(-50%);width:0;height:0;
                      border-left:6px solid transparent;border-right:6px solid transparent;border-top:7px solid ${bgCol};"></div>
        `;

        const overlay = new window.kakao.maps.CustomOverlay({
          content: el, position: pos, yAnchor: 1.18, zIndex: 15,
        });
        overlay.setMap(mapRef.current);
        overlayRef.current = overlay;

        setSelectedPlace(place);
        mapRef.current.panTo(pos);
      });

      newMarkers.push(marker);
    });

    markersRef.current = newMarkers;
    if (result.length > 0) mapRef.current.setBounds(bounds);
  }, [closeOverlay]);

  // ── ③ mapReady / activeFilter 변경 시 검색 트리거 ─────────────────────
  useEffect(() => {
    if (!mapReady) return;
    doSearch(activeFilter);
  }, [mapReady, activeFilter, doSearch]);

  // 길찾기
  const handleDirections = (place: KakaoPlace) => {
    window.open(
      `https://map.kakao.com/link/to/${encodeURIComponent(place.place_name)},${place.y},${place.x}`,
      '_blank', 'noopener,noreferrer'
    );
  };

  // ── 우동 모드 ────────────────────────────────────────────────────────────
  if (!isRamen) {
    return (
      <div className="h-full flex flex-col overflow-hidden" style={{ backgroundColor: pageBg }}>
        <div className="shrink-0 flex items-center gap-[12px] px-[18px] py-[12px]">
          <button onClick={() => navigate(-1)}
            className="size-[36px] flex items-center justify-center rounded-full"
            style={{ backgroundColor: chipBg }}>
            <ChevronLeft stroke={accentSoft} />
          </button>
          <span style={{ fontFamily: "'WenQuanYi Zen Hei',sans-serif", color: accent }}>면탐정</span>
        </div>
        <div className="flex-1 overflow-y-auto"><UdonComingSoon /></div>
      </div>
    );
  }

  // ── 메인 렌더 ────────────────────────────────────────────────────────────
  return (
    <div className="h-full flex flex-col overflow-hidden" style={{ backgroundColor: pageBg }}>

      {/* 헤더 */}
      <div className="shrink-0 flex items-center gap-[12px] px-[18px] pt-[14px] pb-[10px]">
        <button onClick={() => navigate(-1)}
          className="size-[36px] flex items-center justify-center rounded-full shrink-0 active:scale-[0.92] transition-transform"
          style={{ backgroundColor: chipBg }}>
          <ChevronLeft stroke={accentSoft} />
        </button>
        <div className="flex items-center gap-[8px]">
          <span className="text-[20px] tracking-[-0.5px]"
            style={{ fontFamily: "'WenQuanYi Zen Hei',sans-serif", color: accent }}>
            면탐정
          </span>
          <span className="text-[13px]"
            style={{ fontFamily: "'WenQuanYi Zen Hei',sans-serif", color: subColor }}>
            라멘 지도
          </span>
        </div>
        <div className="ml-auto flex items-center gap-[4px] px-[8px] py-[3px] rounded-full"
          style={{ backgroundColor: `${accent}22`, border: `1px solid ${accent}55` }}>
          <svg className="size-[6px]" viewBox="0 0 6 6">
            <circle cx="3" cy="3" r="3" fill={accent} />
          </svg>
          <span className="text-[10px]"
            style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 600, color: accent }}>
            울산
          </span>
        </div>
      </div>

      {/* 필터 칩 */}
      <div className="shrink-0 flex gap-[6px] px-[16px] pb-[10px] overflow-x-auto"
        style={{ scrollbarWidth: 'none' }}>
        {FILTERS.map(f => {
          const active = activeFilter === f.id;
          return (
            <button key={f.id}
              onClick={() => { setActiveFilter(f.id); setSelectedPlace(null); closeOverlay(); }}
              className="px-[12px] py-[6px] rounded-[16px] whitespace-nowrap shrink-0 transition-all duration-200 active:scale-[0.96]"
              style={{
                backgroundColor: active ? accent : chipBg,
                border: `1px solid ${active ? accent : border}`,
                boxShadow: active ? `0 0 10px ${accentGlow}` : 'none',
              }}>
              <span className="text-[11px]" style={{
                fontFamily: "'WenQuanYi Zen Hei',sans-serif",
                fontWeight: active ? 700 : 400,
                color: active ? labelColor : subColor,
              }}>
                {f.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* 지도 영역 */}
      <div className="flex-1 relative min-h-0">

        {/* 카카오 지도 컨테이너 */}
        <div id="kakao-map" style={{ width: '100%', height: '100%' }} />

        {/* ── 지도 로딩 중 오버레이 ── */}
        {!mapReady && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-[20px]"
            style={{ backgroundColor: pageBg }}>
            {/* 라멘 아이콘 애니메이션 */}
            <div className="relative flex items-center justify-center">
              {/* 외부 회전 링 */}
              <svg className="animate-spin absolute" width="72" height="72" viewBox="0 0 72 72" fill="none">
                <circle cx="36" cy="36" r="32" stroke={accent + '25'} strokeWidth="3" />
                <path d="M36 4a32 32 0 0132 32" stroke={accent} strokeWidth="3" strokeLinecap="round" />
              </svg>
              {/* 내부 아이콘 */}
              <div className="size-[48px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${accent}18` }}>
                <span style={{ fontSize: '24px', lineHeight: 1 }}>🍜</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[6px]">
              <span className="text-[16px] tracking-[-0.3px]"
                style={{ fontFamily: "'WenQuanYi Zen Hei',sans-serif", color: accent, fontWeight: 700 }}>
                지도 불러오는 중
              </span>
              <PulsingDots accent={accent} />
            </div>
          </div>
        )}

        {/* 검색 중 상단 토스트 */}
        {mapReady && searching && (
          <div className="absolute top-[12px] left-1/2 -translate-x-1/2 z-20 flex items-center gap-[8px] px-[14px] py-[8px] rounded-full"
            style={{
              backgroundColor: 'rgba(42,20,8,0.95)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            }}>
            <Spinner accent={accent} size={14} />
            <span className="text-[12px]"
              style={{ fontFamily: "'WenQuanYi Zen Hei',sans-serif", color: subColor }}>
              라멘집 탐색 중...
            </span>
          </div>
        )}

        {/* 결과 수 뱃지 */}
        {mapReady && !searching && places.length > 0 && (
          <div className="absolute left-[12px] top-[12px] z-10 px-[10px] py-[5px] rounded-[8px]"
            style={{
              backgroundColor: 'rgba(42,20,8,0.88)',
              backdropFilter: 'blur(6px)',
              border: `1px solid ${border}`,
            }}>
            <span className="text-[11px]"
              style={{ fontFamily: "'WenQuanYi Zen Hei',sans-serif", color: subColor }}>
              {places.length}개 가게
            </span>
          </div>
        )}

        {/* 결과 없음 */}
        {mapReady && !searching && places.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="px-[20px] py-[14px] rounded-[14px] flex flex-col items-center gap-[8px]"
              style={{ backgroundColor: 'rgba(42,20,8,0.92)', backdropFilter: 'blur(8px)' }}>
              <span className="text-[28px]">🔍</span>
              <span className="text-[13px]"
                style={{ fontFamily: "'WenQuanYi Zen Hei',sans-serif", color: subColor }}>
                해당 조건의 가게가 없습니다
              </span>
            </div>
          </div>
        )}

        {/* ── 하단 패널 (스켈레톤 or 가게 카드) ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20">

          {/* 검색 중 스켈레톤 카드 */}
          {mapReady && searching && !selectedPlace && (
            <SearchingSkeletonCard accent={accent} subColor={subColor} mutedColor={mutedColor} chipBg={chipBg} isRamen={isRamen} />
          )}

          {/* 가게 카드 슬라이드업 */}
          <div className="transition-transform duration-300 ease-out"
            style={{ transform: selectedPlace ? 'translateY(0)' : 'translateY(110%)' }}>
            {selectedPlace && (
              <BottomPlaceCard
                place={selectedPlace}
                onClose={() => { closeOverlay(); setSelectedPlace(null); }}
                onDirections={handleDirections}
                theme={theme}
                isRamen={isRamen}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 검색 중 ���켈레톤 카드 ─────────────────────────────────────────────────
function SearchingSkeletonCard({
  accent, subColor, mutedColor, chipBg, isRamen,
}: { accent: string; subColor: string; mutedColor: string; chipBg: string; isRamen: boolean }) {
  const shimmer = `${accent}18`;

  return (
    <div style={{
      background: 'linear-gradient(to top, rgba(255,251,245,1) 85%, transparent)',
      paddingTop: '24px',
    }}>
      <div className="flex justify-center mb-[10px]">
        <div className="w-[36px] h-[4px] rounded-full" style={{ backgroundColor: mutedColor + '40' }} />
      </div>

      <div className="px-[18px] pb-[28px] flex flex-col gap-[14px]">
        {/* "탐색 중" 레이블 */}
        <div className="flex items-center gap-[10px]">
          <Spinner accent={accent} size={15} />
          <span className="text-[13px]"
            style={{ fontFamily: "'WenQuanYi Zen Hei',sans-serif", color: accent, fontWeight: 600 }}>
            울산 라멘집 탐색 중...
          </span>
        </div>

        {/* 텍스트 스켈레톤 */}
        <div className="flex flex-col gap-[10px]">
          <div className="animate-pulse h-[22px] rounded-[8px] w-[55%]"
            style={{ backgroundColor: shimmer }} />
          <div className="animate-pulse h-[13px] rounded-[6px] w-[82%]"
            style={{ backgroundColor: shimmer }} />
          <div className="animate-pulse h-[13px] rounded-[6px] w-[45%]"
            style={{ backgroundColor: shimmer }} />
        </div>

        {/* 버튼 스켈레톤 */}
        <div className="flex gap-[8px]">
          <div className="animate-pulse flex-1 h-[46px] rounded-[12px]"
            style={{ backgroundColor: shimmer }} />
          <div className="animate-pulse flex-[2] h-[46px] rounded-[12px]"
            style={{ backgroundColor: shimmer }} />
        </div>
      </div>
    </div>
  );
}

// ── 하단 가게 카드 ─────────────────────────────────────────────────────────
function BottomPlaceCard({ place, onClose, onDirections, theme, isRamen }: {
  place: KakaoPlace;
  onClose: () => void;
  onDirections: (p: KakaoPlace) => void;
  theme: any;
  isRamen: boolean;
}) {
  const { chipBg, accent, accentSoft, accentGlowStrong, subColor, mutedColor, labelColor, border } = theme;
  const titleColor = theme.titleColor;
  const addr = place.road_address_name || place.address_name;

  return (
    <div style={{
      background: 'linear-gradient(to top, rgba(255,251,245,1) 85%, transparent)',
      paddingTop: '24px',
    }}>
      <div className="flex justify-center mb-[10px]">
        <div className="w-[36px] h-[4px] rounded-full" style={{ backgroundColor: mutedColor + '50' }} />
      </div>

      <div className="px-[18px] pb-[28px] flex flex-col gap-[14px]">
        {/* 가게 정보 + 닫기 버튼 */}
        <div className="flex items-start gap-[10px]">
          <div className="flex flex-col gap-[4px] flex-1 min-w-0">
            <span className="text-[20px] tracking-[-0.5px] leading-tight"
              style={{ fontFamily: "'WenQuanYi Zen Hei',sans-serif", fontWeight: 700, color: titleColor }}>
              {place.place_name}
            </span>
            <span className="text-[12px] leading-relaxed"
              style={{ fontFamily: "'WenQuanYi Zen Hei',sans-serif", color: subColor }}>
              {addr}
            </span>
            {place.phone && (
              <span className="text-[12px]"
                style={{ fontFamily: "'Manrope',sans-serif", color: mutedColor }}>
                📞 {place.phone}
              </span>
            )}
          </div>
          <button onClick={onClose}
            className="size-[32px] flex items-center justify-center rounded-full shrink-0 mt-[2px] active:scale-[0.92] transition-transform"
            style={{ backgroundColor: chipBg }}>
            <svg className="size-[14px]" fill="none" viewBox="0 0 16 16">
              <path d="M4 4l8 8M12 4l-8 8" stroke={mutedColor} strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* 버튼 행 */}
        <div className="flex gap-[8px]">
          <button
            onClick={() => window.open(place.place_url, '_blank', 'noopener,noreferrer')}
            className="flex-1 rounded-[12px] py-[13px] flex items-center justify-center gap-[6px] active:scale-[0.97] transition-transform"
            style={{ backgroundColor: chipBg, border: `1px solid ${border}` }}>
            <svg className="size-[14px]" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="9" r="6" stroke={accentSoft} strokeWidth="1.8" />
              <circle cx="10" cy="9" r="2.5" fill={accentSoft} />
              <path d="M10 15l-3 5h6l-3-5z" fill={accentSoft} />
            </svg>
            <span className="text-[13px]"
              style={{ fontFamily: "'WenQuanYi Zen Hei',sans-serif", color: accentSoft }}>
              지도 앱
            </span>
          </button>

          <button
            onClick={() => onDirections(place)}
            className="flex-[2] rounded-[12px] py-[13px] flex items-center justify-center gap-[6px] active:scale-[0.97] transition-transform"
            style={{
              background: `linear-gradient(135deg, ${accentSoft}, ${accent})`,
              boxShadow: `0 8px 24px ${accentGlowStrong}`,
            }}>
            <svg className="size-[16px]" fill="none" viewBox="0 0 20 20">
              <path d="M10 2L14 8H11V14H9V8H6L10 2ZM3 14H17V16H3V14Z" fill={labelColor} />
            </svg>
            <span className="text-[14px]"
              style={{ fontFamily: "'WenQuanYi Zen Hei',sans-serif", fontWeight: 700, color: labelColor }}>
              길찾기
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── 공통 UI 요소 ──────────────────────────────────────────────────────────

function ChevronLeft({ stroke }: { stroke: string }) {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
      <path d="M13 4l-6 6 6 6" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Spinner({ accent, size = 20 }: { accent: string; size?: number }) {
  return (
    <svg className="animate-spin" width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke={accent + '28'} strokeWidth="2.5" />
      <path d="M10 2a8 8 0 018 8" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 점 3개 펄스 애니메이션
function PulsingDots({ accent }: { accent: string }) {
  return (
    <div className="flex gap-[5px] items-center">
      {[0, 150, 300].map((delay, i) => (
        <div
          key={i}
          className="size-[5px] rounded-full animate-bounce"
          style={{ backgroundColor: accent, animationDelay: `${delay}ms`, animationDuration: '900ms' }}
        />
      ))}
    </div>
  );
}
