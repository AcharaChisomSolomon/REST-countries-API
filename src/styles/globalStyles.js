import { css } from '@emotion/react'

export const globalStyles = css`
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


    /*  */
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
  }

  /*
    10. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }
`
