import styled from '@emotion/styled';

const Section = styled('div')(props => `
	background: white;
	padding: ${props.padding || '16px'};
`);

export default Section;