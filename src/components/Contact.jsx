import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh; /* Adjust height */
  padding: 4rem 2rem;
  background-color: #f9f9f9;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Heading = styled(motion.h2)`
  font-size: 2.5rem;
  color: #223c77;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const FormContainer = styled(motion.div)`
  flex: 1;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 400px;
  width: 100%;
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #223c77;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: #d81b22;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: #223c77;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d81b22;
  }
`;

const MapContainer = styled(motion.div)`
  flex: 1;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Contact = () => {
  const ref = useRef(null);

  // Observe the visibility of the ContactWrapper
  const isInView = useInView(ref, { once: true });

  return (
    <ContactSection id="contact" ref={ref}>
      <ContactWrapper>
        <FormContainer
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <Heading
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Contact Us
          </Heading>
          <form>
            <FormField>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </FormField>
            <FormField>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </FormField>
            <FormField>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required
              />
            </FormField>
            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </FormContainer>
        <MapContainer
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093744!2d-122.42198238468315!3d37.7749292797598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d1a36c81b%3A0x32f93cd051c2f9ff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1699659936226!5m2!1sen!2s"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </MapContainer>
      </ContactWrapper>
    </ContactSection>
  );
};

export default Contact;
