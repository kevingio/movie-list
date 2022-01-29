import React, { memo, forwardRef } from 'react';
import { string } from 'prop-types';

import { FlexLayout } from '@components/Grid';
import { TextField, labelCss } from './styles';

const TextFieldComp = forwardRef((props, ref) => {
  const { label, ...sanitizedProps } = props;

  return (
    <>
      {label ? (
        <FlexLayout justify="space-between" margin="0 0 3px 0">
          <label className={labelCss}>{label}</label>
        </FlexLayout>
      ) : null}
      <TextField
        ref={ref}
        type="text"
        autoComplete="off"
        {...sanitizedProps}
      />
    </>
  );
});

TextFieldComp.displayName = "TextFieldComp";

TextFieldComp.propTypes = {
  label: string,
};

TextFieldComp.defaultProps = {
  label: null,
};

export default memo(TextFieldComp);