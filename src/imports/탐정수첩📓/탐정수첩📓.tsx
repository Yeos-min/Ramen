import svgPaths from "./svg-2k5p8fjeqy";
import imgRamenBowl from "./10e8596bf94cb0e55bdf2cc012009e43255159ba.png";

function Container1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p300a1100} fill="var(--fill-0, #FF5722)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb5a0] text-[36px] tracking-[-0.9px] w-[174.61px]">
        <p className="leading-[40px]">탐정수첩 📓</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#ab8980] text-[14px] w-[103.61px]">
        <p className="leading-[20px]">나만의 수사 일지</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[174.61px]" data-name="Container">
      <Heading />
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="bg-[#210f07] relative shrink-0 w-full" data-name="Header - TopAppBar">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end pb-[24px] pt-[48px] px-[24px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p3c95900} fill="var(--fill-0, #FFB5A0)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ffdbce] text-[16px] w-full">
        <p className="leading-[24px]">2024.03.15</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Container6 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#1b0904] relative rounded-[4px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(91,64,57,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[17px] relative w-full">
          <Container5 />
          <Input />
        </div>
      </div>
    </div>
  );
}

function DateInput() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Date Input">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[#ffb5a0] text-[12px] tracking-[1.2px] uppercase w-[57px]">
        <p className="leading-[16px]">방문 날짜</p>
      </div>
      <BackgroundBorder />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3422ebe0} fill="var(--fill-0, #FFB5A0)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(171,137,128,0.4)] w-full">
        <p className="leading-[normal]">메뉴를 입력하세요</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-px relative rounded-[inherit] w-full">
        <Container8 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#1b0904] relative rounded-[4px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(91,64,57,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[17px] relative w-full">
          <Container7 />
          <Input1 />
        </div>
      </div>
    </div>
  );
}

function MenuInput() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Menu Input">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[#ffb5a0] text-[12px] tracking-[1.2px] uppercase w-[70.2px]">
        <p className="leading-[16px]">주문한 메뉴</p>
      </div>
      <BackgroundBorder1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(171,137,128,0.4)] w-full">
        <p className="leading-[24px]">오늘의 솔직한 한 마디...</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="relative shrink-0 w-full" data-name="Textarea">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center overflow-clip pb-[48px] relative rounded-[inherit] w-full">
        <Container9 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#1b0904] relative rounded-[4px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(91,64,57,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative w-full">
        <Textarea />
      </div>
    </div>
  );
}

function MemoInput() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Memo Input">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[#ffb5a0] text-[12px] tracking-[1.2px] uppercase w-[61.2px]">
        <p className="leading-[16px]">한 줄 메모</p>
      </div>
      <BackgroundBorder2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[19.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 16">
        <g id="Container">
          <path d={svgPaths.p29002e00} fill="var(--fill-0, #541200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function SubmitButton() {
  return (
    <div className="bg-[#ff5722] content-stretch flex gap-[8px] items-center justify-center py-[20px] relative rounded-[4px] shrink-0 w-full" data-name="Submit Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(255,87,34,0.2),0px_4px_6px_-4px_rgba(255,87,34,0.2)]" data-name="Submit Button:shadow" />
      <Container10 />
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#541200] text-[16px] text-center w-[136px]">
        <p className="leading-[24px]">수사 기록 저장하기</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <DateInput />
        <MenuInput />
        <MemoInput />
        <SubmitButton />
      </div>
    </div>
  );
}

function InputFormSectionTheCaseFile() {
  return (
    <div className="bg-[#2a170f] relative rounded-[8px] shrink-0 w-full" data-name="Input Form Section (The Case File)">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[28px] pr-[24px] py-[24px] relative w-full">
          <div className="absolute h-[80px] right-[18px] top-[28px] w-[90px]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 80">
              <path d={svgPaths.p2b159580} fill="var(--fill-0, #FFDBCE)" id="Icon" opacity="0.05" />
            </svg>
          </div>
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ff5722] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdbce] text-[24px] w-[180.02px]">
        <p className="leading-[32px]">과거의 수사 기록</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f0be74] text-[12px] w-[48px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[16px] underline">전체보기</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between px-[4px] relative w-full">
          <Heading1 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between leading-[0] relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center relative shrink-0 text-[#ab8980] text-[12px] w-[58.2px]">
          <p className="leading-[16px]">2024.03.10</p>
        </div>
        <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center not-italic relative shrink-0 text-[#ffb5a0] text-[10px] tracking-[-0.5px] uppercase w-[69.52px]">
          <p className="leading-[15px]">이전 기록과 비교</p>
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdbce] text-[18px] w-full">
        <p className="leading-[28px]">매운 돈코츠 라멘 특식</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[45.5px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[#e4beb4] text-[14px] top-[21.88px] w-[294.01px]">
        <p className="leading-[22.75px] mb-0">염도가 완벽했고 차슈의 두께가 이전보다 두꺼워</p>
        <p className="leading-[22.75px]">진 느낌. 마늘 후레이크 추가가 신의 한 수였음.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Heading2 />
        <Container15 />
      </div>
    </div>
  );
}

function RecordCard() {
  return (
    <div className="bg-[#3b251c] col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Record Card 1">
      <div aria-hidden="true" className="absolute border-[rgba(91,64,57,0.1)] border-b border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[21px] pt-[20px] px-[20px] relative w-full">
        <Paragraph />
        <Container14 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between leading-[0] relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center relative shrink-0 text-[#ab8980] text-[12px] w-[61.8px]">
          <p className="leading-[16px]">2024.03.02</p>
        </div>
        <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center not-italic relative shrink-0 text-[#ffb5a0] text-[10px] tracking-[-0.5px] uppercase w-[69.52px]">
          <p className="leading-[15px]">이전 기록과 비교</p>
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdbce] text-[18px] w-full">
        <p className="leading-[28px]">토리 파이탄 라멘</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[45.5px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[#e4beb4] text-[14px] top-[21.88px] w-[286.37px]">
        <p className="leading-[22.75px] mb-0">국물이 매우 진함. 닭 육수의 고소함이 일품이나</p>
        <p className="leading-[22.75px]">면발의 익힘 정도가 조금 아쉬웠음.</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Heading3 />
        <Container17 />
      </div>
    </div>
  );
}

function RecordCard1() {
  return (
    <div className="bg-[#3b251c] col-1 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Record Card 2">
      <div aria-hidden="true" className="absolute border-[rgba(91,64,57,0.1)] border-b border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[21px] pt-[20px] px-[20px] relative w-full">
        <Paragraph1 />
        <Container16 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between leading-[0] relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center relative shrink-0 text-[#ab8980] text-[12px] w-[61.52px]">
          <p className="leading-[16px]">2024.02.24</p>
        </div>
        <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[15px] justify-center not-italic relative shrink-0 text-[#ffb5a0] text-[10px] tracking-[-0.5px] uppercase w-[69.52px]">
          <p className="leading-[15px]">이전 기록과 비교</p>
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdbce] text-[18px] w-full">
        <p className="leading-[28px]">마제소바 세트</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[45.5px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[#e4beb4] text-[14px] top-[21.88px] w-[285.62px]">
        <p className="leading-[22.75px] mb-0">다시마 식초를 두 바퀴 돌렸을 때 감칠맛이 폭발</p>
        <p className="leading-[22.75px]">함. 남은 양념에 밥 비벼먹는 것 필수.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Heading4 />
        <Container19 />
      </div>
    </div>
  );
}

function RecordCard2() {
  return (
    <div className="bg-[#3b251c] col-1 justify-self-stretch relative rounded-[8px] row-3 self-start shrink-0" data-name="Record Card 3">
      <div aria-hidden="true" className="absolute border-[rgba(91,64,57,0.1)] border-b border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[21px] pt-[20px] px-[20px] relative w-full">
        <Paragraph2 />
        <Container18 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[_342px] grid-rows-[___150.50px_150.50px_150.50px] relative shrink-0 w-full" data-name="Container">
      <RecordCard />
      <RecordCard1 />
      <RecordCard2 />
    </div>
  );
}

function PreviousRecordsSectionTheArchives() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Previous Records Section (The Archives)">
      <Container11 />
      <Container13 />
    </div>
  );
}

function RamenBowl() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px opacity-40 relative w-full" data-name="ramen bowl">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[178.12%] left-0 max-w-none top-[-39.06%] w-full" src={imgRamenBowl} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#ffdbd1] text-[12px] tracking-[2.4px] uppercase w-[211.81px]">
        <p className="leading-[16px]">Authentic Investigation</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[rgba(33,15,7,0)] inset-0 items-end p-[24px] to-[rgba(33,15,7,0.8)]" data-name="Background">
      <Container20 />
    </div>
  );
}

function AtmosphericVisualElement() {
  return (
    <div className="content-stretch flex flex-col h-[192px] items-start justify-center overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Atmospheric Visual Element">
      <RamenBowl />
      <Background />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[24px] relative w-full">
        <InputFormSectionTheCaseFile />
        <PreviousRecordsSectionTheArchives />
        <AtmosphericVisualElement />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, #FFB5A0)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb5a0] text-[11px] tracking-[0.55px] uppercase w-[11.56px]">
        <p className="leading-[16.5px]">홈</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="opacity-60 relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <Container21 />
        <Margin />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p1f25e00} fill="var(--fill-0, #FFB5A0)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['WenQuanYi_Zen_Hei:Medium',sans-serif] h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb5a0] text-[11px] tracking-[0.55px] uppercase w-[23.11px]">
        <p className="leading-[16.5px]">지도</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="opacity-60 relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <Container22 />
        <Margin1 />
      </div>
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(59,37,28,0.7)] bottom-0 content-stretch flex gap-[138.98px] items-center left-0 pb-[16px] pl-[101.48px] pr-[101.5px] pt-[17px] w-[390px]" data-name="BottomNavBar">
      <div aria-hidden="true" className="absolute border-[rgba(91,64,57,0.15)] border-solid border-t inset-0 pointer-events-none shadow-[0px_-20px_40px_0px_rgba(27,9,4,0.4)]" />
      <Link />
      <Link1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#210f07] content-stretch flex flex-col gap-[32px] items-start pb-[126.5px] relative size-full" data-name="탐정수첩 📓">
      <HeaderTopAppBar />
      <Main />
      <BottomNavBar />
    </div>
  );
}