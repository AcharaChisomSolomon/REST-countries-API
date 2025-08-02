import { css } from '@emotion/react'

export const globalStyles = css`
  /* nunito-sans-200 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 200;
    src: url('/fonts/nunito-sans-v18-latin-200.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* nunito-sans-regular - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/nunito-sans-v18-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* nunito-sans-700 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/nunito-sans-v18-latin-700.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* nunito-sans-900 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 900;
    src: url('/fonts/nunito-sans-v18-latin-900.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }

  :root {
    /* COLORS */
    --c-white: hsl(0, 100%, 100%);
    --c-black: hsl(0, 0%, 0%);

    --c-grey-950: hsl(200, 15%, 8%);
    --c-grey-400: hsl(0, 0%, 50%);
    --c-grey-350: hsl(0, 0%, 59%);
    --c-grey-300: hsl(0, 0%, 70%);
    --c-grey-250: hsl(0, 0%, 77%);
    --c-grey-50: hsl(0, 0%, 99%);

    --c-blue-950: hsl(207, 26%, 17%);
    --c-blue-900: hsl(209, 23%, 22%);


    /* SPACING */
    --spacing-100: calc(8 / 16 * 1rem);
    --spacing-200: calc(16 / 16 * 1rem);
    --spacing-300: calc(24 / 16 * 1rem);
    --spacing-400: calc(32 / 16 * 1rem);
    --spacing-500: calc(40 / 16 * 1rem);
    --spacing-600: calc(48 / 16 * 1rem);
    --spacing-700: calc(56 / 16 * 1rem);
    --spacing-800: calc(64 / 16 * 1rem);
    --spacing-900: calc(72 / 16 * 1rem);
    --spacing-1000: calc(80 / 16 * 1rem);


    /* FONT SIZES */
    --fs-1: calc(32 / 16 * 1rem);
    --fs-2: calc(24 / 16 * 1rem);
    --fs-3: calc(18 / 16 * 1rem);
    --fs-4: calc(16 / 16 * 1rem);
    --fs-5: calc(14 / 16 * 1rem);


    /* FONT HEIGHTS */
    --fh-137: 137.5%;
    --fh-150: 150%;
    --fh-200: 200%;
    --fh-225: 225%;


    /* FONT WEIGHTS */
    --fw-extraBold: 900;
    --fw-semiBold: 700;
    --fw-regular: 400;
    --fw-light: 200;


    /* LIGHT MODE (default) */
    --bg-color: var(--c-grey-50);
    --header-bg-color: var(--c-white);
    --text-color: var(--c-grey-950);
    --card-bg-color: var(--c-white);
    --input-bg-color: var(--c-white);
    --shadow-color: hsl(0, 0%, 0%, 0.05);
  }

  /* DARK MODE */
  [data-theme="dark"] {
    --bg-color: var(--c-blue-950);
    --header-bg-color: var(--c-blue-900);
    --text-color: var(--c-white);
    --card-bg-color: var(--c-blue-900);
    --input-bg-color: var(--c-blue-900);
    --shadow-color: hsl(0, 0%, 0%, 0.3);
  }

  /* 1. Use a more-intuitive box-sizing model */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* 2. Remove default margin */
  * {
    margin: 0;
  }

  /* 3. Enable keyword animations */
  @media (prefers-reduced-motion: no-preference) {
    html {
      interpolate-size: allow-keywords;
    }
  }

  body {
    /* 4. Add accessible line-height */
    line-height: 1.5;
    /* 5. Improve text rendering */
    -webkit-font-smoothing: antialiased;

    font-family: 'Nunito Sans', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: var(--fw-regular);
    line-height: var(--fh-150);
    
    /* Apply theme colors */
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* 6. Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* 7. Inherit fonts for form controls */
  input, button, textarea, select {
    font: inherit;
  }

  /* 8. Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* 9. Improve line wrapping */
  p {
    text-wrap: pretty;
  }
  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
    font-weight: var(--fw-extraBold);
  }

  /*
    10. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }

  h1 {
    font-size: var(--fs-2);
    line-height: var(--fh-137);
    /* box-shadow: 
      0 2px 4px var(--shadow-color),
      0 8px 16px var(--shadow-color); */
  }
  h2 {
    font-size: var(--fs-1);
    line-height: var(--fh-137);
  }
  h3 {
    font-size: var(--fs-3);
    line-height: var(--fh-150);
  }
`
