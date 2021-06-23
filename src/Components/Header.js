import styled from "styled-components";

function Header() {
  const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVL0266YfQ1DxpAb-_hkMO3FlXCaJEvLNeg&usqp=CAU"

  return (
    <StyledHeaderContainer>
      <StyledLogo src={ imageUrl } />
      <StyledTitle>My allotment app</StyledTitle>
    </StyledHeaderContainer>
  );
}

// use 'Styled' on naming to clearly indicate that this is for styled-components and not another component import
const StyledHeaderContainer = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.p`
  font-size: 70px;
  color: pink;
  font-weight: 900;
`;

const StyledLogo = styled.img`
  width: 100px;
  height:100px;
`;


export default Header;