/**
 * MatchedMenuCard
 * 사용자가 선택한 취향 항목과 가게 메뉴를 비교해,
 * "취향에 맞는 메뉴" 배지와 매칭 라벨을 표시하는 카드 컴포넌트
 */
import { MenuItem, Preference, getMenuMatch, totalSelectedCount } from '../types';
import { Theme } from '../theme';

interface Props {
  menus: MenuItem[];
  preference: Preference;
  theme: Theme;
  isRamen: boolean;
  /** 결과 카드에서는 "best 1개"만, 상세 페이지에서는 전체 목록 */
  mode: 'summary' | 'full';
}

function MatchBadge({ label, accent, labelColor }: { label: string; accent: string; labelColor: string }) {
  return (
    <span
      className="px-[7px] py-[2px] rounded-[4px] text-[10px] whitespace-nowrap"
      style={{
        backgroundColor: accent + '22',
        color: accent,
        border: `1px solid ${accent}55`,
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 600,
      }}
    >
      {label}
    </span>
  );
}

export function MatchedMenuCard({ menus, preference, theme, isRamen, mode }: Props) {
  const total = totalSelectedCount(preference);

  // 점수 내림차순 정렬
  const scored = menus
    .map((m) => ({ menu: m, ...getMenuMatch(m, preference) }))
    .sort((a, b) => {
      // 동점이면 isSignature 우선
      if (b.score !== a.score) return b.score - a.score;
      return (b.menu.isSignature ? 1 : 0) - (a.menu.isSignature ? 1 : 0);
    });

  const { accent, accentSoft, chipBg, deepBg, subColor, mutedColor, border, labelColor, cardBg } = theme;
  const textMain = isRamen ? '#fff' : theme.titleColor;

  if (total === 0) return null; // 아무것도 선택 안 했으면 표시 안 함

  // summary 모드: 1위 메뉴만 (결과 카드 내 삽입용)
  if (mode === 'summary') {
    const best = scored[0];
    if (best.score === 0) return null;
    return (
      <div
        className="flex items-center gap-[10px] rounded-[8px] px-[12px] py-[10px]"
        style={{ backgroundColor: accent + '18', border: `1.5px solid ${accent}55` }}
      >
        {/* Match fill bar */}
        <div className="flex flex-col gap-[3px] shrink-0">
          <div className="flex gap-[3px]">
            {Array.from({ length: total }).map((_, i) => (
              <div
                key={i}
                className="w-[6px] h-[6px] rounded-full"
                style={{ backgroundColor: i < best.score ? accent : accent + '30' }}
              />
            ))}
          </div>
          <span
            className="text-[9px]"
            style={{ fontFamily: "'Manrope', sans-serif", color: accent, fontWeight: 700 }}
          >
            {best.score}/{total} 일치
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-[5px] flex-wrap">
            <span
              className="text-[13px] truncate"
              style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: 600, color: textMain }}
            >
              {best.menu.name}
            </span>
            {best.menu.isSignature && (
              <span
                className="text-[9px] px-[5px] py-[1px] rounded-[3px] shrink-0"
                style={{ backgroundColor: accent, color: labelColor, fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
              >
                시그니처
              </span>
            )}
            {best.menu.isLimited && (
              <span
                className="text-[9px] px-[5px] py-[1px] rounded-[3px] shrink-0"
                style={{ backgroundColor: '#c07020', color: '#fff', fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
              >
                한정
              </span>
            )}
          </div>
          <div className="flex gap-[4px] flex-wrap mt-[3px]">
            {best.matchedLabels.map((lbl) => (
              <MatchBadge key={lbl} label={lbl} accent={accent} labelColor={labelColor} />
            ))}
          </div>
        </div>

        <div className="shrink-0 text-right">
          <span
            className="text-[13px]"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: accentSoft }}
          >
            {best.menu.price.toLocaleString()}원
          </span>
        </div>
      </div>
    );
  }

  // full 모드: 전체 메뉴 목록 (상세 페이지용)
  const perfectMatches = scored.filter((s) => s.score === total && total > 0);
  const partialMatches = scored.filter((s) => s.score > 0 && s.score < total);
  const noMatches = scored.filter((s) => s.score === 0);

  return (
    <div className="flex flex-col gap-[10px]">
      {scored.map(({ menu, score, matchedLabels }) => {
        const isPerfect = total > 0 && score === total;
        const isPartial = score > 0 && score < total;
        const isNone = score === 0;

        return (
          <div
            key={menu.id}
            className="rounded-[12px] p-[14px] flex flex-col gap-[8px] transition-all"
            style={{
              backgroundColor: isPerfect ? accent + '14' : isPartial ? chipBg : deepBg,
              border: isPerfect
                ? `1.5px solid ${accent}88`
                : isPartial
                ? `1px solid ${accent}33`
                : `1px solid ${border}`,
              opacity: isNone ? 0.55 : 1,
            }}
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-[6px] flex-wrap">
                  {isPerfect && (
                    <span
                      className="text-[9px] px-[6px] py-[2px] rounded-[4px] shrink-0"
                      style={{ backgroundColor: accent, color: labelColor, fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
                    >
                      ✦ 취향 일치
                    </span>
                  )}
                  {menu.isSignature && (
                    <span
                      className="text-[9px] px-[5px] py-[1px] rounded-[3px] shrink-0"
                      style={{ backgroundColor: accentSoft + '40', color: accentSoft, fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
                    >
                      시그니처
                    </span>
                  )}
                  {menu.isLimited && (
                    <span
                      className="text-[9px] px-[5px] py-[1px] rounded-[3px] shrink-0"
                      style={{ backgroundColor: '#c0702040', color: '#c07020', fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
                    >
                      기간 한정
                    </span>
                  )}
                </div>
                <div
                  className="text-[15px] mt-[2px]"
                  style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", fontWeight: 600, color: textMain }}
                >
                  {menu.name}
                </div>
                <div
                  className="text-[12px] mt-[1px]"
                  style={{ fontFamily: "'WenQuanYi Zen Hei', sans-serif", color: subColor }}
                >
                  {menu.description}
                </div>
              </div>
              <div className="shrink-0 text-right">
                <span
                  className="text-[14px]"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: isPerfect ? accent : subColor }}
                >
                  {menu.price.toLocaleString()}원
                </span>
              </div>
            </div>

            {/* Spec chips + match indicator */}
            <div className="flex items-center gap-[5px] flex-wrap">
              {/* 스펙 4개 */}
              {([
                { key: 'broth', val: menu.broth + ' 육수', pref: preference.broth ? menu.broth === preference.broth : null },
                { key: 'texture', val: menu.texture + '면', pref: preference.texture ? menu.texture === preference.texture : null },
                { key: 'richness', val: menu.richness, pref: preference.richness ? menu.richness === preference.richness : null },
                { key: 'spice', val: '맵기 ' + menu.spiceLevel, pref: preference.spiceLevel ? menu.spiceLevel === preference.spiceLevel : null },
              ] as { key: string; val: string; pref: boolean | null }[]).map(({ key, val, pref: matched }) => (
                <span
                  key={key}
                  className="px-[7px] py-[2px] rounded-[4px] text-[10px]"
                  style={{
                    backgroundColor:
                      matched === true
                        ? accent + '25'
                        : matched === false
                        ? border
                        : chipBg,
                    color:
                      matched === true
                        ? accent
                        : matched === false
                        ? mutedColor
                        : subColor,
                    border: matched === true ? `1px solid ${accent}55` : '1px solid transparent',
                    fontFamily: "'WenQuanYi Zen Hei', sans-serif",
                    fontWeight: matched === true ? 600 : 400,
                    textDecoration: matched === false ? 'line-through' : 'none',
                  }}
                >
                  {val}
                </span>
              ))}

              {/* Match score dots */}
              {total > 0 && (
                <div className="ml-auto flex items-center gap-[3px]">
                  {Array.from({ length: total }).map((_, i) => (
                    <div
                      key={i}
                      className="w-[5px] h-[5px] rounded-full"
                      style={{ backgroundColor: i < score ? accent : accent + '28' }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
