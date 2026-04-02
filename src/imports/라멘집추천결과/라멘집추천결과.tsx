import svgPaths from "./svg-wv9unjsuhj";
import imgRamenShop1 from "./4b1b3df6ddeb303a02b62e4d2fdb42cbb62e811b.png";
import imgRamenShop2 from "./7f37f82f2957d3f4addde411d2cc4e49bdf3b1b7.png";
import imgRamenShop3 from "./44aa400a6c279dd86b4877505247ff7bce0ee8b5.png";
import imgUserProfile from "./8657d9adb456c008d3a341dd265eb0376af8a044.png";

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffb5a0] text-[11px] tracking-[1.1px] uppercase w-full">
        <p className="leading-[16.5px]">Curated Selection</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdbce] text-[36px] tracking-[-1.8px] w-full">
        <p className="leading-[36px] mb-0">당신을 위한</p>
        <p className="leading-[36px]">탐색 결과</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] pt-[8px] relative shrink-0 w-[320px]" data-name="Container">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#e4beb4] text-[14px] w-[313.61px]">
        <p className="leading-[20px] mb-0">울산의 숨겨진 장인들이 빚어낸 깊고 진한 육수의 세</p>
        <p className="leading-[20px]">계를 확인해보세요.</p>
      </div>
    </div>
  );
}

function HeroHeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Hero Header Section">
      <Container />
      <Heading1 />
      <Container1 />
    </div>
  );
}

function RamenShop() {
  return (
    <div className="h-[256.5px] relative shrink-0 w-full" data-name="Ramen shop 1">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[133.33%] left-0 max-w-none top-[-16.67%] w-full" src={imgRamenShop1} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.2)] inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <RamenShop />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p21398000} fill="var(--fill-0, #FFB5A0)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#ffb5a0] text-[14px] w-[21.08px]">
        <p className="leading-[20px]">4.8</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[30px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdbce] text-[24px] w-[96px]">
        <p className="leading-[30px]">나루라멘</p>
      </div>
      <Container6 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,87,34,0.2)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative">
        <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdbd1] text-[10px] tracking-[0.5px] w-[68.02px]">
          <p className="leading-[15px]">특제 유자 시오</p>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#3b251c] relative rounded-[2px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative">
        <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#e4beb4] text-[10px] tracking-[0.5px] w-[42px]">
          <p className="leading-[15px]">자가제면</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19px] items-start relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <Background />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[53.5px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[#e4beb4] text-[14px] top-[29.88px] w-[282.82px]">
        <p className="leading-[22.75px] mb-0">남구 달동 한적한 골목에서 만나는 일본 정통의</p>
        <p className="leading-[22.75px]">맛. 닭 육수와 해산물의 조화로운 블렌딩이 일…</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#ab8980] text-[10px] tracking-[-0.5px] uppercase w-[74.63px]">
        <p className="leading-[15px]">Location / Price</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold','Noto_Sans_KR:Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#ffdbce] text-[12px] w-[82.14px]">
        <p className="leading-[16px]">울산 남구 · ₩₩</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[82.14px]" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex gap-[3.21px] items-end justify-end leading-[0] pb-[2.5px] pt-[5.5px] relative shrink-0 text-right" data-name="Paragraph">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center relative shrink-0 text-[#ab8980] text-[10px] tracking-[-0.5px] uppercase w-[43.03px]">
        <p className="leading-[15px]">Distance</p>
      </div>
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[16px] justify-center relative shrink-0 text-[#ffdbce] text-[12px] w-[31.95px]">
        <p className="leading-[16px]">1.2km</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Paragraph />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative w-full">
        <Container4 />
        <Container11 />
      </div>
    </div>
  );
}

function ResultCard() {
  return (
    <div className="bg-[#2a170f] content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Result Card 1">
      <Container2 />
      <Container3 />
    </div>
  );
}

function RamenShop1() {
  return (
    <div className="h-[256.5px] relative shrink-0 w-full" data-name="Ramen shop 2">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[133.33%] left-0 max-w-none top-[-16.67%] w-full" src={imgRamenShop2} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.2)] inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <RamenShop1 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p21398000} fill="var(--fill-0, #FFB5A0)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#ffb5a0] text-[14px] w-[21.2px]">
        <p className="leading-[20px]">4.6</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[30px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdbce] text-[24px] w-[78.02px]">
        <p className="leading-[30px]">면옥 산</p>
      </div>
      <Container19 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,87,34,0.2)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative">
        <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdbd1] text-[10px] tracking-[0.5px] w-[76.02px]">
          <p className="leading-[15px]">고추기름의 풍미</p>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#3b251c] relative rounded-[2px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative">
        <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#e4beb4] text-[10px] tracking-[0.5px] w-[44.52px]">
          <p className="leading-[15px]">노포 감성</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19px] items-start relative shrink-0 w-full" data-name="Container">
      <Overlay1 />
      <Background1 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[53.5px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[#e4beb4] text-[14px] top-[29.88px] w-[282.82px]">
        <p className="leading-[22.75px] mb-0">중구 성남동에서 10년 넘게 자리를 지켜온 강렬</p>
        <p className="leading-[22.75px]">한 매운맛의 탄탄멘 전문점입니다.</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#ab8980] text-[10px] tracking-[-0.5px] uppercase w-[74.63px]">
        <p className="leading-[15px]">Location / Price</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold','Noto_Sans_KR:Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#ffdbce] text-[12px] w-[70.2px]">
        <p className="leading-[16px]">울산 중구 · ₩</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[74.63px]" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex gap-[3.2px] items-end justify-end leading-[0] pb-[2.5px] pt-[5.5px] relative shrink-0 text-right" data-name="Paragraph">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center relative shrink-0 text-[#ab8980] text-[10px] tracking-[-0.5px] uppercase w-[43.03px]">
        <p className="leading-[15px]">Distance</p>
      </div>
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[16px] justify-center relative shrink-0 text-[#ffdbce] text-[12px] w-[34.19px]">
        <p className="leading-[16px]">3.5km</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Paragraph1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative w-full">
        <Container17 />
        <Container24 />
      </div>
    </div>
  );
}

function ResultCard2AsymmetricLayoutExample() {
  return (
    <div className="bg-[#2a170f] content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Result Card 2 (Asymmetric Layout Example)">
      <Container15 />
      <Container16 />
    </div>
  );
}

function RamenShop2() {
  return (
    <div className="h-[256.5px] relative shrink-0 w-full" data-name="Ramen shop 3">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[133.33%] left-0 max-w-none top-[-16.67%] w-full" src={imgRamenShop3} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.2)] inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <RamenShop2 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p21398000} fill="var(--fill-0, #FFB5A0)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#ffb5a0] text-[14px] w-[21.2px]">
        <p className="leading-[20px]">4.9</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[30px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdbce] text-[24px] w-[72px]">
        <p className="leading-[30px]">청월당</p>
      </div>
      <Container32 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(255,87,34,0.2)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative">
        <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdbd1] text-[10px] tracking-[0.5px] w-[65.52px]">
          <p className="leading-[15px]">자가제면 면발</p>
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#3b251c] relative rounded-[2px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative">
        <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#e4beb4] text-[10px] tracking-[0.5px] w-[42px]">
          <p className="leading-[15px]">프리미엄</p>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19px] items-start relative shrink-0 w-full" data-name="Container">
      <Overlay2 />
      <Background2 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[53.5px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[#e4beb4] text-[14px] top-[29.88px] w-[289.17px]">
        <p className="leading-[22.75px] mb-0">북구 송정동의 떠오르는 신성. 매일 아침 직접 뽑</p>
        <p className="leading-[22.75px]">는 면발의 쫄깃함이 남다른 곳입니다.</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#ab8980] text-[10px] tracking-[-0.5px] uppercase w-[74.63px]">
        <p className="leading-[15px]">Location / Price</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold','Noto_Sans_KR:Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#ffdbce] text-[12px] w-[94.09px]">
        <p className="leading-[16px]">울산 북구 · ₩₩₩</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[94.09px]" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex gap-[3.2px] items-end justify-end leading-[0] pb-[2.5px] pt-[5.5px] relative shrink-0 text-right" data-name="Paragraph">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center relative shrink-0 text-[#ab8980] text-[10px] tracking-[-0.5px] uppercase w-[43.03px]">
        <p className="leading-[15px]">Distance</p>
      </div>
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[16px] justify-center relative shrink-0 text-[#ffdbce] text-[12px] w-[31.16px]">
        <p className="leading-[16px]">8.1km</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Paragraph2 />
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative w-full">
        <Container30 />
        <Container37 />
      </div>
    </div>
  );
}

function ResultCard1() {
  return (
    <div className="bg-[#2a170f] content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Result Card 3">
      <Container28 />
      <Container29 />
    </div>
  );
}

function RamenResultsGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Ramen Results Grid">
      <ResultCard />
      <ResultCard2AsymmetricLayoutExample />
      <ResultCard1 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[4.317px] relative shrink-0 w-[7px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4.31667">
        <g id="Container">
          <path d={svgPaths.p1a9c9340} fill="var(--fill-0, #FFB5A0)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#3b251c] content-stretch flex gap-[8px] items-center pb-[14px] pt-[12px] px-[32px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#ff5722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb5a0] text-[14px] text-center tracking-[1.4px] w-[155.41px]">
        <p className="leading-[20px]">더 많은 탐색 결과 보기</p>
      </div>
      <Container41 />
    </div>
  );
}

function PaginationOrLoadMore() {
  return (
    <div className="content-stretch flex items-start justify-center pt-[8px] relative shrink-0 w-full" data-name="Pagination or Load More">
      <Button />
    </div>
  );
}

function Main() {
  return (
    <div className="max-w-[896px] relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[inherit] pb-[112px] pt-[95px] px-[24px] relative w-full">
        <HeroHeaderSection />
        <RamenResultsGrid />
        <PaginationOrLoadMore />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p176f0bb4} fill="var(--fill-0, #541200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ff5722] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[56px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-[56px] top-0" data-name="Button:shadow" />
      <Container42 />
    </div>
  );
}

function MapViewFloatingFabContextualForResults() {
  return (
    <div className="absolute bottom-[96px] content-stretch flex flex-col items-start right-[24px]" data-name="Map View floating FAB (Contextual for results)">
      <Button1 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g id="Container">
          <path d={svgPaths.p2bce57c0} fill="var(--fill-0, #FF5722)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#ff5722] text-[24px] tracking-[-0.6px] uppercase w-[70.2px]">
        <p className="leading-[32px]">면탐정</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container44 />
      <Heading />
    </div>
  );
}

function UserProfile() {
  return (
    <div className="max-w-[32px] relative shrink-0 size-[30px]" data-name="User profile">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[-3.33%] max-w-none size-[106.67%] top-[-3.33%]" src={imgUserProfile} />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <UserProfile />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(91,64,57,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute bg-[#210f07] content-stretch flex h-[64px] items-center justify-between left-0 px-[24px] top-0 w-[390px]" data-name="Header - TopAppBar">
      <Container43 />
      <Border />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[22px] relative shrink-0 w-[16px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 22">
        <g id="Margin">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, #AB8980)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[9.004px] relative shrink-0 w-[8.506px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.50586 9.00391">
        <g id="Container">
          <path d={svgPaths.p2e85b700} fill="var(--fill-0, #AB8980)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[24px] py-[4px] relative">
        <Margin />
        <Container46 />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[22px] relative shrink-0 w-[18px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Margin">
          <path d={svgPaths.p3030ba00} fill="var(--fill-0, #210F07)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#210f07] text-[10px] w-[20px]">
        <p className="leading-[15px]">지도</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#ff5722] relative rounded-[8px] shadow-[0px_0px_15px_0px_rgba(255,87,34,0.3)] shrink-0" data-name="Background+Shadow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[24px] py-[4px] relative">
        <Margin1 />
        <Container47 />
      </div>
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(59,37,28,0.7)] bottom-0 content-stretch flex gap-[90.98px] h-[80px] items-center left-0 pl-[77.48px] pr-[77.5px] pt-px w-[390px]" data-name="BottomNavBar">
      <div aria-hidden="true" className="absolute border-[rgba(91,64,57,0.15)] border-solid border-t inset-0 pointer-events-none shadow-[0px_-10px_30px_0px_rgba(27,9,4,0.4)]" />
      <Container45 />
      <BackgroundShadow />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#210f07] content-stretch flex flex-col items-start relative size-full" data-name="라멘집 추천 결과">
      <Main />
      <MapViewFloatingFabContextualForResults />
      <HeaderTopAppBar />
      <BottomNavBar />
    </div>
  );
}