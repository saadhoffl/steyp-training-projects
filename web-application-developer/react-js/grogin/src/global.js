import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-inter: Inter;
--font-barlow: Barlow;

/* font sizes */
--font-size-xs: 12px;
--font-size-3xs: 10px;
--font-size-sm: 14px;
--font-size-smi: 13px;
--font-size-xl: 20px;
--font-size-base: 16px;
--font-size-2xs: 11px;
--font-size-base-1: 16.1px;
--font-size-3xl: 22px;
--font-size-lg: 18px;
--font-size-11xl: 30px;
--font-size-5xl: 24px;
--font-size-mini: 15px;
--font-size-2xl-9: 21.9px;
--font-size-19xl: 38px;
--font-size-4xl: 23px;

/* Colors */
--color-white: #fff;
--color-whitesmoke: #f3f4f6;
--color-lightgray-100: #d1d5db;
--color-lightgray-200: #cccfd1;
--color-gray-100: #212529;
--color-gray-200: #222;
--color-gray-300: #111827;
--color-gray-400: #020617;
--color-gray-500: #030712;
--color-gray-600: rgba(255, 255, 255, 0);
--color-gray-700: rgba(255, 255, 255, 0.7);
--color-gray-800: rgba(3, 7, 18, 0.7);
--color-gray-900: rgba(0, 0, 0, 0.1);
--color-gray-1000: rgba(17, 24, 39, 0.6);
--color-darkslateblue-100: #634c9f;
--color-darkslateblue-200: rgba(99, 76, 159, 0.1);
--color-slategray: #6b7280;
--color-dimgray-100: #636363;
--color-dimgray-200: #555;
--color-dimgray-300: #4b5563;
--color-darkgray: #9ca3af;
--color-gainsboro-100: #e5e7eb;
--color-gainsboro-200: #e6e6e6;
--color-forestgreen: #16a34a;
--color-crimson: #dc2626;
--color-gold: #facc15;
--color-lavenderblush: #fef2f2;
--color-seagreen: #166534;
--color-papayawhip: #ffedd5;
--color-saddlebrown: #7c2d12;
--color-yellowgreen: #81d742;
--color-black: #000;
--color-orangered: #ea580c;
--color-floralwhite: #fff7ed;
--color-navajowhite: #fed7aa;
--color-chocolate: #c2410c;

/* Gaps */
--gap-11xl: 30px;
--gap-mini: 15px;
--gap-34xl-8: 53.8px;
--gap-8xl: 27px;
--gap-xl: 20px;
--gap-5xs-3: 7.3px;
--gap-2xl-1: 21.1px;
--gap-3xs: 10px;
--gap-68xl-5: 87.5px;
--gap-25xl: 44px;
--gap-3xl: 22px;
--gap-31xl: 50px;
--gap-9xs: 4px;
--gap-lgi-8: 19.8px;
--gap-lgi: 19px;
--gap-xl-8: 20.8px;
--gap-8xs-5: 4.5px;
--gap-11xs-5: 1.5px;
--gap-10xs-5: 2.5px;
--gap-xs: 12px;
--gap-8xs: 5px;
--gap-4xs: 9px;
--gap-10xl: 29px;
--gap-26xl: 45px;
--gap-2xl: 21px;
--gap-125xl-5: 144.5px;
--gap-mini-3: 14.3px;
--gap-base: 16px;
--gap-6xs-5: 6.5px;
--gap-4xs-9: 8.9px;
--gap-5xs: 8px;
--gap-sm-3: 13.3px;
--gap-base-1: 15.1px;
--gap-7xs: 6px;
--gap-6xs-1: 6.1px;
--gap-sm-5: 13.5px;
--gap-6xs-2: 6.2px;
--gap-6xs-4: 6.4px;
--gap-95xl-5: 114.5px;
--gap-91xl-5: 110.5px;
--gap-6xs-3: 6.3px;
--gap-126xl-5: 145.5px;
--gap-70xl: 89px;
--gap-3xs-6: 9.6px;
--gap-3xs-2: 9.2px;
--gap-3xs-8: 9.8px;
--gap-7xs-7: 5.7px;
--gap-6xl: 25px;
--gap-23xl: 42px;
--gap-sm: 14px;
--gap-8xs-6: 4.6px;
--gap-665xl-6: 684.6px;
--gap-67xl: 86px;
--gap-152xl: 171px;
--gap-323xl: 342px;
--gap-6xl-1: 25.1px;
--gap-4xs-5: 8.5px;
--gap-5xl-6: 24.6px;
--gap-5xl-2: 24.2px;
--gap-mid: 17px;
--gap-12xl: 31px;
--gap-175xl-2: 194.2px;
--gap-78xl: 97px;
--gap-5xl: 24px;
--gap-30xl: 49px;
--gap-sm-6: 13.6px;
--gap-10xs: 3px;
--gap-sm-7: 13.7px;
--gap-35xl: 54px;
--gap-149xl-7: 168.7px;
--gap-5xs-9: 7.9px;
--gap-4xs-8: 8.8px;
--gap-10xl-6: 29.6px;
--gap-21xl: 40px;
--gap-base-6: 15.6px;
--gap-7xl-1: 26.1px;
--gap-2xs: 11px;
--gap-mid-9: 17.9px;
--gap-base-9: 15.9px;
--gap-9xs-8: 3.8px;
--gap-7xl-9: 26.9px;
--gap-sm-8: 13.8px;
--gap-10xs-6: 2.6px;
--gap-6xs: 7px;
--gap-8xs-7: 4.7px;
--gap-4xl-9: 23.9px;
--gap-175xl-1: 194.1px;

/* Paddings */
--padding-31xl: 50px;
--padding-xl: 20px;
--padding-13xl: 32px;
--padding-140xl: 159px;
--padding-84xl: 103px;
--padding-30xl: 49px;
--padding-33xl-9: 52.9px;
--padding-12xs: 1px;
--padding-lg: 18px;
--padding-29xl-5: 48.5px;
--padding-9xs-4: 3.4px;
--padding-26xl: 45px;
--padding-2xs: 11px;
--padding-11xs: 2px;
--padding-9xs: 4px;
--padding-6xs-2: 6.2px;
--padding-mini: 15px;
--padding-smi: 13px;
--padding-base: 16px;
--padding-mid: 17px;
--padding-333xl-2: 352.2px;
--padding-130xl: 149px;
--padding-78xl: 97px;
--padding-210xl: 229px;
--padding-sm: 14px;
--padding-5xs: 8px;
--padding-7xs: 6px;
--padding-18xl: 37px;
--padding-8xs: 5px;
--padding-12xl: 31px;
--padding-10xs-9: 2.9px;
--padding-14xl-9: 33.9px;
--padding-3xl: 22px;
--padding-113xl-5: 132.5px;
--padding-7xs-5: 5.5px;
--padding-7xs-1: 5.1px;
--padding-21xl: 40px;
--padding-8xs-6: 4.6px;
--padding-2xl: 21px;
--padding-13xl-9: 32.9px;
--padding-5xl: 24px;
--padding-15xl: 34px;
--padding-9xs-1: 3.1px;
--padding-8xs-2: 4.2px;
--padding-114xl-5: 133.5px;
--padding-3xs: 10px;
--padding-6xs: 7px;
--padding-17xl-9: 36.9px;
--padding-11xl: 30px;
--padding-7xs-7: 5.7px;
--padding-11xs-5: 1.5px;
--padding-6xs-5: 6.5px;
--padding-xs: 12px;
--padding-5xs-5: 7.5px;
--padding-4xs: 9px;
--padding-10xs: 3px;
--padding-smi-5: 12.5px;
--padding-10xs-5: 2.5px;
--padding-8xl: 27px;
--padding-4xl: 23px;
--padding-11xs-8: 1.8px;
--padding-8xs-5: 4.5px;
--padding-5xs-8: 7.8px;
--padding-11xs-6: 1.6px;
--padding-9xs-5: 3.5px;
--padding-547xl: 566px;
--padding-220xl: 239px;
--padding-349xl: 368px;
--padding-4xs-2: 8.2px;
--padding-6xs-3: 6.3px;
--padding-20xl-9: 39.9px;
--padding-xs-1: 11.1px;
--padding-137xl-7: 156.7px;
--padding-7xs-6: 5.6px;
--padding-7xl: 26px;
--padding-5xs-6: 7.6px;
--padding-83xl: 102px;
--padding-24xl: 43px;
--padding-47xl: 66px;
--padding-6xs-8: 6.8px;
--padding-mini-4: 14.4px;
--padding-22xl: 41px;
--padding-14xl: 33px;
--padding-sm-5: 13.5px;
--padding-8xs-4: 4.4px;
--padding-6xs-4: 6.4px;
--padding-11xs-7: 1.7px;
--padding-12xs-5: 0.5px;
--padding-260xl: 279px;
--padding-261xl: 280px;
--padding-51xl: 70px;
--padding-50xl: 69px;
--padding-121xl: 140px;
--padding-120xl: 139px;
--padding-7xs-8: 5.8px;
--padding-9xs-6: 3.6px;

/* Border radiuses */
--br-7xs: 6px;
--br-5xs: 8px;
--br-base: 16px;
--br-11xl: 30px;
--br-10xs: 3px;
--br-sm: 14px;
--br-21xl: 40px;
--br-980xl: 999px;
--br-9xs: 4px;
--br-3xs: 10px;
--br-6xs: 7px;
--br-4xs-5: 8.5px;
--br-lgi-5: 19.5px;

}
`;