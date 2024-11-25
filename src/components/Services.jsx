import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";
import { FaCalculator, FaChartLine, FaMoneyBillWave } from "react-icons/fa";

const ServicesSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const ServicesHeading = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ServiceCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ServiceCard = styled(motion.div)`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1.5rem;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2rem;
  color: #d81b22;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const ServiceText = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <ServicesSection id="services" ref={ref}>
      <ServicesHeading
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        Our Services
      </ServicesHeading>
      <ServiceCards>
        <ServiceCard
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <ServiceIcon>
            <FaCalculator />
          </ServiceIcon>
          <ServiceTitle>Tax Management</ServiceTitle>
          <ServiceText>
            Streamlined tax preparation and filing services for individuals and
            businesses.
          </ServiceText>
        </ServiceCard>
        <ServiceCard
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <ServiceIcon>
            <FaChartLine />
          </ServiceIcon>
          <ServiceTitle>Financial Planning</ServiceTitle>
          <ServiceText>
            Expert financial advice to help you achieve your goals and grow
            wealth.
          </ServiceText>
        </ServiceCard>
        <ServiceCard
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <ServiceIcon>
            <FaMoneyBillWave />
          </ServiceIcon>
          <ServiceTitle>Payroll Services</ServiceTitle>
          <ServiceText>
            Effortless payroll solutions to save your time and ensure
            compliance.
          </ServiceText>
        </ServiceCard>
      </ServiceCards>
    </ServicesSection>
  );
};

export default Services;
