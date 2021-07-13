import styled from "styled-components";
import { Link } from "react-router-dom"

function Nav() {
  return (
    <StyledNavContainer>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/news">News</Link>
      <Link to="/calendar">Calendar</Link>
    </StyledNavContainer>
  );
}

// use 'Styled' on naming to clearly indicate that this is for styled-components and not another component import
const StyledNavContainer = styled.div`
  grid-area: nav;
`;
export default Nav;