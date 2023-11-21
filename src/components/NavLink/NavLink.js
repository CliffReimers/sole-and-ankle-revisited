import styled from "styled-components/macro";
import {QUERIES} from "../../constants";

const NavLink = ({children}) => {
    return <Wrapper>
        <OrgLink>
            {children}
        </OrgLink>
        <BoldLink>
            {children}
        </BoldLink>
    </Wrapper>
}

const Link = styled.div`
  transition: transform 200ms;
  transform-origin: 50% 50% 20px;
`

const OrgLink = styled(Link)`
  font-weight: var(--weight-medium);
`;

const BoldLink = styled(Link)`
  transform: rotateX(90deg);
  transform-origin: 50% 100%;
  font-weight: var(--weight-bold);
  position: absolute;
  top: 0;
  left: 0
`

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  position: relative;
  cursor: pointer;

  &:first-of-type {
    color: var(--color-secondary);
  }

  @media ${QUERIES.animationsEnabled} {
    &:hover ${OrgLink} {
      transform: rotateX(-90deg);
    }
    
    &:hover ${BoldLink} {
      transform: rotateX(0deg);
    }
  }
`;

export default NavLink