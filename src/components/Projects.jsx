import React from 'react';
import work1 from '../images/work-1.jpg';
import work2 from '../images/work-2.png';
import work3 from '../images/work-3.png';
import work4 from '../images/work-4.jpg'
import { Container, Typography, Button } from '@mui/material';

const Projects = () => {
  const projects = [
    {
      image: work2,
      title: 'Social Media App',
      description: 'Created a full stack social media app using NextJS-13, TypeScript and integrated realtime chat functionality into it using Redis and TailwindCSS for stylings',
      githubLink: 'https://github.com/focush67/Social-App-Code', // Add your GitHub link here
      deploymentLink: 'https://social-app-sigma-five.vercel.app/', // Add your deployment link here
    },
    {
      image: work4,
      title: 'Chatter',
      description: 'Created a full stack realtime chat application using NextJS-13, TypeScript, Redis and TailwindCSS for stylings',
      githubLink: 'https://github.com/focush67/chatter', // Add your GitHub link here
      deploymentLink: 'https://chatter-woad-nine.vercel.app/login', // Add your deployment link here
    },
    {
      image: work3,
      title: 'ECommerce App',
      description: 'Created a fully responsive, full stack ecommerce web-app using NextJS, TypeScript, Firebase, NextAuth and MongoDB',
      githubLink: 'https://github.com/focush67/frontend-ecommerce', // Add your GitHub link here
      deploymentLink: 'https://frontend-ecommerce-livid.vercel.app/', // Add your deployment link here
    },
    {
      image: work1,
      title: 'Cryptic',
      description: 'Created a cryptocurrency web app using ReactJS and ChakraUI',
      githubLink: 'https://github.com/focush67/CryptoCurrency-WebApp', // Add your GitHub link here
      deploymentLink: 'https://vercel.com/focush67/cryptic', // Add your deployment link here
    },
  ];

  return (
    <div id="portfolio">
      <Container>
        <Typography variant="h4" className="subtitle" style={{ textAlign: "center" }}>
          <h4>My Work </h4>
        </Typography>
        <div className="work-list">
          {projects.map((project, index) => (
            <div className="work" key={index} style={{
              color: "white",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:"space-around"
            }}>
              <img src={project.image} alt="" />
              <div className="layer">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button href={project.githubLink} target="_blank" variant="outlined" color="primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg>
                  </Button>
                  <Button href={project.deploymentLink} target="_blank" variant="outlined" color="secondary">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <a href="https://github.com/focush67" className="btn" id="SEEMORE">
          More
        </a>
      </Container>
    </div>
  );
};

export default Projects;
