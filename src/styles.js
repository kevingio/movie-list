import { css } from '@emotion/css';
import { injectGlobal } from '@emotion/css';

import { N2, N5 } from '@utils/colors';

injectGlobal`
  body {
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
  }
`;

export const container = css`
  background: ${N5};
  overflow-x: auto;
`;

export const mobileContainer = css`
  width: 100%;
  min-width: 320px;
  max-width: 500px;
  display: block;
  margin: auto;
  min-height: 100vh;
  background: ${N2};
`;