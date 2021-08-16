import styled from "styled-components";

function ContactUs() {
  return (
    <StyledContactUsContainer>
      <p>Add contact us form here</p>
      <StyledFormIframe src="https://docs.google.com/forms/d/e/1FAIpQLSeQ-2GIPS7gZkU54euSFBv3bppaO-JD7bXX2LoSnkICCxGsrA/viewform?embedded=true">Loading…</StyledFormIframe>
    </StyledContactUsContainer>
  );
}

// use 'Styled' on naming to clearly indicate that this is for styled-components and not another component import
const StyledContactUsContainer = styled.div`

`;
const StyledFormIframe = styled.iframe`
  width: 100vw;
  min-height: 500px;
  margin: auto;
`;

export default ContactUs;