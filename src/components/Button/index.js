import React, { memo } from 'react';
import { node } from 'prop-types';

import { Button } from './styles';

const ButtonComp = (props) => {
  const { children } = props;
  return (
    <Button {...props}>
      {children}
    </Button>
  );
};

ButtonComp.propTypes = {
  children: node.isRequired
};

ButtonComp.defaultProps = {
  children: null
};

export default memo(ButtonComp);