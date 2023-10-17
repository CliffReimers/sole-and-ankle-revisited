import styled from 'styled-components/macro';

const MediaQueryComponent = ({ query, children }) => <Wrapper query={query}>
    {children}
</Wrapper>

const Wrapper = styled.div`
  display: none;
  @media ${p => p.query} {
    display: block;
  }
`

export default MediaQueryComponent