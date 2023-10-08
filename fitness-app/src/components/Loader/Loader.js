import React from 'react';
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';
import './Loader.css';

const Loader = () => (
  <Stack>
    <div className="loader">
      <InfinitySpin color="grey" />
    </div>
  </Stack>
);

export default Loader;
