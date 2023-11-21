import React from 'react';
import styled from 'styled-components/macro';

const Logo = (props) => {
  return (
    <Link href="/">
      <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
        <HoverWrapper {...props}>Sole&amp;Ankle</HoverWrapper>
    </Link>
  );
};

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: var(--weight-bold);
`;

const HoverWrapper = styled(Wrapper)`
  color: var(--color-primary);
  background: transparent;
  width: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  transition: width 2000ms;
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  position: relative;
  
  &:hover ${HoverWrapper} {
    width: 100%;
  }
`;

export default Logo;
