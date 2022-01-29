import styled from "@emotion/styled";
import { N0, N5, N10, N30, R50, R70, fullBlack } from "@utils/colors";

const backgroundMap = (props) => {
  if (props.disabled) {
    return `
      background: ${N5};
      color: ${N30};
      border: 1px solid ${N5};
      cursor: not-allowed;

      &:active {
        background: ${N10};
        border: 1px solid ${N10};
      };
    `;
  }

  if (props.primary) {
    return `
      background: ${R50};
      color: ${N0};
      border: 1px solid ${R50};

      &:active {
        background: ${R70};
        border: 1px solid ${R70};
      };
  `;
  }

  return `
    background: ${R50};
    color: ${N0};
    border: 1px solid ${R50};

    &:active {
      background: ${R70};
      border: 1px solid ${R70};
    };
  `;
};

const outlineMap = (props) => {
  if (props.outline) {
    if (props.disabled) {
      return `
      border: 1px solid ${N5};
    `;
    }

    if (props.primary) {
      return `
      color: ${R50};
      border: 1px solid ${R50};
    `;
    }

    if (props.outline) {
      return `
      color: ${props?.color || fullBlack};
      border: 1px solid ${props?.borderColor || fullBlack};
    `
    }
  }

  return '';
};

export const Button = styled('button')(
  props => `
  height: ${props.dense ? '49px' : '59px'};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props.padding || (props.dense ? '10px' : '20px')};
  border-radius: 12px;
  font-size: 14px;
  line-height: 20px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  margin: ${props.margin || '8px 0'};
  width: ${props.width || (props.block ? '100%' : 'auto')};
  overflow: ${props.overflow || 'initial'};
  ${backgroundMap(props)}
  ${outlineMap(props)}
  ${props.outline ? 'background: transparent;' : ''}
`,
);