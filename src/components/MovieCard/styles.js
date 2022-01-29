import { css } from '@emotion/css';
import styled from '@emotion/styled';

import { txtEllipsis } from '@utils/styles';

export const CardWrapper = styled('div')(props => `
  padding: 8px;
	border: 1px solid #F7F7F7;
	box-sizing: border-box;
	box-shadow: 0px 1px 12px rgba(39, 96, 117, 0.07);
	border-radius: 8px;
	width: ${props.width || '100%'};
	margin: 0 8px;
	cursor: pointer;
`);

export const movieTitle = css`
	font-size: 16px;
	line-height: 20px;
	font-weight: 700;
	margin: 0 0 4px 0;
	${txtEllipsis(2)};
`;

export const movieSubtitle = css`
	font-size: 12px;
	line-height: 16px;
	line-spacing: 0.2;
	color: #2f3640;
	margin: 0;
`;

export const movieImage = css`
	width: 100%;
	height: 220px;
	object-fit: cover;
	border-radius: 6px;
	margin-bottom: 4px;
`;