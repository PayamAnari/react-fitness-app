import React from 'react';
import { Stack } from '@mui/material';
import Icon from '../../assets/icons/gym1.png';
import './BodyPart.css';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    className="bodyPart-card"
    sx={{
      borderTop: bodyPart === item ? '4px solid #1F51FF' : '',
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img className="bodyPart-img" src={Icon} alt="dumbbell" />

    <div className="bodyPart-typo">{item}</div>
  </Stack>
);

export default BodyPart;
