import svgPaths from "./svg-75jmfqg2lc";
import clsx from "clsx";
import imgRectangle from "figma:asset/37e611b83d936e958e200f236b2aa206d4e32848.png";
import imgRectangle1 from "figma:asset/9082e066801a258752c3f97bf7aca5041c73acb5.png";
import imgRectangle2 from "figma:asset/af13e78a2231639b6fc0d9433de5610f43bb50cc.png";
import imgRectangle3 from "figma:asset/8b0e08eb29541f76084164e39951741d2dc802f8.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[10px] overflow-clip size-[98px] top-[10px]">
      <div className="absolute left-[10px] size-[98px] top-[10px]" data-name="Rectangle">
        {children}
      </div>
    </div>
  );
}

function ImageImage1() {
  return (
    <Wrapper>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle3} />
    </Wrapper>
  );
}

function ImageImage() {
  return (
    <Wrapper>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle2} />
    </Wrapper>
  );
}
type LinkBackgroundColorTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LinkBackgroundColorText({ text, additionalClassNames = "" }: LinkBackgroundColorTextProps) {
  return (
    <div className={clsx("absolute bg-[#020f3d] h-[45px] left-[10px] rounded-[47px] w-[231px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[15px] left-[115.5px] not-italic text-[14.12px] text-center text-white top-[15px] translate-x-[-50%] w-[161px]">{text}</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[16px] left-[2px] top-0 w-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
        <g clipPath="url(#clip0_6009_527)" id="Frame">
          <path d={svgPaths.pe0e7000} fill="var(--fill-0, #3E5ECC)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_6009_527">
            <rect fill="white" height="16" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[14.222px] left-0 top-[0.89px] w-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
        <g clipPath="url(#clip0_6009_533)" id="Frame">
          <path d={svgPaths.p3694a80} fill="var(--fill-0, #3E5ECC)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_6009_533">
            <rect fill="white" height="14.2222" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-0 size-[16px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6009_536)" id="Frame">
          <path d={svgPaths.p24e22b70} fill="var(--fill-0, #3E5ECC)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_6009_536">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents font-['Inter:Regular',sans-serif] font-normal left-[30px] not-italic top-[3730px]">
      <p className="absolute h-[24.5px] leading-[24px] left-[30px] text-[#1e73be] text-[12.649px] top-[3888px] w-[526.178px]">Mentions léga les Politique de confidentialité CGU</p>
      <p className="absolute h-[56px] leading-[28px] left-[30px] text-[16.242px] text-white top-[3840px] w-[511.356px]">Adresse : 4 Avenue de la Libération 60160 Montataire</p>
      <p className="absolute h-[28px] leading-[28px] left-[30px] text-[15.83px] text-white top-[3818px] w-[300.885px]">Téléphone: 03 65 67 08 59</p>
      <p className="absolute h-[16px] leading-[16px] left-[30px] text-[15.968px] text-[rgba(255,255,255,0.5)] top-[3804px] uppercase w-[511.356px]">Contact</p>
      <p className="absolute h-[57.594px] leading-[28px] left-[30px] text-[16.348px] text-white top-[3746px] w-[541px]">Développez vos compétences, transformez votre avenir.</p>
      <p className="absolute h-[16px] leading-[16px] left-[30px] text-[16.629px] text-[rgba(255,255,255,0.5)] top-[3730px] uppercase w-[541px]">Les Programmes Trinity</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[3723px]">
      <div className="absolute bg-[#3c36a4] h-[195px] left-0 top-[3723px] w-[1440px]" />
      <Group />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute h-[33px] left-[841px] top-[51px] w-[183px]">
      <div className="absolute bg-[rgba(60,54,164,0)] inset-[90.91%_0_0_0]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-0">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[0_6.48%_10.13%_7.87%] leading-[109.069px] not-italic text-[19.35px] text-black">Qui sommes nous ?</p>
      <div className="absolute bg-[rgba(60,54,164,0)] inset-[96.2%_0_0_0]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute h-[79px] left-[1031px] top-[-12px] w-[216px]">
      <Group2 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute left-[1247px] size-[110px] top-[-12px]" data-name="Component 23">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[0_17.27%_0_12.73%] leading-[109.069px] not-italic text-[19.35px] text-black text-nowrap">Contact</p>
      <div className="absolute bg-[rgba(60,54,164,0)] inset-[69.09%_0_28.18%_0]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute h-[58px] left-[735px] top-[14px] w-[107px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[0_14.95%_0_18.69%] leading-[57.57px] not-italic text-[19.35px] text-black text-nowrap">Accueil</p>
      <div className="absolute bg-[rgba(60,54,164,0)] inset-[86.21%_0_8.62%_0]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[70px] left-[27px] top-[29px] w-[83px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 70">
        <g id="Frame 213">
          <rect fill="white" height="70" width="83" />
          <path clipRule="evenodd" d={svgPaths.p1bab900} fill="var(--fill-0, #3564F8)" fillRule="evenodd" id="7845379 (Traced)" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute h-[33px] left-[846px] top-[32px] w-[183px]">
      <div className="absolute bg-[rgba(60,54,164,0)] inset-[90.91%_0_0_0]" />
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[0_8.2%_33.33%_8.74%] justify-center leading-[0] not-italic text-[19.35px] text-black text-nowrap">
        <p className="leading-[22px]">{`Tableau de bord `}</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute h-[35px] left-[1357px] top-[32px] w-[74px]">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[0_21.62%_37.14%_20.27%] justify-center leading-[0] not-italic text-[19.35px] text-black text-nowrap">
        <p className="leading-[22px]">Blog</p>
      </div>
      <div className="absolute bg-[rgba(60,54,164,0)] inset-[91.43%_0_0_0]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[550px] left-0 overflow-clip top-0 w-[1910px]" data-name="Frame">
      <div className="absolute h-[550px] left-0 top-0 w-[824.356px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle} />
      </div>
    </div>
  );
}

function PseudoBeforeBackgroundColor() {
  return <div className="absolute bg-[#e3f2fd] h-[550px] left-0 opacity-[0.68] top-0 w-[1910px]" data-name="Pseudo::before+BackgroundColor" />;
}

function Frame1() {
  return (
    <div className="absolute h-[15px] left-[0.94px] top-0 w-[13.125px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
        <g clipPath="url(#clip0_6009_524)" id="Frame">
          <path d={svgPaths.p3a3598f0} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_6009_524">
            <rect fill="white" height="15" width="13.125" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SpanSvg() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[15px] top-0" data-name="Span / SVG">
      <Frame1 />
    </div>
  );
}

function Span() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[15px] left-[35px] top-[15px] w-[198px]" data-name="Span">
      <SpanSvg />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[15px] left-[121.5px] not-italic text-[14.282px] text-center text-white top-0 translate-x-[-50%] w-[153px]">Vérifiez votre éligibilité</p>
    </div>
  );
}

function LinkBackgroundColor() {
  return (
    <div className="absolute bg-[#3e5ecc] h-[45px] left-0 rounded-[47px] top-0 w-[268px]" data-name="Link+BackgroundColor">
      <Span />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[15px] left-[2.81px] top-0 w-[9.375px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 15">
        <g clipPath="url(#clip0_6009_521)" id="Frame">
          <path d={svgPaths.p19611f30} fill="var(--fill-0, #3E5ECC)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_6009_521">
            <rect fill="white" height="15" width="9.375" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SpanSvg1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[15px] top-0" data-name="Span / SVG">
      <Frame2 />
    </div>
  );
}

function Span1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[15px] left-[35px] top-[15px] w-[521px]" data-name="Span">
      <SpanSvg1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[15px] left-[274.5px] not-italic text-[#3e5ecc] text-[14.354px] text-center top-0 translate-x-[-50%] w-[493px]">Prendre contact pour un financement public (OPCO, Région, CPF)</p>
    </div>
  );
}

function LinkBackgroundColor1() {
  return (
    <div className="absolute bg-white h-[45px] left-0 rounded-[47px] top-[58px] w-[591px]" data-name="Link+BackgroundColor">
      <Span1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[103px] left-0 top-[313.3px] w-[1140px]" data-name="Container">
      <LinkBackgroundColor />
      <LinkBackgroundColor1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[550px] left-[154px] top-0 w-[1140px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[30px] leading-[30px] left-0 not-italic text-[28.344px] text-black top-[203.8px] tracking-[0.6px] w-[220px]">Nos formations</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[24.5px] leading-[24px] left-0 not-italic text-[#1b1c33] text-[14.615px] top-[253.8px] w-[965px]">Programmes Trinity offre des formations spécialisées pour exceller dans le monde digital. Conçues par des experts, adaptées à vos besoins</p>
      <Container />
    </div>
  );
}

function ContainerBackgroundColorBackgroundImage() {
  return (
    <div className="absolute bg-[#e3f2fd] h-[550px] left-[-109px] top-[146px] w-[1910px]" data-name="Container+BackgroundColor+BackgroundImage">
      <Frame />
      <PseudoBeforeBackgroundColor />
      <Container1 />
    </div>
  );
}

function Image() {
  return (
    <Wrapper>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle1} />
    </Wrapper>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Bold',sans-serif] font-bold h-[63px] left-[207.8px] not-italic top-[27.4px] w-[922px]" data-name="Container">
      <p className="absolute h-[18px] leading-[18px] left-0 text-[#3e5ecc] text-[16.514px] top-0 w-[922px]">Formation en alternance</p>
      <p className="absolute h-[25px] leading-[25px] left-0 text-[#181818] text-[22.881px] top-[38px] w-[922px]">Formation en Cybersécurité</p>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[16px] top-px" data-name="SVG">
      <Frame3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[25px] left-0 top-[131.8px] w-[213px]" data-name="Container">
      <Svg />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[22px] not-italic text-[#181818] text-[17.646px] top-0 w-[34px]">1 an</p>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[16px] top-px" data-name="SVG">
      <Frame4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[25px] left-[232.8px] top-[131.8px] w-[851px]" data-name="Container">
      <Svg1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[21px] not-italic text-[#181818] text-[16.731px] top-0 w-[283px]">Hybride (en distanciel et présentiel)</p>
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[16px] top-px" data-name="SVG">
      <Frame5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[288px] left-[1104px] top-0 w-[16px]" data-name="Container">
      <Svg2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[288px] leading-[0] left-[6.1px] not-italic text-[#181818] text-[0px] text-[10px] text-black top-0 w-[10px]">
        <span className="leading-[21px]">R é g i o n p a r i s i e n</span>
        <span className="leading-[39px]">{` ne`}</span>
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[288px] left-[10px] top-[266.8px] w-[1120px]" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function ContainerBackgroundColor() {
  return (
    <div className="absolute bg-white h-[630px] left-0 rounded-[10px] top-[11px] w-[1140px]" data-name="Container+BackgroundColor">
      <Image />
      <Container2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[84px] leading-[28px] left-[10px] not-italic text-[14.943px] text-black top-[147.8px] w-[1120px]">Dans un monde de plus en plus connecté, la cybersécurité est devenue une priorité absolue. Nos vies numériques sont devenues le foyer de nos informations les plus précieuses, et il est essentiel de les protéger contre les menaces en constante évolution. Notre formation est idéale pour ceux qui aspirent à jouer un rôle crucial dans la protection des infrastructures numériques des entreprises.</p>
      <Container6 />
      <LinkBackgroundColorText text="Téléchargez la brochure" additionalClassNames="top-[574.8px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Bold',sans-serif] font-bold h-[63px] left-[207.8px] not-italic top-[27.4px] w-[922px]" data-name="Container">
      <p className="absolute h-[18px] leading-[18px] left-0 text-[#3e5ecc] text-[16.514px] top-0 w-[922px]">Formation en alternance</p>
      <p className="absolute h-[25px] leading-[25px] left-0 text-[#181818] text-[22.843px] top-[38px] w-[922px]">Designer Concepteur UI</p>
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[16px] top-px" data-name="SVG">
      <Frame3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[25px] left-0 top-[104.8px] w-[213px]" data-name="Container">
      <Svg3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[22px] not-italic text-[#181818] text-[17.646px] top-0 w-[34px]">1 an</p>
    </div>
  );
}

function Svg4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[16px] top-px" data-name="SVG">
      <Frame4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[25px] left-[232.8px] top-[104.8px] w-[851px]" data-name="Container">
      <Svg4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[21px] not-italic text-[#181818] text-[16.731px] top-0 w-[283px]">Hybride (en distanciel et présentiel)</p>
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[16px] top-px" data-name="SVG">
      <Frame5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[234px] left-[1104px] top-0 w-[16px]" data-name="Container">
      <Svg5 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[234px] leading-[21px] left-[6.3px] not-italic text-[#181818] text-[10px] top-0 w-[10px]">F r a n c e e n t i è r e</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[234px] left-[10px] top-[322.8px] w-[1120px]" data-name="Container">
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function ContainerBackgroundColor1() {
  return (
    <div className="absolute bg-white h-[632px] left-0 rounded-[10px] top-[661.8px] w-[1140px]" data-name="Container+BackgroundColor">
      <ImageImage />
      <Container7 />
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[140px] leading-[28px] left-[10px] not-italic text-[14.921px] text-black top-[147.8px] w-[1120px]">
        <p className="mb-0">À l’ère du tout digital, ce ne sont plus seulement les fonctionnalités qui séduisent, mais l’émotion que suscite une interface.</p>
        <p className="mb-0">Chaque écran est une opportunité de raconter une histoire, de créer une connexion, de transformer un simple clic en une expérience mémorable.</p>
        <p className="mb-0">Notre formation en conception UI s’adresse à celles et ceux qui veulent sublimer le lien entre l’humain et la technologie, en imaginant des parcours fluides, élégants et pensés dans les moindres détails.</p>
        <p>De l’idée à l’écran, vous apprendrez à donner vie à des designs qui parlent, qui guident, qui marquent.</p>
      </div>
      <Container11 />
      <LinkBackgroundColorText text="Téléchargez la brochure" additionalClassNames="top-[576.8px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Bold',sans-serif] font-bold h-[63px] left-[207.8px] not-italic top-[27.4px] w-[922px]" data-name="Container">
      <p className="absolute h-[18px] leading-[18px] left-0 text-[#3e5ecc] text-[16.514px] top-0 w-[922px]">Formation en alternance</p>
      <p className="absolute h-[25px] leading-[25px] left-0 text-[#181818] text-[23.001px] top-[38px] w-[922px]">Designer Concepteur UI dans le domaine du sport</p>
    </div>
  );
}

function Svg6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[16px] top-px" data-name="SVG">
      <Frame3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[25px] left-0 top-[77.8px] w-[213px]" data-name="Container">
      <Svg6 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[22px] not-italic text-[#181818] text-[17.646px] top-0 w-[34px]">1 an</p>
    </div>
  );
}

function Svg7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[16px] top-px" data-name="SVG">
      <Frame4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[25px] left-[232.8px] top-[77.8px] w-[851px]" data-name="Container">
      <Svg7 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[21px] not-italic text-[#181818] text-[16.733px] top-0 w-[103px]">En présentiel</p>
    </div>
  );
}

function Svg8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[16px] top-px" data-name="SVG">
      <Frame5 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[180px] left-[1104px] top-0 w-[16px]" data-name="Container">
      <Svg8 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[180px] leading-[0] left-[6.5px] not-italic text-[#181818] text-[0px] text-[10px] text-black top-0 w-[10px]">
        <span className="leading-[21px]">Îl e d e F r a n</span>
        <span className="leading-[39px]">{` ce`}</span>
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[180px] left-[10px] top-[378.8px] w-[1120px]" data-name="Container">
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function ContainerBackgroundColor2() {
  return (
    <div className="absolute bg-white h-[634px] left-0 rounded-[10px] top-[1313.6px] w-[1140px]" data-name="Container+BackgroundColor">
      <ImageImage />
      <Container12 />
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[196px] leading-[28px] left-[10px] not-italic text-[14.893px] text-black top-[147.8px] w-[1120px]">
        <p className="mb-0">Le sport se vit, se ressent… et aujourd’hui, il se conçoit.</p>
        <p className="mb-0">Dans un univers où la performance rime avec innovation, les interfaces digitales deviennent les nouveaux terrains de jeu des passionnés de design.</p>
        <p className="mb-0">Applications d’entraînement, plateformes de coaching, équipements connectés… Chaque pixel peut booster la motivation, chaque interaction peut influencer la progression d’un athlète.</p>
        <p className="mb-0">Notre formation en design UI, spécialisée dans l’univers du sport, vous prépare à imaginer des expériences numériques dynamiques, immersives et au service du mouvement.</p>
        <p>Rejoignez une génération de designers capables de faire vibrer les utilisateurs… même à travers un écran.</p>
      </div>
      <Container16 />
      <LinkBackgroundColorText text="Téléchargez la brochure" additionalClassNames="top-[578.8px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Bold',sans-serif] font-bold h-[63px] left-[207.8px] not-italic top-[27.4px] w-[922px]" data-name="Container">
      <p className="absolute h-[18px] leading-[18px] left-0 text-[#3e5ecc] text-[16.621px] top-0 w-[922px]">Formation professionnelle</p>
      <p className="absolute h-[25px] leading-[25px] left-0 text-[#181818] text-[23.089px] top-[38px] w-[922px]">{`Maîtrisez l'IA générative avec Trinity`}</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Regular',sans-serif] font-normal h-[211px] leading-[0] left-[10px] not-italic text-black top-[147.9px] w-[1120px]" data-name="Container">
      <div className="absolute h-[84px] leading-[28px] left-0 text-[14.928px] top-0 w-[1120px]">
        <p className="mb-0">L’imagination humaine a trouvé un nouvel allié : l’intelligence artificielle.</p>
        <p>Et plus précisément, l’IA générative. Cette technologie révolutionne notre manière de créer, d’innover et même de penser. De la génération de contenus textuels à la création d’images, de musiques ou de lignes de code, elle ouvre un champ des possibles sans précédent.</p>
      </div>
      <div className="absolute h-[112px] leading-[28px] left-0 text-[14.895px] top-[99px] w-[1120px]">
        <p className="mb-0">Notre formation professionnelle vous plonge au cœur de cette révolution.</p>
        <p className="mb-0">Conçue pour les esprits curieux et les bâtisseurs du futur, elle vous apprend à comprendre, maîtriser et exploiter les outils d’IA générative pour créer des solutions concrètes, intelligentes et éthiques.</p>
        <p>Ici, vous apprendrez à faire parler les machines… mais surtout à les faire créer avec vous.</p>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[16px] top-px" data-name="SVG">
      <Frame3 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[25px] left-0 top-0 w-[213px]" data-name="Container">
      <Svg9 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[22px] not-italic text-[#181818] text-[15.267px] top-0 w-[30px]">70h</p>
    </div>
  );
}

function Svg10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[16px] top-px" data-name="SVG">
      <Frame4 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[25px] left-[232.8px] top-0 w-[851px]" data-name="Container">
      <Svg10 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[21px] not-italic text-[#181818] text-[16.873px] top-0 w-[264px]">En entreprise ou dans nos locaux</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[25px] left-[10px] top-[393.9px] w-[1120px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function ContainerBackgroundColor3() {
  return (
    <div className="absolute bg-white h-[493px] left-0 rounded-[10px] top-[1967.4px] w-[1140px]" data-name="Container+BackgroundColor">
      <ImageImage1 />
      <Container17 />
      <Container18 />
      <Container21 />
      <LinkBackgroundColorText text="Téléchargez la brochure" additionalClassNames="top-[438.4px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Bold',sans-serif] font-bold h-[63px] left-[207.8px] not-italic top-[27.4px] w-[922px]" data-name="Container">
      <p className="absolute h-[18px] leading-[18px] left-0 text-[#3e5ecc] text-[16.523px] top-0 w-[922px]">Formation 100% en alternance</p>
      <p className="absolute h-[25px] leading-[25px] left-0 text-[#181818] text-[22.907px] top-[38px] w-[922px]">Employé polyvalent de restaurantion</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Regular',sans-serif] font-normal h-[254px] leading-[0] left-[10px] not-italic text-black top-[147.8px] w-[1120px]" data-name="Container">
      <div className="absolute h-[84px] leading-[28px] left-0 text-[14.87px] top-0 w-[1120px]">
        <p className="mb-0">La restauration, c’est bien plus qu’un service : c’est un art du quotidien.</p>
        <p>Et aujourd’hui, cet art se réinvente. Accueillir, servir, cuisiner, organiser… l’employé polyvalent de restauration est le cœur battant de chaque établissement, celui qui transforme une simple pause en vraie expérience.</p>
      </div>
      <div className="absolute h-[84px] leading-[28px] left-0 text-[14.928px] top-[99px] w-[1120px]">
        <p className="mb-0">Notre formation professionnelle vous plonge dans cet univers dynamique et exigeant.</p>
        <p>Pensée pour les passionnés de rythme, de relation humaine et de savoir-faire, elle vous forme à devenir un acteur essentiel de la chaîne de restauration. De la mise en place en salle à l’aide en cuisine, en passant par l’accueil client et l’hygiène, vous apprendrez à tout faire. Et à bien le faire.</p>
      </div>
      <div className="absolute h-[56px] leading-[28px] left-0 text-[14.921px] top-[198px] w-[1120px]">
        <p className="mb-0">Ici, vous ne serez pas qu’un exécutant. Vous deviendrez le couteau suisse de la restauration moderne. Toujours prêt, toujours pro.</p>
        <p>Parce qu’un bon service, c’est une chorégraphie – et vous serez au centre de la scène.</p>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[16px] top-px" data-name="SVG">
      <Frame3 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[25px] left-0 top-0 w-[213px]" data-name="Container">
      <Svg11 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[22px] not-italic text-[#181818] text-[17.84px] top-0 w-[64px]">12 mois</p>
    </div>
  );
}

function Svg12() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[16px] top-px" data-name="SVG">
      <Frame4 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[25px] left-[232.8px] top-0 w-[851px]" data-name="Container">
      <Svg12 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[21px] not-italic text-[#181818] text-[16.711px] top-0 w-[105px]">En entreprise</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[25px] left-[10px] top-[436.8px] w-[1120px]" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function ContainerBackgroundColor4() {
  return (
    <div className="absolute bg-white h-[536px] left-0 rounded-[10px] top-[2480.8px] w-[1140px]" data-name="Container+BackgroundColor">
      <ImageImage1 />
      <Container22 />
      <Container23 />
      <Container26 />
      <LinkBackgroundColorText text="Téléchargez la brochure" additionalClassNames="top-[481.3px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[3027px] left-[385px] top-0 w-[1140px]" data-name="Container">
      <ContainerBackgroundColor />
      <ContainerBackgroundColor1 />
      <ContainerBackgroundColor2 />
      <ContainerBackgroundColor3 />
      <ContainerBackgroundColor4 />
    </div>
  );
}

function ContainerBackgroundColor5() {
  return (
    <div className="absolute bg-[#020f3d] h-[3027px] left-[-235px] top-[696px] w-[1910px]" data-name="Container+BackgroundColor">
      <Container27 />
    </div>
  );
}

export default function DecouvrezNosFormation() {
  return (
    <div className="bg-white relative size-full" data-name="Découvrez nos formation">
      <Group1 />
      <Group3 />
      <Group4 />
      <Component />
      <Group5 />
      <Frame6 />
      <Group6 />
      <Group7 />
      <ContainerBackgroundColorBackgroundImage />
      <ContainerBackgroundColor5 />
    </div>
  );
}