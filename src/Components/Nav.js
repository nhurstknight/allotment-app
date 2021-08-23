import styled from "styled-components";
import { Link } from "react-router-dom"

function Nav() {
  return (
    <StyledNavContainer>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About Us</StyledLink>
      <StyledLink to="/news">News</StyledLink>
      <StyledLink to="/calendar">Calendar</StyledLink>
      <StyledLink to="/contact-us">Contact Us</StyledLink>
    </StyledNavContainer>
  );
}

// use 'Styled' on naming to clearly indicate that this is for styled-components and not another component import
const StyledNavContainer = styled.div`
  grid-area: nav;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;


// TODO: Explore how to style a Link 

const StyledLink = styled(Link)`
  text-decoration: none;
`;


export default Nav;