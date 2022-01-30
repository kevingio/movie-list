import styled from "@emotion/styled"

const Shimmer = styled('div')(props => `
  position: relative;
  background-color: #e2e2e2;
  width: ${props.width || '100%'};
  height: ${props.height || '50px'};
  margin: ${props.margin || '0'};
  border-radius: ${props.borderRadius || '0'};
  
  &::after {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: -webkit-gradient(linear, left top,
                right top, from(transparent), 
                color-stop(rgba(255, 255, 255, 0.2)),
                to(transparent));
                  
    background: linear-gradient(90deg, transparent,
            rgba(255, 255, 255, 0.2), transparent);

    /* Adding animation */
    animation: loading 0.8s infinite;
  }
`);

export default Shimmer;