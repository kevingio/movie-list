import styled from '@emotion/styled';

export const FlexLayout = styled('div')(
    props => `
  display: ${props?.inline ? 'inline-flex' : 'flex'};
  align-items: ${props?.align || 'unset'};
  justify-content: ${props?.justify || 'unset'};
  flex-direction: ${props?.direction || 'row'};
  flex-wrap: ${props?.wrap || 'nowrap'};
  background: ${props?.background || 'transparent'};
  color: ${props?.color || 'inherit'};
  padding: ${props?.padding || '0'};
  margin: ${props?.margin || '0'};
  width: ${props?.width || 'auto'};
  max-width: ${props?.maxWidth || 'unset'};
  min-width: ${props?.minWidth || 'auto'};
  height: ${props?.height || 'auto'};
  max-height: ${props?.maxHeight || 'unset'};
  position: ${props?.position || 'initial'};
  border-radius: ${props?.borderRadius || 'unset'};
  text-align: ${props?.textAlign || 'left'};
  bottom: ${props?.bottom || 'unset'};
  left: ${props?.left || 'unset'};
  right: ${props?.right || 'unset'};
  top: ${props?.top || 'unset'};
  overflow: ${props?.overflow || 'unset'};
  overflow-x: ${(!props?.overflow && props?.overflowX) || 'unset'};
  flex: ${props?.flex || 'unset'};
  white-space: ${props?.whiteSpace || 'unset'};
  border: ${props?.border || 'unset'};
  cursor: ${props.onClick ? 'pointer' : 'inherit'};
`,
);

export const FlexColumn = styled('div')(
    props => `
  display: flex;
  ${props.textAlign ? `text-align: ${props.textAlign}` : ''};
  min-width: ${props?.minwidth || 'auto'};
  width: ${props.fullWidth ? '100%' : props?.width || 'auto'};
  height: ${props?.height || 'auto'};
  margin: ${props?.margin || '0'};
  padding: ${props?.padding || '0'};
  background: ${props?.background || 'transparent'};
  color: ${props?.color || 'inherit'};
  align-items: ${props?.align || 'unset'};
  justify-content: ${props?.justify || 'unset'};
  flex-direction: ${props?.direction || 'row'};
  flex-shrink: ${props?.shrink || '1'};
  cursor: ${props.onClick ? 'pointer' : 'inherit'};
  ${props.alignSelf ? `align-self: ${props.alignSelf}` : ''};
  position: ${props?.position || 'initial'};
  text-align: ${props?.textAlign || 'left'};
  bottom: ${props?.bottom || 'unset'};
  left: ${props?.left || 'unset'};
  right: ${props?.right || 'unset'};
  top: ${props?.top || 'unset'};
`,
);
