import styled from "styled-components";

function AboutUs() {
  return (
    <StyledAboutUsContainer>
      <p>About Us</p>
    </StyledAboutUsContainer>
  );
}

// use 'Styled' on naming to clearly indicate that this is for styled-components and not another component import
const StyledAboutUsContainer = styled.div`

`;
export default AboutUs;