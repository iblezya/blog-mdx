import styled from "styled-components"

export const FooterWrapper = styled.footer`
  grid-column: 2 / span 12;
  min-height: 11.25rem;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
export const FooterSocialWrapper = styled.div`
  flex-wrap: wrap;
  align-items: center;
  text-align: center;

  &p {
    text-align: center;
    flex: 0 0 100%;
  }
`
export const FooterSocialIcons = styled.div`
  flex: 0 0 100%;
  margin-bottom: 1rem;

  & img {
    height: 30px;
    padding: 0 1rem;
    opacity: 0.6;
    transition: 0.3s ease;
  }

  & img:hover {
    opacity: 1;
  }
`