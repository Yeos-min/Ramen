/** 울산 중구 일대 스타일라이즈드 SVG 지도 */
import { Shop } from '../types';
import { Theme } from '../theme';

interface Props {
  shops: Shop[];
  filteredIds: Set<string>;
  selectedId: string | null;
  onSelect: (shop: Shop) => void;
  onDismiss: () => void;
  theme: Theme;
  isRamen: boolean;
}

export function UlsanMapSvg({ shops, filteredIds, selectedId, onSelect, onDismiss, theme, isRamen }: Props) {
  const mapBg     = isRamen ? '#160803' : '#e8e2d3';
  const roadMajor = isRamen ? '#2e1a0e' : '#cfc3b0';
  const roadMinor = isRamen ? '#251409' : '#d8cfc0';
  const roadLine  = isRamen ? '#3d2515' : '#bfb5a5';
  const blockFill = isRamen ? '#1e0f06' : '#ddd6c8';
  const blockStroke = isRamen ? '#2a1608' : '#ccc5b5';
  const parkFill  = isRamen ? '#0f2010' : '#c8d8b8';
  const parkStroke = isRamen ? '#1a3a1a' : '#a0b890';
  const waterFill = isRamen ? '#0a1520' : '#b8d0e0';
  const textColor = isRamen ? '#4a2e1e' : '#a09080';
  const textBright = isRamen ? '#6b4030' : '#7a6a58';
  const dotColor  = isRamen ? '#3d2515' : '#c0b09a';
  const centerLine = isRamen ? '#2a160a' : '#bfb090';

  return (
    <svg
      viewBox="0 0 390 480"
      className="w-full h-full"
      style={{ display: 'block' }}
      onClick={onDismiss}
    >
      {/* ─── 배경 ─── */}
      <rect width="390" height="480" fill={mapBg} />

      {/* ─── 강 (태화강) ─── */}
      <path
        d="M 0 410 C 40 405, 80 415, 120 408 C 160 400, 200 412, 240 405 C 280 398, 320 408, 390 402"
        fill="none" stroke={waterFill} strokeWidth="28" strokeLinecap="round"
      />
      <path
        d="M 0 410 C 40 405, 80 415, 120 408 C 160 400, 200 412, 240 405 C 280 398, 320 408, 390 402"
        fill="none" stroke={isRamen ? '#0d1c28' : '#cce0ee'} strokeWidth="22" strokeLinecap="round"
      />
      {/* 강 잔물결 */}
      {[0, 60, 130, 200, 270, 340].map((x, i) => (
        <path key={i}
          d={`M ${x} ${406 + (i % 2) * 6} q 12 -3 24 0`}
          fill="none" stroke={isRamen ? '#152030' : '#b8d4e8'} strokeWidth="1.5" opacity="0.6"
        />
      ))}
      <text x="160" y="418" fill={isRamen ? '#1a2e40' : '#6a9ab0'} fontSize="9"
        style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '2px' }}>
        태화강
      </text>

      {/* ─── 도로망 ─── */}
      {/* 주요 간선도로 (두꺼운) */}
      {/* 남북 간선 */}
      <path d="M 105 0 L 100 390" fill="none" stroke={roadMajor} strokeWidth="14" />
      <path d="M 105 0 L 100 390" fill="none" stroke={centerLine} strokeWidth="1" strokeDasharray="8,10" opacity="0.5" />

      <path d="M 200 0 L 195 390" fill="none" stroke={roadMajor} strokeWidth="14" />
      <path d="M 200 0 L 195 390" fill="none" stroke={centerLine} strokeWidth="1" strokeDasharray="8,10" opacity="0.5" />

      <path d="M 305 0 L 298 390" fill="none" stroke={roadMajor} strokeWidth="12" />
      <path d="M 305 0 L 298 390" fill="none" stroke={centerLine} strokeWidth="1" strokeDasharray="8,10" opacity="0.4" />

      {/* 동서 간선 */}
      <path d="M 0 90 L 390 95" fill="none" stroke={roadMajor} strokeWidth="14" />
      <path d="M 0 90 L 390 95" fill="none" stroke={centerLine} strokeWidth="1" strokeDasharray="8,10" opacity="0.5" />

      <path d="M 0 200 L 390 205" fill="none" stroke={roadMajor} strokeWidth="14" />
      <path d="M 0 200 L 390 205" fill="none" stroke={centerLine} strokeWidth="1" strokeDasharray="8,10" opacity="0.5" />

      <path d="M 0 310 L 390 308" fill="none" stroke={roadMajor} strokeWidth="12" />
      <path d="M 0 310 L 390 308" fill="none" stroke={centerLine} strokeWidth="1" strokeDasharray="8,10" opacity="0.4" />

      {/* 보조 도로 (중간) */}
      <path d="M 152 0 L 148 390" fill="none" stroke={roadMinor} strokeWidth="8" />
      <path d="M 252 0 L 248 390" fill="none" stroke={roadMinor} strokeWidth="8" />
      <path d="M 350 0 L 348 390" fill="none" stroke={roadMinor} strokeWidth="8" />
      <path d="M 0 145 L 390 148" fill="none" stroke={roadMinor} strokeWidth="8" />
      <path d="M 0 258 L 390 260" fill="none" stroke={roadMinor} strokeWidth="8" />
      <path d="M 0 360 L 390 358" fill="none" stroke={roadMinor} strokeWidth="8" />

      {/* 골목길 */}
      <path d="M 52 0 L 50 380"  fill="none" stroke={roadLine} strokeWidth="4" />
      <path d="M 335 50 L 332 380" fill="none" stroke={roadLine} strokeWidth="4" />
      <path d="M 0 50 L 390 52"  fill="none" stroke={roadLine} strokeWidth="4" />
      <path d="M 0 170 L 390 172" fill="none" stroke={roadLine} strokeWidth="4" />
      <path d="M 0 232 L 390 230" fill="none" stroke={roadLine} strokeWidth="4" />
      <path d="M 0 338 L 390 336" fill="none" stroke={roadLine} strokeWidth="4" />
      {/* 대각선 도로 */}
      <path d="M 200 200 L 305 310" fill="none" stroke={roadLine} strokeWidth="5" opacity="0.7" />
      <path d="M 100 90 L 55 200"   fill="none" stroke={roadLine} strokeWidth="4" opacity="0.6" />
      <path d="M 305 90 L 350 200"  fill="none" stroke={roadLine} strokeWidth="4" opacity="0.6" />

      {/* ─── 블록 (건물군) ─── */}
      {/* 블록 1: 좌상단 */}
      {[[12,6,38,40],[12,50,38,36],[14,8,36,38]].map(([x,y,w,h],i) => (
        <rect key={`b1-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[60,8,30,30],[62,42,28,26],[60,10,28,28]].map(([x,y,w,h],i) => (
        <rect key={`b2-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {/* 블록 2: 상단 중 */}
      {[[116,8,30,35],[120,46,26,38],[118,6,28,32]].map(([x,y,w,h],i) => (
        <rect key={`b3-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[162,8,30,38],[164,48,26,36],[163,6,28,36]].map(([x,y,w,h],i) => (
        <rect key={`b4-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[210,8,40,40],[212,52,38,32],[210,8,36,38]].map(([x,y,w,h],i) => (
        <rect key={`b5-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[262,6,32,40],[264,48,28,36]].map(([x,y,w,h],i) => (
        <rect key={`b6-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[316,6,28,36],[318,46,24,32]].map(([x,y,w,h],i) => (
        <rect key={`b7-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[358,8,28,35],[360,46,24,30]].map(([x,y,w,h],i) => (
        <rect key={`b8-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {/* 중단 블록 */}
      {[[12,102,38,38],[14,142,32,52],[12,100,36,36]].map(([x,y,w,h],i) => (
        <rect key={`bm1-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[60,102,30,38],[62,144,26,50]].map(([x,y,w,h],i) => (
        <rect key={`bm2-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[116,102,30,38],[118,144,26,50],[116,100,28,36]].map(([x,y,w,h],i) => (
        <rect key={`bm3-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[162,102,32,40],[164,145,28,50],[162,100,30,38]].map(([x,y,w,h],i) => (
        <rect key={`bm4-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[210,102,40,40],[212,146,36,50]].map(([x,y,w,h],i) => (
        <rect key={`bm5-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[262,102,32,40],[264,145,28,50]].map(([x,y,w,h],i) => (
        <rect key={`bm6-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[316,100,28,38],[318,142,24,50]].map(([x,y,w,h],i) => (
        <rect key={`bm7-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[358,102,28,38],[360,142,24,50]].map(([x,y,w,h],i) => (
        <rect key={`bm8-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {/* 중하단 블록 */}
      {[[12,214,38,40],[14,258,32,46],[12,212,36,38]].map(([x,y,w,h],i) => (
        <rect key={`bl1-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[60,214,28,38],[62,256,24,48]].map(([x,y,w,h],i) => (
        <rect key={`bl2-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[116,214,30,40],[118,258,26,46]].map(([x,y,w,h],i) => (
        <rect key={`bl3-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[162,214,32,38],[164,256,28,46]].map(([x,y,w,h],i) => (
        <rect key={`bl4-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[210,212,40,40],[212,256,36,48]].map(([x,y,w,h],i) => (
        <rect key={`bl5-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[262,214,32,38],[264,256,28,46]].map(([x,y,w,h],i) => (
        <rect key={`bl6-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[316,214,28,40],[318,256,24,46]].map(([x,y,w,h],i) => (
        <rect key={`bl7-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[358,214,28,38],[360,255,24,48]].map(([x,y,w,h],i) => (
        <rect key={`bl8-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {/* 하단 블록 */}
      {[[12,320,38,36],[14,360,32,42]].map(([x,y,w,h],i) => (
        <rect key={`bb1-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[60,320,28,36],[62,360,24,42]].map(([x,y,w,h],i) => (
        <rect key={`bb2-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[116,320,30,36],[118,360,26,42]].map(([x,y,w,h],i) => (
        <rect key={`bb3-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[162,320,32,36],[164,360,28,40]].map(([x,y,w,h],i) => (
        <rect key={`bb4-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[210,320,40,36],[212,360,36,40]].map(([x,y,w,h],i) => (
        <rect key={`bb5-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[262,320,32,36],[264,360,28,40]].map(([x,y,w,h],i) => (
        <rect key={`bb6-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}
      {[[316,320,28,36],[318,358,24,40]].map(([x,y,w,h],i) => (
        <rect key={`bb7-${i}`} x={x} y={y} width={w} height={h} rx="2" fill={blockFill} stroke={blockStroke} strokeWidth="0.5" />
      ))}

      {/* ─── 공원 (태화강 국가정원) ─── */}
      <rect x="12" y="320" width="86" height="38" rx="8" fill={parkFill} stroke={parkStroke} strokeWidth="1.5" opacity="0.85" />
      {/* 나무 점 */}
      {[[22,330],[38,332],[54,328],[70,333],[84,330],[30,342],[50,344],[66,341]].map(([cx,cy],i) => (
        <circle key={`t${i}`} cx={cx} cy={cy} r="3.5" fill={isRamen ? '#1e3a1e' : '#a8c890'} />
      ))}
      <text x="55" y="356" textAnchor="middle" fill={isRamen ? '#2a4a2a' : '#6a8a58'} fontSize="7"
        style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.5px' }}>
        태화강 국가정원
      </text>

      {/* ─── 도로 이름 라벨 ─── */}
      {/* 간선 라벨 */}
      <text x="108" y="87" fill={textColor} fontSize="7.5" style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.3px' }}>
        문수로
      </text>
      <text x="204" y="87" fill={textColor} fontSize="7.5" style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.3px' }}>
        태화로
      </text>
      <text x="25" y="88" fill={textColor} fontSize="7" style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.3px' }}>
        남산로
      </text>
      <text x="24" y="198" fill={textColor} fontSize="7.5" style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.3px' }}>
        삼산로
      </text>
      <text x="24" y="308" fill={textColor} fontSize="7.5" style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.3px' }}>
        중앙로
      </text>
      <text x="158" y="197" fill={textColor} fontSize="7" style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.3px' }}>
        번영로
      </text>
      {/* 지구명 */}
      <text x="50" y="130" fill={textBright} fontSize="9" style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '1px', fontWeight: 600 }}>
        중구
      </text>
      <text x="220" y="130" fill={textBright} fontSize="9" style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '1px', fontWeight: 600 }}>
        남구
      </text>
      <text x="336" y="130" fill={textBright} fontSize="9" style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '1px', fontWeight: 600 }}>
        동구
      </text>
      {/* 반환점 (교차로) 표시 */}
      {[[100,93],[195,93],[100,202],[195,202],[100,308],[195,308]].map(([cx,cy],i) => (
        <circle key={`junc${i}`} cx={cx} cy={cy} r="4.5" fill={roadMajor} stroke={roadLine} strokeWidth="1" />
      ))}

      {/* ─── 가게 마커 ─── */}
      {shops.map((shop) => {
        const isSelected = selectedId === shop.id;
        const isFiltered = filteredIds.has(shop.id);
        const { x, y } = shop.mapPos;
        const markerColor = isFiltered ? theme.accent : (isRamen ? '#3a2015' : '#b0a090');
        const labelBg = isRamen ? '#2a1408ee' : '#f5f0e6ee';

        // 말풍선 위치 (SVG 화면 밖으로 나가지 않도록 클램핑)
        const bw = 124;
        const bh = 44;
        const bx = Math.max(6, Math.min(x - bw / 2, 390 - bw - 6));
        const by = y - 36 - bh;  // 핀 상단(y-32)에서 4px 여백 후 버블
        const tailY = y - 36;

        return (
          <g
            key={shop.id}
            style={{ cursor: 'pointer' }}
            onClick={(e) => { e.stopPropagation(); onSelect(shop); }}
          >
            {/* 선택됐을 때 pulse 링 */}
            {isSelected && (
              <circle cx={x} cy={y - 20} r="20" fill={theme.accent} opacity="0.15" />
            )}

            {/* 핀 */}
            <path
              d={`M ${x} ${y} C ${x} ${y}, ${x - 10} ${y - 14}, ${x - 10} ${y - 22} a 10 10 0 1 1 20 0 c 0 8 -10 22 -10 22 Z`}
              fill={isFiltered ? markerColor : (isRamen ? '#2a1408' : '#c8bfb0')}
              stroke={isFiltered ? (isSelected ? '#fff' : theme.accentSoft) : (isRamen ? '#3a2015' : '#b0a888')}
              strokeWidth={isSelected ? 2 : 1}
              opacity={isFiltered ? 1 : 0.4}
            />
            {/* 핀 내부 점 */}
            <circle
              cx={x} cy={y - 22}
              r="4"
              fill={isFiltered ? (isSelected ? '#fff' : theme.accentSoft) : (isRamen ? '#3a2015' : '#c0b8a8')}
            />

            {/* ─── 말풍선 (선택 시만) ─── */}
            {isSelected && isFiltered && (
              <>
                {/* 버블 배경 */}
                <rect
                  x={bx} y={by}
                  width={bw} height={bh}
                  rx="8"
                  fill={labelBg}
                  stroke={theme.accent}
                  strokeWidth="1.5"
                />
                {/* 꼬리 삼각형 */}
                <polygon
                  points={`${x - 6},${tailY} ${x + 6},${tailY} ${x},${tailY + 8}`}
                  fill={theme.accent}
                />
                <polygon
                  points={`${x - 5},${tailY - 1} ${x + 5},${tailY - 1} ${x},${tailY + 6}`}
                  fill={labelBg}
                />
                {/* 가게 이름 */}
                <text
                  x={bx + bw / 2}
                  y={by + 17}
                  textAnchor="middle"
                  fill={isRamen ? '#ffdbce' : theme.titleColor}
                  fontSize="10"
                  style={{ fontFamily: 'WenQuanYi Zen Hei, sans-serif', fontWeight: 700 }}
                >
                  {shop.name}
                </text>
                {/* 대표 키워드 */}
                <text
                  x={bx + bw / 2}
                  y={by + 31}
                  textAnchor="middle"
                  fill={theme.accentSoft}
                  fontSize="9"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {shop.tags[0]} · {shop.distance}
                </text>
              </>
            )}

            {/* 비선택 필터된 핀: 작은 이름 라벨 */}
            {!isSelected && isFiltered && (
              <>
                <rect
                  x={bx + (bw - 56) / 2} y={y - 52}
                  width={56} height={14}
                  rx="3"
                  fill={isRamen ? 'rgba(42,20,8,0.85)' : 'rgba(245,240,230,0.85)'}
                />
                <text
                  x={x} y={y - 42}
                  textAnchor="middle"
                  fill={isRamen ? '#ffd0b8' : '#2a1a0a'}
                  fontSize="8"
                  style={{ fontFamily: 'WenQuanYi Zen Hei, sans-serif', fontWeight: 600 }}
                >
                  {shop.name}
                </text>
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}