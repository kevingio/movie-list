import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import TextField from '@components/TextField';

import { closeIconCss, searchIconCss, textFieldContainerCss } from './styles';

const SearchInput = forwardRef((props, ref) => {
  const { onClear, onSubmit, ...sanitizedProps } = props;

  const handleKeyDown = e =>{
    if (e.key === 'Enter') {
      onSubmit();
    }
  }

  return (
    <span className={textFieldContainerCss}>
      <span className={searchIconCss} onClick={onSubmit} />
      <TextField
        search
        ref={ref}
        type="text"
        padding="11px 45px 11px 55px"
        marginBottom="0"
        onKeyDown={handleKeyDown}
        {...sanitizedProps}
      />
      {onClear && ref?.current?.value && <span className={closeIconCss} onClick={onClear} />}
    </span>
  );
});

SearchInput.displayName = "SearchInput";

SearchInput.propTypes = {
  onClear: PropTypes.func,
  onSubmit: PropTypes.func,
};

SearchInput.defaultProps = {
  onClear: () => {},
  onSubmit: () => {},
};

export default memo(SearchInput);
