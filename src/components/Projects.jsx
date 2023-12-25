import React from 'react';
import work1 from '../images/work-1.png';
import work2 from '../images/work-2.png';
import work3 from '../images/work-3.png';
import { Container,Typography } from '@mui/material';

const Projects = () => {
  return (
    <div id="portfolio">
      <Container>
      <Typography variant="h4" className="subtitle" style={{
        textAlign:"center"
      }}>
        <h4>My Work </h4>
      </Typography>
        <div className="work-list">
          <div className="work">
            <img src={work2} alt="" />
            <div className="layer">
              <h3>Social Media App</h3>
              <p>Created a full stack social media app
                <br/> using NextJS-13,TypeScript and integrated realtime chat functionality into it using Redis and TailwindCSS for stylings
              </p>
              <a href="#">
                <i className="fa-sharp fa-solid fa-link"></i>
              </a>
            </div>
          </div>

          <div className="work">
            <img src={work3} alt="" />
            <div className="layer">
              <h3>Weather Predicting App</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, tenetur.</p>
              <a href="#">
                <i className="fa-sharp fa-solid fa-link"></i>
              </a>
            </div>
          </div>

          <div className="work">
            <img src={work1} alt="" />
            <div className="layer">
              <h3>Graph Algorithms</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, tenetur.</p>
              <a href="#">
                <i className="fa-sharp fa-solid fa-link"></i>
              </a>
            </div>
          </div>

          <div className="work">
            <img src={work2} alt="" />
            <div className="layer">
              <h3>Social Media App</h3>
              <p>Created a full stack social media app
                <br/> using NextJS-13,TypeScript and integrated realtime chat functionality into it using Redis and TailwindCSS for stylings
              </p>
              <a href="#">
                <i className="fa-sharp fa-solid fa-link"></i>
              </a>
            </div>
          </div>

        </div>

        <a href="" className="btn" id="SEEMORE">
          More
        </a>
      </Container>
    </div>
  );
};

export default Projects;
