import { css } from '@emotion/css';

import { txtEllipsis } from '@utils/styles';

export const cardWrapper = css`
  padding: 8px;
	border: 1px solid #F7F7F7;
	box-sizing: border-box;
	box-shadow: 0px 1px 12px rgba(39, 96, 117, 0.07);
	border-radius: 8px;
	width: 180px;
	margin: 0 8px;
`;

export const movieTitle = css`
	font-size: 14px;
	line-height: 18px;
	font-weight: 700px;
	margin: 0 0 4px 0;
	line-spacing: 0.2;
	${txtEllipsis(2)};
`;

export const movieSubtitle = css`
	font-size: 12px;
	line-height: 16px;
	line-spacing: 0.2;
	color: #2f3640;
	margin: 0;
`;