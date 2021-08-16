import styled from "styled-components";
import { Link } from "react-router-dom"

function Nav() {
  return (
    <StyledNavContainer>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/news">News</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/contact-us">Contact Us</Link>
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

// const StyledNavLink = styled.a`
//   text-decoration: none;
// `;


export default Nav;