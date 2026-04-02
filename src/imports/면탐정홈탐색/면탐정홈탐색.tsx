import svgPaths from "./svg-7tdxcimiy7";
import imgPremiumTonkotsuRamen from "./fff2941ddd49d9cc589866b19040537927e0a0e3.png";
import imgClassicShoyuRamen from "./6279d0dc2f3c0f340ffb7bf24cea9dc8df3c5f73.png";
import imgSpicyMisoRamen from "./3db91d2c94ec71ff609c0010546542c15be687a7.png";

function Container() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p1820480} fill="var(--fill-0, #210F07)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] relative shrink-0 text-[#210f07] text-[11px] tracking-[1.1px] uppercase w-[36.42px]">
        <p className="leading-[16.5px]">Home</p>
      </div>
    </div>
  );
}

function LinkActiveHome() {
  return (
    <div className="bg-[#ff5722] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[8px] shrink-0" data-name="Link - Active Home">
      <Container />
      <Margin />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p1f25e00} fill="var(--fill-0, #FFB5A0)" fillOpacity="0.5" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,181,160,0.5)] tracking-[1.1px] uppercase w-[27.11px]">
        <p className="leading-[16.5px]">Map</p>
      </div>
    </div>
  );
}

function LinkInactiveMap() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative shrink-0" data-name="Link - Inactive Map">
      <Container1 />
      <Margin1 />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(59,37,28,0.7)] bottom-[414px] content-stretch flex gap-[99.24px] items-center left-0 pb-[24px] pl-[65.61px] pr-[65.62px] pt-[12px] rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_-10px_30px_0px_rgba(27,9,4,0.5)] w-[390px] z-[5]" data-name="BottomNavBar">
      <LinkActiveHome />
      <LinkInactiveMap />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb5a0] text-[24px] tracking-[-1.2px] w-[88.81px]">
        <p className="leading-[32px]">면탐정 🕵️</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #FF5722)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p3de21300} fill="var(--fill-0, #FF5722)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[15.99px] h-[20px] items-start relative shrink-0" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container3 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[80px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdbce] text-[36px] tracking-[-0.9px] w-[332.11px]">
        <p className="leading-[40px] mb-0">오늘의 라멘을 추적하</p>
        <p className="leading-[40px]">세요</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#e4beb4] text-[14px] w-[319.22px]">
        <p className="leading-[20px]">The Noir Sommelier: Curating the deepest broths.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[332.11px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="bg-[#210f07] mb-[-1px] relative shrink-0 w-full z-[4]" data-name="Header - TopAppBar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-[32px] relative w-full">
          <Margin2 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e4beb4] text-[11px] tracking-[1.1px] uppercase w-full">
        <p className="leading-[16.5px]">육수 종류 (Broth)</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ff5722] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shadow-[0px_4px_12px_0px_rgba(255,87,34,0.3)] shrink-0" data-name="Button">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#541200] text-[14px] text-center w-[42px]">
        <p className="leading-[20px]">돼지뼈</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[28.441px] relative shrink-0 w-[44.018px]" data-name="Button">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.0176 28.4414">
        <g id="Button">
          <rect fill="var(--fill-0, #472F26)" height="28.4414" rx="6" width="44.0176" />
          <path d={svgPaths.p117d9c80} fill="var(--fill-0, #E4BEB4)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#472f26] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#e4beb4] text-[14px] text-center w-[28px]">
        <p className="leading-[20px]">해물</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#472f26] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#e4beb4] text-[14px] text-center w-[28px]">
        <p className="leading-[20px]">혼합</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Broth() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Broth">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e4beb4] text-[11px] tracking-[1.1px] uppercase w-full">
        <p className="leading-[16.5px]">면 삶기 (Noodle)</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#472f26] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#e4beb4] text-[14px] text-center w-[28px]">
        <p className="leading-[20px]">꼬들</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#ff5722] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shadow-[0px_4px_12px_0px_rgba(255,87,34,0.3)] shrink-0" data-name="Button">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#541200] text-[14px] text-center w-[28px]">
        <p className="leading-[20px]">보통</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#472f26] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#e4beb4] text-[14px] text-center w-[28px]">
        <p className="leading-[20px]">퍼짐</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Noodle() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Noodle">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e4beb4] text-[11px] tracking-[1.1px] uppercase w-full">
        <p className="leading-[16.5px]">국물 진함 (Richness)</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#ff5722] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shadow-[0px_4px_12px_0px_rgba(255,87,34,0.3)] shrink-0" data-name="Button">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#541200] text-[14px] text-center w-[28px]">
        <p className="leading-[20px]">진함</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#472f26] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#e4beb4] text-[14px] text-center w-[28px]">
        <p className="leading-[20px]">보통</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#472f26] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#e4beb4] text-[14px] text-center w-[28px]">
        <p className="leading-[20px]">맑음</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function Richness() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Richness">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e4beb4] text-[11px] tracking-[1.1px] uppercase w-full">
        <p className="leading-[16.5px]">매운맛 (Spice)</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#472f26] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#e4beb4] text-[14px] text-center w-[28px]">
        <p className="leading-[20px]">없음</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#ff5722] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shadow-[0px_4px_12px_0px_rgba(255,87,34,0.3)] shrink-0" data-name="Button">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#541200] text-[14px] text-center w-[28px]">
        <p className="leading-[20px]">약간</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#472f26] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#e4beb4] text-[14px] text-center w-[28px]">
        <p className="leading-[20px]">보통</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[28.496px] relative shrink-0 w-[44.605px]" data-name="Button">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.6055 28.4961">
        <g id="Button">
          <rect fill="var(--fill-0, #472F26)" height="28.4961" rx="6" width="44.6055" />
          <path d={svgPaths.p211b2000} fill="var(--fill-0, #E4BEB4)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function Spice() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Spice">
      <Container15 />
      <Container16 />
    </div>
  );
}

function FilterSection() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0 w-full" data-name="Filter Section">
      <Broth />
      <Noodle />
      <Richness />
      <Spice />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden="true" className="absolute border-[#ff5722] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[20px] relative w-full">
        <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdbce] text-[24px] tracking-[-0.6px] w-[198.02px]">
          <p className="leading-[32px]">오늘의 추천 수사망</p>
        </div>
      </div>
    </div>
  );
}

function PremiumTonkotsuRamen() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Premium Tonkotsu Ramen">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[133.59%] left-0 max-w-none top-[-16.8%] w-full" src={imgPremiumTonkotsuRamen} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.2)] inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(147,0,10,0.8)] content-stretch flex flex-col items-start px-[8px] py-[4px] right-[16px] rounded-[2px] top-[16px]" data-name="Overlay+OverlayBlur">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdad6] text-[10px] tracking-[-0.5px] uppercase w-[49.02px]">
        <p className="leading-[15px]">웨이팅 있음</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col h-[256px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <PremiumTonkotsuRamen />
      <div className="absolute bg-gradient-to-t from-[#2a170f] inset-0 to-[rgba(42,23,15,0)] via-1/2 via-[rgba(42,23,15,0)]" data-name="Gradient" />
      <OverlayOverlayBlur />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdbce] text-[24px] w-full">
        <p className="leading-[32px]">이치란 본점 스타일</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e4beb4] text-[14px] w-full">
        <p className="leading-[20px]">{`"48시간 우려낸 진한 돈코츠의 정석"`}</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#472f26] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(91,64,57,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col h-full items-start px-[9px] py-[3px] relative">
        <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb5a0] text-[10px] tracking-[1px] uppercase w-[33px]">
          <p className="leading-[15px]">돼지뼈</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#472f26] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(91,64,57,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col h-full items-start px-[9px] py-[3px] relative">
        <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb5a0] text-[10px] tracking-[1px] uppercase w-[33px]">
          <p className="leading-[15px]">보통면</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#472f26] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(91,64,57,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col h-full items-start px-[9px] py-[3px] relative">
        <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb5a0] text-[10px] tracking-[1px] uppercase w-[33px]">
          <p className="leading-[15px]">매콤함</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[8px] h-[45px] items-start py-[12px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[9.64px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[59px] justify-center leading-[0] not-italic relative shrink-0 text-[#541200] text-[12px] w-[207.66px]">
        <p className="leading-[19.5px] mb-0">비법 고추 기름 소스가 만드는 감칠맛의</p>
        <p className="leading-[19.5px] mb-0">정점. 마지막 한 방울까지 풍미가 살아있</p>
        <p className="leading-[19.5px]">습니다.</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute bg-[#ff5722] inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
        <div className="flex flex-col font-['FreeSans:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#541200] text-[16px] w-[12.7px]">
          <p className="leading-[24px]">✦</p>
        </div>
        <Container21 />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function OverlayOverlayBlur1() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(42,23,15,0.9)] content-stretch flex flex-col gap-[4px] items-start left-[16px] p-[24px] right-[16px] rounded-[8px] top-[-48px]" data-name="Overlay+OverlayBlur">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Heading2 />
      <Container19 />
      <Container20 />
      <BackgroundShadow />
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[191.5px] relative shrink-0 w-full" data-name="Margin">
      <OverlayOverlayBlur1 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#2a170f] col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] row-1 self-start shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0" data-name="Card 1">
      <Container18 />
      <Margin3 />
    </div>
  );
}

function ClassicShoyuRamen() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Classic Shoyu Ramen">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[133.59%] left-0 max-w-none top-[-16.8%] w-full" src={imgClassicShoyuRamen} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.2)] inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function OverlayOverlayBlur2() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(71,47,38,0.8)] content-stretch flex flex-col items-start px-[8px] py-[4px] right-[16px] rounded-[2px] top-[16px]" data-name="Overlay+OverlayBlur">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#f0be74] text-[10px] tracking-[-0.5px] uppercase w-[39.52px]">
        <p className="leading-[15px]">입장 가능</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col h-[256px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <ClassicShoyuRamen />
      <div className="absolute bg-gradient-to-t from-[#2a170f] inset-0 to-[rgba(42,23,15,0)] via-1/2 via-[rgba(42,23,15,0)]" data-name="Gradient" />
      <OverlayOverlayBlur2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdbce] text-[24px] w-full">
        <p className="leading-[32px]">멘야 쇼유도</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e4beb4] text-[14px] w-full">
        <p className="leading-[20px]">{`"깔끔하게 떨어지는 닭육수의 깊은 조화"`}</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#472f26] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(91,64,57,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col h-full items-start px-[9px] py-[3px] relative">
        <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb5a0] text-[10px] tracking-[1px] uppercase w-[33px]">
          <p className="leading-[15px]">닭육수</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#472f26] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(91,64,57,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col h-full items-start px-[9px] py-[3px] relative">
        <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb5a0] text-[10px] tracking-[1px] uppercase w-[33px]">
          <p className="leading-[15px]">얇은면</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#472f26] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(91,64,57,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col h-full items-start px-[9px] py-[3px] relative">
        <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb5a0] text-[10px] tracking-[1px] uppercase w-[33px]">
          <p className="leading-[15px]">담백함</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[8px] h-[45px] items-start py-[12px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder3 />
      <BackgroundBorder4 />
      <BackgroundBorder5 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[1.28px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[59px] justify-center leading-[0] not-italic relative shrink-0 text-[#541200] text-[12px] w-[216.02px]">
        <p className="leading-[19.5px] mb-0">숙성 간장의 풍미가 닭의 단맛과 어우러져</p>
        <p className="leading-[19.5px] mb-0">최상의 밸런스를 자랑하는 쇼유 라멘입니</p>
        <p className="leading-[19.5px]">다.</p>
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute bg-[#ff5722] inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
        <div className="flex flex-col font-['FreeSans:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#541200] text-[16px] w-[12.7px]">
          <p className="leading-[24px]">✦</p>
        </div>
        <Container25 />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function OverlayOverlayBlur3() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(42,23,15,0.9)] content-stretch flex flex-col gap-[4px] items-start left-[16px] p-[24px] right-[16px] rounded-[8px] top-[-48px]" data-name="Overlay+OverlayBlur">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Heading3 />
      <Container23 />
      <Container24 />
      <BackgroundShadow1 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="h-[191.5px] relative shrink-0 w-full" data-name="Margin">
      <OverlayOverlayBlur3 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#2a170f] col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] row-2 self-start shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0" data-name="Card 2">
      <Container22 />
      <Margin4 />
    </div>
  );
}

function SpicyMisoRamen() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Spicy Miso Ramen">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[106.87%] left-0 max-w-none top-[-3.44%] w-full" src={imgSpicyMisoRamen} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.1)] inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function OverlayOverlayBlur4() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(147,0,10,0.8)] content-stretch flex flex-col items-start px-[8px] py-[4px] right-[16px] rounded-[2px] top-[16px]" data-name="Overlay+OverlayBlur">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdad6] text-[10px] tracking-[-0.5px] uppercase w-[49.02px]">
        <p className="leading-[15px]">웨이팅 있음</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col h-[320px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <SpicyMisoRamen />
      <div className="absolute bg-gradient-to-t from-[#2a170f] inset-0 to-[rgba(42,23,15,0)] via-1/2 via-[rgba(42,23,15,0)]" data-name="Gradient" />
      <OverlayOverlayBlur4 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[6.21px] relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[72px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdbce] text-[30px] w-[127.52px]">
        <p className="leading-[36px] mb-0">미소야 카</p>
        <p className="leading-[36px]">라멘</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="h-[39px] relative shrink-0 w-[94.27px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ff5722] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[33px] justify-center leading-[0] left-0 text-[#ff5722] text-[11px] top-[15.75px] tracking-[2.2px] uppercase w-[93.04px]">
        <p className="leading-[16.5px] mb-0">{`Detective's`}</p>
        <p className="leading-[16.5px]">Pick</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Heading4 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e4beb4] text-[18px] w-full">
          <p className="leading-[28px] mb-0">{`"입안을 감도는 묵직한 타격`}</p>
          <p className="leading-[28px]">{`감, 매운 미소의 진수"`}</p>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#472f26] bottom-[52px] content-stretch flex flex-col items-start left-0 px-[12px] py-[4px] rounded-[6px] top-[16px]" data-name="Background">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb5a0] text-[12px] tracking-[1.2px] uppercase w-[52.81px]">
        <p className="leading-[16px]">혼합육수</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#472f26] bottom-[52px] content-stretch flex flex-col items-start left-[88.81px] px-[12px] py-[4px] rounded-[6px] top-[16px]" data-name="Background">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb5a0] text-[12px] tracking-[1.2px] uppercase w-[39.61px]">
        <p className="leading-[16px]">굵은면</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#472f26] bottom-[16px] content-stretch flex flex-col items-start left-0 px-[12px] py-[4px] rounded-[6px] top-[52px]" data-name="Background">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb5a0] text-[12px] tracking-[1.2px] uppercase w-[39.61px]">
        <p className="leading-[16px]">강렬함</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Background />
        <Background1 />
        <Background2 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.pf3c0b00} fill="var(--fill-0, #FF5722)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#541200] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Background">
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[5.59px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[70px] justify-center leading-[0] not-italic relative shrink-0 text-[#541200] text-[14px] w-[134.41px]">
        <p className="leading-[17.5px] mb-0">✦ 3단계 조절 가능한</p>
        <p className="leading-[17.5px] mb-0">특제 매운맛 소스와 고</p>
        <p className="leading-[17.5px] mb-0">소한 미소가 만난 중독</p>
        <p className="leading-[17.5px]">성 강한 시그니처.</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#ff5722] relative rounded-[6px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[6px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Background4 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(42,23,15,0.95)] content-stretch flex flex-col gap-[8px] items-start left-[24px] p-[33px] right-[24px] rounded-[8px] top-[-64px]" data-name="Background+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(91,64,57,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
      <Container27 />
      <Container28 />
      <Container29 />
      <Background3 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="h-[372px] relative shrink-0 w-full" data-name="Margin">
      <BackgroundBorderOverlayBlur />
    </div>
  );
}

function Card3FeaturedLarge() {
  return (
    <div className="bg-[#2a170f] col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] row-3 self-start shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0" data-name="Card 3 (Featured/Large)">
      <Container26 />
      <Margin5 />
    </div>
  );
}

function Container17() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___447.50px_447.50px_692px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card3FeaturedLarge />
    </div>
  );
}

function SectionRecommendedShops() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Section - Recommended Shops">
      <Heading1 />
      <Container17 />
    </div>
  );
}

function Main() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full z-[1]" data-name="Main">
      <div className="content-stretch flex flex-col gap-[40px] items-start pb-[128px] px-[24px] relative w-full">
        <FilterSection />
        <SectionRecommendedShops />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#210f07] content-stretch flex flex-col isolate items-start pb-px relative size-full" data-name="면탐정 홈 탐색">
      <BottomNavBar />
      <HeaderTopAppBar />
      <div className="absolute bg-[rgba(240,190,116,0.05)] blur-[60px] bottom-[574px] left-[-80px] rounded-[12px] size-[320px] z-[3]" data-name="Overlay+Blur" />
      <div className="absolute bg-[rgba(255,87,34,0.05)] blur-[50px] right-[-80px] rounded-[12px] size-[256px] top-[80px] z-[2]" data-name="Aesthetic Floating Elements" />
      <Main />
    </div>
  );
}