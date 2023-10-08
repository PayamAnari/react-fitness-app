import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { exerciseOptions, fetchData } from '../../utils/fetchData';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import Loader from '../Loader/Loader';
import './Exercises.css';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        let exercisesData = [];

        if (bodyPart === 'all') {
          exercisesData = await fetchData(
            'https://exercisedb.p.rapidapi.com/exercises',
            exerciseOptions,
          );
        } else {
          exercisesData = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
            exerciseOptions,
          );
        }

        setExercises(exercisesData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = Array.isArray(exercises)
    ? exercises.slice(indexOfFirstExercise, indexOfLastExercise)
    : [];

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <div id="exercises" className="exercises-container">
      <h2 className="nice-animation">Showing Results</h2>

      <div className="exercise-stack">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </div>

      <div className="pagination-container">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </div>
    </div>
  );
};

export default Exercises;
