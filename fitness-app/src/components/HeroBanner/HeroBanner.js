import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../../assets/images/fit.png';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <Box>
      <div className="hero-container">
        <Typography>
          <h2 className="animation-text">Gym Fitness</h2>
        </Typography>
        <Typography>
          <h3 className="animation-text">
            Sweat today, <br /> <span className="shine-text">shine</span>{' '}
            tomorrow
          </h3>
        </Typography>
        <Typography>
          <h4 className="animation-text">
            Maximize your gains with these key exercises
          </h4>
        </Typography>
        <Stack>
          <a className="explore-btn animation-text" href="#exercises">
            Explore Exercises
          </a>
        </Stack>
        <Typography>
          <h5>Exercise</h5>
        </Typography>
        <img
          src={HeroBannerImage}
          alt="hero-banner"
          className="hero-banner-img"
        />
      </div>
    </Box>
  );
};

export default HeroBanner;
