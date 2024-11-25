import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #223c77;
  color: white;
  text-align: center;
  padding: 1.5rem 0;
  margin-top: 2rem;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #d9d9d9;

  span {
    color: #d81b22;
  }
`;

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterText>
        &copy; {new Date().getFullYear()} <span>AccountingPro</span>. All Rights
        Reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
