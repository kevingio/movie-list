import { css } from '@emotion/css';
import styled from '@emotion/styled';

import { txtEllipsis } from '@utils/styles';
import { N50, G50, boxShadowMain } from '@utils/colors';

export const CardWrapper = styled('div')(props => `
  padding: 8px;
	box-sizing: border-box;
	box-shadow: ${boxShadowMain};
	border-radius: 8px;
	width: ${props.width || '100%'};
	margin: 0 8px;
	cursor: pointer;
	position: relative;
`);

export const movieTitle = css`
	font-size: 16px;
	line-height: 20px;
	font-weight: 700;
	margin: 0 0 4px 0;
	${txtEllipsis(2)};
`;

export const movieSubtitle = css`
	font-size: 14px;
	line-height: 18px;
	line-spacing: 0.2;
	color: ${N50};
	margin: 0;
`;

export const movieImage = css`
	width: 100%;
	height: 220px;
	object-fit: cover;
	border-radius: 6px;
	margin-bottom: 4px;
`;

export const chipMovieType = css`
	position: absolute;
	top: 20px;
	right: 20px;
	padding: 6px 10px;
	border-radius: 50px;
	font-size: 12px;
	font-weight: 700;
	text-transform: uppercase;
	background: ${G50};
`;