import { css } from '@emotion/css';
import { mainBackground } from './utils/colors';
import { injectGlobal } from '@emotion/css'

injectGlobal`
  body {
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
  }
`;

export const container = css`
  background: #dcdde1;
`;

export const mobileContainer = css`
  width: 100%;
  max-width: 500px;
  display: block;
  margin: auto;
  min-height: 100vh;
  background: #f5f6fa;
`;