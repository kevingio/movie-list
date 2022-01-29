import styled from '@emotion/styled'
import { N30, N50, baseBlack } from '@utils/colors';

const fontStyle = (style) => style ? `font-style: ${style};` : '';

const elipsisProps = (props) => {
  if (!props?.elipsis) return;

  return `
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box !important;
    -webkit-line-clamp: 1;
    -webkit-line-clamp: ${props.elipsis};
    -webkit-box-orient: vertical;
  `;
};

export const StyledDisplay = styled('h1')(
    props => `
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  color: ${props.color || N50};
  margin: ${props.margin || '0px 0px 10px 0'};
  cursor: ${props.link ? 'pointer' : 'inherit'};
  white-space: ${props.whiteSpace || 'normal'};
  ${fontStyle(props.fontStyle)};
  ${elipsisProps(props)};
`,
);

export const StyledH1 = styled('h1')(
    props => `
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: ${props.color || N50};
  margin: ${props.margin || '0px 0px 10px 0'};
  cursor: ${props.link ? 'pointer' : 'inherit'};
  white-space: ${props.whiteSpace || 'normal'};
  display: ${props.display || 'block'};
  ${fontStyle(props.fontStyle)};
  ${elipsisProps(props)};
`,
);

export const StyledH2 = styled('h2')(
    props => `
  font-weight: 700;
  font-size: ${props.fontSize || '18px'};
  line-height: 24px;
  color: ${props.color || N50};
  margin: ${props.margin || '0px 0px 10px 0'};
  cursor: ${props.link ? 'pointer' : 'inherit'};
  white-space: ${props.whiteSpace || 'normal'};
  ${fontStyle(props.fontStyle)};
  ${elipsisProps(props)};
`,
);

export const StyledH3 = styled("h3")(
    props => `
  font-weight: bold;
  font-size: ${props.fontSize || '16px'};
  line-height: 20px;
  color: ${props.color || N50};
  margin: ${props.margin || '0px 0px 10px 0'};
  cursor: ${props.link ? 'pointer' : 'inherit'};
  white-space: ${props.whiteSpace || 'normal'};
  ${fontStyle(props.fontStyle)};
  ${elipsisProps(props)};
`,
);

export const StyledH4 = styled('h4')(
    props => `
  font-weight: bold;
  font-size: ${props.fontSize || '14px'};
  line-height: 20px;
  color: ${props.color || N50};
  margin: ${props.margin || '0px 0px 10px 0'};
  cursor: ${props.link ? 'pointer' : 'initial'};
  white-space: ${props.whiteSpace || 'normal'};
  display: ${props.display || 'block'};
  ${fontStyle(props.fontStyle)};
  ${elipsisProps(props)};
`,
);

// font-size: 12px
export const StyledCaption = styled('p')(
    props => `
  font-size: 12px;
  line-height: 18px;
  color: ${props.color || N30};
  margin: ${props.margin || '0px 0px 10px 0'};
  cursor: ${props.link ? 'pointer' : 'inherit'};
  display: ${props.display || 'block'};
  padding: ${props.padding || 'inherit'};
  float: ${props.float || 'none'};
  cursor: ${props.link ? 'pointer' : 'inherit'};
  white-space: ${props.whiteSpace || 'normal'};
  ${fontStyle(props.fontStyle)};
  ${elipsisProps(props)};
`,
);

export const StyledBody = styled('p')(props => `
  line-height: 24px;
  font-size: ${props.fontSize || '14px'};
  color: ${props.color || baseBlack};
  margin: ${props.margin || '0px 0px 10px 0'};
  cursor: ${props.link ? 'pointer' : 'inherit'};
  white-space: ${props.whiteSpace || 'normal'};
  display: ${props.display || 'initial'};
  text-decoration: ${props.textDecoration || 'auto'};
  margin: ${props.margin || '0px 0px 10px 0'};
  ${fontStyle(props.fontStyle)};
  ${elipsisProps(props)};
`);
