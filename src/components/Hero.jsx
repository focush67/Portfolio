import React from 'react';
import { Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Hero = () => {
  return (
    <div style={{ padding: 'auto', margin:"10%"}}>
      <Typography variant="h3" align="center">
        Full Stack{' '}
        <span
          css={{
            display: 'inline-block',
            overflow: 'hidden',
            borderBottom: '1px solid',
            animation: `${typingAnimation} 3s steps(20, end) infinite`,
          }}
        >
          Developer
        </span>
      </Typography>
    </div>
  );
};

export default Hero;
