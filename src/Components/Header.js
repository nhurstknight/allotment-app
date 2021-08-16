import styled from "styled-components";

function Header() {
  // Best practice for images?
  // const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVL0266YfQ1DxpAb-_hkMO3FlXCaJEvLNeg&usqp=CAU"
  // const backgroundImage = "https://source.unsplash.com/JjT_7MwREm4"

  return (
    <StyledHeaderContainer>
      {/* <StyledLogo src={ imageUrl } /> */}
      <StyledTitle>Farmstead Road Community Garden</StyledTitle>
    </StyledHeaderContainer>
  );
}

// use 'Styled' on naming to clearly indicate that this is for styled-components and not another component import
const StyledHeaderContainer = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: 
  flex-wrap: row wrap;
  justify-content: space-evenly;
  align-items: center;
  background: #ffffff;
  background-image: 
    linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url("https://source.unsplash.com/JjT_7MwREm4");
  background-size: cover;
  background-repeat: no-repeat;
`;

const StyledTitle = styled.p`
  font-size: 28px;
  color: white;
  font-weight: 900;
  text-align: center;
  max-width: 80vw;

  @media only screen and (min-width: 600px) {
    font-size: 48px;
  }
`;

// const StyledLogo = styled.img`
//   width: 50px;
//   height: 50px;

//   @media only screen and (min-width: 600px) {
//     width: 100px;
//     height:100px;
//   }
// `;




export default Header;