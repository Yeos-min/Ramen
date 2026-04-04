/**
 * MapPage — 카카오 지도 + 장소 검색 API (React-Kakao-Maps-SDK 버전)
 */
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { Map, MapMarker, CustomOverlayMap, useKakaoLoader } from 'react-kakao-maps-sdk';
import { useApp } from '../AppContext';
import { UdonComingSoon } from '../components/UdonComingSoon';

const KAKAO_APP_KEY = '8d3328b4142c5552c1daa5eec04243f9';

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

export default function MapPage() {
  const navigate = useNavigate();
  const { theme, mode } = useApp();
  const isRamen = mode === 'ramen';
  const {
    pageBg, chipBg, accent, accentSoft, accentGlow, accentGlowStrong,
    subColor, mutedColor, labelColor, border,
  } = theme;

  // 카카오 SDK 로드 상태 관리
  const [loading, error] = useKakaoLoader({
    appkey: KAKAO_APP_KEY,
    libraries: ['services'],
  });

  const mapRef = useRef<kakao.maps.Map>(null);
  const [places, setPlaces] = useState<KakaoPlace[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<KakaoPlace | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterId>('전체');
  const [searching, setSearching] = useState(false);

  // 장소 검색 로직
  useEffect(() => {
    if (loading || error || !window.kakao?.maps?.services) return;
    
    setSearching(true);
    setSelectedPlace(null);
    const filter = FILTERS.find(f => f.id === activeFilter);
    if (!filter) return;

    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(
      filter.keyword,
      (data, status) => {
        setSearching(false);
        if (status === kakao.maps.services.Status.OK) {
          const result = data.filter(p => !CHAIN_BLACKLIST.some(c => p.place_name.includes(c)));
          setPlaces(result as unknown as KakaoPlace[]);
          
          if (result.length > 0 && mapRef.current) {
            const bounds = new kakao.maps.LatLngBounds();
            result.forEach(place => bounds.extend(new kakao.maps.LatLng(Number(place.y), Number(place.x))));
            mapRef.current.setBounds(bounds);
          }
        } else {
          setPlaces([]);
        }
      },
      {
        location: new kakao.maps.LatLng(35.5384, 129.3114),
        radius: 15000,
      }
    );
  }, [activeFilter, loading, error]);

  const handleDirections = (place: KakaoPlace) => {
    window.open(
      `https://map.kakao.com/link/to/${encodeURIComponent(place.place_name)},${place.y},${place.x}`,
      '_blank', 'noopener,noreferrer'
    );
  };

  if (!isRamen) {
    return (
      <div className="h-full flex flex-col overflow-hidden" style={{ backgroundColor: pageBg }}>
        <div className="shrink-0 flex items-center gap-[12px] px-[18px] py-[12px]">
          <button onClick={() => navigate(-1)} className="size-[36px] flex items-center justify-center rounded-full" style={{ backgroundColor: chipBg }}>
            <ChevronLeft stroke={accentSoft} />
          </button>
          <span style={{ fontFamily: "'WenQuanYi Zen Hei',sans-serif", color: accent }}>면탐정</span>
        </div>
        <div className="flex-1 overflow-y-auto"><UdonComingSoon /></div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col overflow-hidden" style={{ backgroundColor: pageBg }}>
      {/* 헤더 */}
      <div className="shrink-0 flex items-center gap-[12px] px-[18px] pt-[14px] pb-[10px]">
        <button onClick={() => navigate(-1)} className="size-[36px] flex items-center justify-center rounded-full shrink-0 active:scale-[0.92] transition-transform" style={{ backgroundColor: chipBg }}>
          <ChevronLeft stroke={accentSoft} />
        </button>
        <div className="flex items-center gap-[8px]">
          <span className="text-[20px] tracking-[-0.5px]" style={{ fontFamily: "'WenQuanYi Zen Hei',sans-serif", color: accent }}>면탐정</span>
          <span className="text-[13px]" style={{ fontFamily: "'WenQuanYi Zen Hei',sans-serif", color: subColor }}>라멘 지도</span>
        </div>
      </div>

      {/* 필터 */}
      <div className="shrink-0 flex gap-[6px] px-[16px] pb-[10px] overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        {FILTERS.map(f => {
          const active = activeFilter === f.id;
          return (
            <button key={f.id} onClick={() => setActiveFilter(f.id)} className="px-[12px] py-[6px] rounded-[16px] whitespace-nowrap shrink-0 transition-all duration-200 active:scale-[0.96]" style={{ backgroundColor: active ? accent : chipBg, border: `1px solid ${active ? accent : border}`, boxShadow: active ? `0 0 10px ${accentGlow}` : 'none' }}>
              <span className="text-[11px]" style={{ fontFamily: "'WenQuanYi Zen Hei',sans-serif", fontWeight: active ? 700 : 400, color: active ? labelColor : subColor }}>{f.label}</span>
            </button>
          );
        })}
      </div>

      {/* 지도 영역 */}
      <div className="flex-1 relative min-h-0">
        {loading ? (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-[20px]" style={{ backgroundColor: pageBg }}>
            <div className="flex flex-col items-center gap-[6px]">
              <span className="text-[16px] font-bold" style={{ color: accent }}>지도 불러오는 중...</span>
            </div>
          </div>
        ) : error ? (
           <div className="absolute inset-0 z-30 flex items-center justify-center" style={{ backgroundColor: pageBg, color: accent }}>지도 로드 실패</div>
        ) : (
          <Map
            center={{ lat: 35.5384, lng: 129.3114 }}
            style={{ width: '100%', height: '100%' }}
            level={5}
            ref={mapRef}
            onClick={() => setSelectedPlace(null)}
          >
            {places.map((place) => (
              <MapMarker
                key={place.id}
                position={{ lat: Number(place.y), lng: Number(place.x) }}
                onClick={() => setSelectedPlace(place)}
                image={{
                  src: `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="42" viewBox="0 0 30 42"><path d="M15 0C6.7 0 0 6.7 0 15c0 10 15 27 15 27S30 25 30 15C30 6.7 23.3 0 15 0z" fill="${accent}"/><circle cx="15" cy="15" r="6.5" fill="rgba(255,255,255,0.92)"/><circle cx="15" cy="15" r="3.2" fill="${accent}"/></svg>`)}`,
                  size: { width: 30, height: 42 },
                  options: { offset: { x: 15, y: 42 } },
                }}
              />
            ))}
            
            {/* 선택된 장소 오버레이 (마커 위 정보창) */}
            {selectedPlace && (
              <CustomOverlayMap position={{ lat: Number(selectedPlace.y), lng: Number(selectedPlace.x) }} yAnchor={1.18} zIndex={15}>
                <div style={{ position: 'relative', pointerEvents: 'none', filter: 'drop-shadow(0 4px 14px rgba(0,0,0,0.5))' }}>
                  <div style={{ background: '#FFFBF5', border: `2px solid ${accent}`, borderRadius: '10px', padding: '9px 14px', minWidth: '160px', boxSizing: 'border-box' }}>
                    <div style={{ color: '#2C1A0E', fontSize: '12px', fontWeight: 700, marginBottom: '3px' }}>{selectedPlace.place_name}</div>
                    <div style={{ color: '#7A4F30', fontSize: '10px' }}>{selectedPlace.road_address_name || selectedPlace.address_name}</div>
                  </div>
                  <div style={{ position: 'absolute', bottom: '-9px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: `10px solid ${accent}` }}></div>
                  <div style={{ position: 'absolute', bottom: '-6px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '7px solid #FFFBF5' }}></div>
                </div>
              </CustomOverlayMap>
            )}
          </Map>
        )}

        {/* ── 하단 패널 (스켈레톤 or 가게 카드) ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="transition-transform duration-300 ease-out" style={{ transform: selectedPlace ? 'translateY(0)' : 'translateY(110%)' }}>
            {selectedPlace && (
              <BottomPlaceCard place={selectedPlace} onClose={() => setSelectedPlace(null)} onDirections={handleDirections} theme={theme} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// 컴포넌트
function BottomPlaceCard({ place, onClose, onDirections, theme }: any) {
  const { chipBg, accent, accentSoft, accentGlowStrong, subColor, mutedColor, labelColor, border, titleColor } = theme;
  const addr = place.road_address_name || place.address_name;

  return (
    <div style={{ background: 'linear-gradient(to top, rgba(255,251,245,1) 85%, transparent)', paddingTop: '24px' }}>
      <div className="px-[18px] pb-[28px] flex flex-col gap-[14px]">
        <div className="flex items-start gap-[10px]">
          <div className="flex flex-col gap-[4px] flex-1 min-w-0">
            <span className="text-[20px] font-bold" style={{ color: titleColor }}>{place.place_name}</span>
            <span className="text-[12px]" style={{ color: subColor }}>{addr}</span>
          </div>
          <button onClick={onClose} className="size-[32px] flex items-center justify-center rounded-full" style={{ backgroundColor: chipBg }}>X</button>
        </div>
        <div className="flex gap-[8px]">
          <button onClick={() => onDirections(place)} className="flex-[2] rounded-[12px] py-[13px] font-bold" style={{ background: `linear-gradient(135deg, ${accentSoft}, ${accent})`, color: labelColor }}>
            길찾기
          </button>
        </div>
      </div>
    </div>
  );
}

function ChevronLeft({ stroke }: { stroke: string }) {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
      <path d="M13 4l-6 6 6 6" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
