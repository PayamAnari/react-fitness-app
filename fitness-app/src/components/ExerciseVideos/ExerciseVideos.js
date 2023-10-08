import React from 'react';
import Loader from '../Loader/Loader';
import './ExerciseVideos.css';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos || !exerciseVideos.length) return <Loader />;

  return (
    <div className="video-container">
      <h3>
        Watch <span>{name}</span> exercise videos
      </h3>
      <div className="content-video">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ borderTopLeftRadius: '20px' }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <div className="video-title">
              <h1>{item.video.title}</h1>
              <h2>{item.video.channelName}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
