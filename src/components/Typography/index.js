
import React, { memo, forwardRef } from 'react';
import { string, node, number, bool } from 'prop-types';
import { StyledDisplay, StyledH1, StyledH2, StyledH3, StyledH4, StyledCaption, StyledBody } from './styles';

const Typography = forwardRef(function Typography(props, ref) {
    const {
        tag,
        caption,
        children,
        ...sanitizedProps
    } = props;

    if (caption) {
        return (
            <StyledCaption {...sanitizedProps} ref={ref}>
                {children}
            </StyledCaption>
        );
    }

    if (tag === 'display') {
        return <StyledDisplay {...sanitizedProps} ref={ref}>{children}</StyledDisplay>
    }

    if (tag === 'h1') {
        return <StyledH1 {...sanitizedProps} ref={ref}>{children}</StyledH1>
    }

    if (tag === 'h2') {
        return <StyledH2 {...sanitizedProps} ref={ref}>{children}</StyledH2>
    }

    if (tag === "h3") {
        return <StyledH3 {...sanitizedProps} ref={ref}>{children}</StyledH3>
    }

    if (tag === 'h4') {
        return <StyledH4 {...sanitizedProps} ref={ref}>{children}</StyledH4>
    }

    if (tag === 'h5') {
        return <h5 {...sanitizedProps} ref={ref}>{children}</h5>
    }

    if (tag === 'h6') {
        return <h6 {...sanitizedProps} ref={ref}>{children}</h6>
    }

    return <StyledBody {...sanitizedProps} ref={ref}>{children}</StyledBody>;
});

Typography.propTypes = {
    tag: string,
    caption: bool,
    children: node,
    elipsis: number,
};

Typography.defaultProps = {
    children: null,
    tag: null,
    caption: false,
};

export default memo(Typography);