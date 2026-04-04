import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useApp } from '../AppContext';

const KAKAO_APP_KEY = '8d3328b4142c5552c1daa5eec04243f9';
const CHAIN_BLACKLIST = ['이치란', '잇푸도', '키스케'];

declare global { interface Window { kakao: any; } }

interface KakaoPlace {
  id: string;
  place_name: string;
  road_address_name: string;
  address_name: string;
  phone: string;
  x: string;
  y: string;
  place_url: string;
  category_name: string;
}

// 취향 → 검색 키워드 매핑
function buildKeyword(preference: any): string {
  const keywords: string[] = ['울산 라멘'];
  if (preference.broth?.length > 0) {
    const brothMap: Record<string, string> = {
      '돼지뼈': '돼지뼈', '닭': '닭', '해물': '해물',
      '쇼유': '쇼유', '시오': '시오', '미소': '미소', '혼합': '혼합',
    };
    const b = brothMap[preference.broth[0]];
    if (b) keywords.push(b);
  }
  return keywords.join(' ');
}

export default function ResultsPage() {
  const navigate = useNavigate();
  const { theme, mode, preference } = useApp();
  const isRamen = mode === 'ramen';
  const {
    pageBg, cardBg, chipBg, accent, accentSoft,
    titleColor, subColor, mutedColor, labelColor, border, deepBg,
  } = theme;

  const [places, setPlaces] = useState<KakaoPlace[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const search = () => {
      if (!window.kakao?.maps?.services) return;
      setLoading(true);
      setError(false);
      const keyword = buildKeyword(preference);
      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(
        keyword,
        (data: KakaoPlace[], status: string) => {
          setLoading(false);
          if (status === window.kakao.maps.services.Status.OK) {
            const result = data.filter(
              p => !CHAIN_BLACKLIST.some(c => p.place_name.includes(c))
            );
            setPlaces(result.slice(0, 10));
          } else {
            setError(true);
          }
        },
        {
          location: new window.kakao.maps.LatLng(35.5384, 129.3114),
          radius: 15000,
          sort: window.kakao.maps.services.SortBy.ACCURACY,
          size: 10,
        }
      );
    };

    if (window.kakao?.maps) {
      search();
    } else {
      const poll = setInterval(() => {
        if (window.kakao?.maps) { clearInterval(poll); search(); }
      }, 100);
      return () => clearInterval(poll);
    }
  }, []);

  return (
    <div className="w-full pb-[32px] transition-colors duration-500" style={{ backgroundColor: pageBg }}>
      {/* 헤더 */}
      <div className="sticky top-0 z-10 px-[20px] py-[14px] flex items-center gap-[14px] transition-colors duration-500"
        style={{ backgroundColor: pageBg }}>
        <button onClick={() => navigate(-1)}
          className="size-[36px] flex items-center justify-center rounded-full transition-colors"
          style={{ backgroundColor: chipBg }}>
          <svg className="size-[16px]" fill="none" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" stroke={accentSoft} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="text-[20px] tracking-[-1px]"
          style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accent }}>
          면탐정
        </span>
        <span className="text-[13px] opacity-60"
          style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}>
          탐색 결과
        </span>
      </div>

      <div className="w-full px-[20px] pt-[8px] flex flex-col gap-[24px]">
        {/* 타이틀 */}
        <div className="flex flex-col gap-[4px]">
          <div className="text-[11px] tracking-[1.4px] uppercase"
            style={{ fontFamily: "'Manrope', sans-serif", color: accentSoft }}>
            Smart Selection · {isRamen ? 'Ramen Mode' : 'Udon Mode'}
          </div>
          <div className="text-[28px] tracking-[-1.4px]"
            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", lineHeight: '1.2', color: titleColor }}>
            <p className="mb-0">당신을 위한</p>
            <p>탐색 결과</p>
          </div>
          <div className="text-[13px] leading-relaxed"
            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}>
            취향 분석 기반으로 엄선한 울산의 숨은 {isRamen ? '라멘' : '우동'}집입니다
          </div>
        </div>

        {/* 로딩 */}
        {loading && (
          <div className="flex flex-col gap-[12px]">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-[14px] overflow-hidden animate-pulse h-[100px]"
                style={{ backgroundColor: cardBg }} />
            ))}
          </div>
        )}

        {/* 에러 */}
        {error && !loading && (
          <div className="flex flex-col items-center gap-[12px] py-[40px]">
            <span className="text-[36px]">🔍</span>
            <span className="text-[14px]"
              style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}>
              검색 결과를 불러오지 못했습니다
            </span>
            <button onClick={() => window.location.reload()}
              className="px-[20px] py-[10px] rounded-[10px]"
              style={{ backgroundColor: accent, color: labelColor,
                fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontSize: '13px' }}>
              다시 시도
            </button>
          </div>
        )}

        {/* 가게 카드 목록 — 가로형 */}
        {!loading && !error && (
          <div className="flex flex-col">
            {places.map((place, idx) => (
              <button
                key={place.id}
                onClick={() => window.open(place.place_url, '_blank', 'noopener,noreferrer')}
                className="flex gap-[14px] items-center py-[16px] text-left active:scale-[0.98] transition-transform"
                style={{ borderBottom: idx < places.length - 1 ? `1px solid ${border}` : 'none' }}
              >
                {/* 번호 뱃지 */}
                <div className="shrink-0 size-[20px] rounded-full flex items-center justify-center"
                  style={{ backgroundColor: accent }}>
                  <span className="text-[10px]"
                    style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: labelColor }}>
                    {idx + 1}
                  </span>
                </div>

                {/* 가게 이미지 */}
                <div className="shrink-0 size-[72px] rounded-[10px] overflow-hidden"
                  style={{ backgroundColor: chipBg }}>
                  <div className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: `${accent}18` }}>
                    <span style={{ fontSize: '28px' }}>🍜</span>
                  </div>
                </div>

                {/* 가게 정보 */}
                <div className="flex-1 min-w-0 flex flex-col gap-[4px]">
                  <div className="flex items-start justify-between gap-[8px]">
                    <span className="text-[16px] tracking-[-0.3px] truncate"
                      style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif",
                        fontWeight: 700, color: titleColor }}>
                      {place.place_name}
                    </span>
                  </div>
                  <span className="text-[11px] truncate"
                    style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: mutedColor }}>
                    {place.road_address_name || place.address_name}
                  </span>
                  {place.phone && (
                    <span className="text-[11px]"
                      style={{ fontFamily: "'Manrope', sans-serif", color: mutedColor }}>
                      📞 {place.phone}
                    </span>
                  )}
                  <div className="flex gap-[5px] mt-[2px] flex-wrap">
                    <div className="px-[7px] py-[2px] rounded-[4px]"
                      style={{ backgroundColor: `${accent}18` }}>
                      <span className="text-[10px]"
                        style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accent }}>
                        라멘
                      </span>
                    </div>
                  </div>
                </div>

                {/* 화살표 */}
                <div className="shrink-0">
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                    <path d="M6 12l4-4-4-4" stroke={mutedColor} strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* 지도 버튼 */}
        <button onClick={() => navigate('/map')}
          className="rounded-[12px] py-[16px] flex gap-[10px] items-center justify-center transition-colors"
          style={{ backgroundColor: chipBg, border: `1px solid ${border}` }}>
          <svg className="size-[18px]" fill="none" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z"
              stroke={accentSoft} strokeWidth="2" strokeLinecap="round" />
            <circle cx="10" cy="8" r="2" stroke={accentSoft} strokeWidth="2" />
          </svg>
          <span className="text-[14px]"
            style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: accentSoft }}>
            지도에서 더 찾아보기
          </span>
        </button>
      </div>
    </div>
  );
}
