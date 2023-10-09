import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import './ExerciseCard.css';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack>
        <div className="cards-buttons">
          <Button className="card-button1">{exercise.bodyPart}</Button>
          <Button className="card-button2">{exercise.target}</Button>
        </div>
      </Stack>
      <Typography>
        <div className="cards-name">{exercise.name}</div>
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
