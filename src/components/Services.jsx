import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography, Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCropAlt } from '@fortawesome/free-solid-svg-icons';
import { faAppStore } from '@fortawesome/free-brands-svg-icons';

const ServicesContainer = styled('div')({
  padding: '30px 0',
});

const ServicesList = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gridGap: '40px',
  marginTop: '50px',
});

const ServiceItem = styled('div')({
  padding: '40px',
  fontSize: '13px',
  fontWeight: 300,
  borderRadius: '10px',
  border:"1px solid",
  transition: 'background-color 0.45s, transform 0.45s',
  '&:hover': {
    background: 'linear-gradient(rgba(0, 0, 0, 0.6), #0000ff)',
    transform: 'translateY(-10px)',
    color:"white"
  },
});

const Icon = styled(FontAwesomeIcon)({
  fontSize: '50px',
  marginBottom: '30px',
});

const Title = styled(Typography)({
  fontSize: '30px',
  fontWeight: 500,
  marginBottom: '15px',
});

const ServiceLink = styled(Link)({
  textDecoration: 'none',
  color: 'white',
  fontSize: '12px',
  marginTop: '20px',
  display: 'inline-block',
});

const Services = () => {
  return (
    <ServicesContainer id="services">
      <Container>
        <Typography variant="h4" className="subtitle" style={{
          textAlign:"center"
        }}>
          <h4>My Services</h4>
        </Typography>
        <ServicesList className="services-list">
          <ServiceItem>
            <Icon icon={faCode} />
            <Title>Full Stack Developer</Title>
            <Typography>
              Worked on the modern tech stack with complete TypeScript integration and using NextJS-13, with experience in Node, Express and NoSQL databases like MongoDB
            </Typography>
            <ServiceLink href="https://github.com/focush67">Learn More</ServiceLink>
          </ServiceItem>

          <ServiceItem>
            <Icon icon={faAppStore} />
            <Title>Data Structures and Algorithms</Title>
            <Typography>
              Solved over 300 problems cross platforms on Leetcode and GeeksForGeeks
            </Typography>
            <ServiceLink href="https://www.linkedin.com/in/sparsh-verma-9250741b1/">Learn More</ServiceLink>
          </ServiceItem>
        </ServicesList>
      </Container>
    </ServicesContainer>
  );
};

export default Services;
