import { css } from "@emotion/css";
import { N0, R50 } from "@utils/colors";

export const wrapper = css`
	background: white;
	padding: 16px;
	display: flex;
`;

export const backButtonWrapper = css`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const backButton = css`
  margin-right: 10px;
  width: 30px;
  height: 30px;
  display: block;
  background-image: url('https://thethinker.design/assets/navbar/arrow-left.svg');
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

export const navbarTitle = css`
	font-weight: 700;
	font-size: 20px;
`;

export const chipMyList = css`
	background: ${R50};
	border-radius: 50px;
	padding: 8px 16px;
	color: ${N0};
	cursor: pointer;
`;