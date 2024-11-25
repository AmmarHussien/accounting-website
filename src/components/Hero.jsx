import { motion } from "framer-motion";
import styled from "styled-components";

const HeroSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full window height */
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #223c77, #d81b22);
  color: white;
`;

const HeroContent = styled(motion.div)`
  max-width: 600px;
`;

const HeroHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled.button`
  background-color: #ffffff;
  color: #223c77;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #d81b22;
    color: #fff;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContent
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroHeading>Your Trusted Accounting Partner</HeroHeading>
        <HeroText>
          Efficient, reliable, and accurate financial solutions tailored for
          you.
        </HeroText>
        <HeroButton>Get Started</HeroButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
