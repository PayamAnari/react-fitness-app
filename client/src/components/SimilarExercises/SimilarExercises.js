import React from 'react';
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar';
import Loader from '../Loader/Loader';
import './SimilarExercises.css';

const SimilarExercises = ({ targetMuscleExercises }) => {
  return (
    <div className="similar-container">
      <h3>
        Similar <span>Target Muscle</span> exercises
      </h3>
      <div className="similar">
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default SimilarExercises;
