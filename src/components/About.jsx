import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const AboutHeading = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutText = styled(motion.p)`
  font-size: 1rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
`;

const About = () => {
  const ref = useRef(null);

  // Observe the visibility of the AboutSection
  const isInView = useInView(ref, { once: true });

  return (
    <AboutSection id="about" ref={ref}>
      <AboutHeading
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        About Us
      </AboutHeading>
      <AboutText
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2 }}
      >
        We are a team of professional accountants dedicated to managing your
        finances with precision.
      </AboutText>
    </AboutSection>
  );
};

export default About;
