import { css } from '@emotion/css';
import { css as dynamicCss } from '@emotion/react';
import styled from '@emotion/styled';

import { B5, N10, N30, N5, baseBlack } from '@utils/colors';

const disabledInput = (props) => {
  if (props.disabled) {
    return `
      background: ${N10};
      cursor: not-allowed;
    `;
  }

  return ``;
};

export const textFieldCss = (props) => dynamicCss`
  background: ${N5};
  border: 1px solid ${N5};
  font-size: 14px;
  line-height: 24px;
  color: ${B5};
  box-sizing: border-box;
  border-radius: 12px;
  width: 100%;
  font-family: inherit;
  resize: none;

  padding: ${props.padding || '15px 16px'};
  margin-bottom: ${props.marginBottom || '16px'};
  min-width: ${props.minWidth || 'initial'};

  &:focus {
    border: 1px solid ${N30};
    outline: none !important;
  }

  ${disabledInput(props)};
`;

export const TextField = styled.input`
  ${textFieldCss};
`;

export const labelCss = css`
  color: ${baseBlack};
  font-size: 14px;
  line-height: 24px;
  display: block;
  margin-bottom: 3px;
`;