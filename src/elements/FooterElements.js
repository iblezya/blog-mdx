import styled from "styled-components"

export const FooterWrapper = styled.footer`
  grid-column: 2 / span 12;
  min-height: 10rem;
  padding: 2.5rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
export const FooterSocialWrapper = styled.div`
  text-align: center;
  display: flex
  flex-wrap: wrap;
  align-items: center;
  

  &p {
    flex: 0 0 100%;
    text-align: center;
    
  }
`
export const FooterSocialIcons = styled.div`
  flex: 0 0 100%;
  margin-bottom: 1rem;

  & img {
    height: 30px;
    padding: 0 0.7rem;
    opacity: 0.6;
    transition: 0.3s ease;
  }

  & img:hover {
    opacity: 1;
  }
`
