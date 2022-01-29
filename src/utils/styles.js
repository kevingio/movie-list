import { css } from "@emotion/css";

export const txtEllipsis = (line) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  word-break: break-word;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
`;