import { css } from '@emotion/css';

export const textFieldContainerCss = css`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
`;

export const searchIconCss = css`
  position: absolute;
  height: 1.5rem;
  width: 1.5rem;
  top: 50%;

  transform: translate(-50%, -50%);
  left: 2rem;
  content: "";
  background-image: url('https://thethinker.design/assets/magnifier-icon-grey.svg');
  background-size: contain;

  cursor: pointer;
`;

export const closeIconCss = css`
  position: absolute;
  height: 1.5rem;
  width: 1.5rem;
  top: 50%;

  transform: translate(-50%, -50%);
  right: 0rem;
  content: "";
  background-image: url('https://thethinker.design/assets/close-icon-thin.svg');
  background-size: contain;

  cursor: pointer;
`;
