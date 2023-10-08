import React from 'react';
import { Button } from '@mui/material';
import BodyPartImage from '../../assets/icons/body-part.png';
import TargetImage from '../../assets/icons/target.png';
import EquipmentImage from '../../assets/icons/equipment.png';
import './Detail.css';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <div className="detail-container">
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <div className="content-container">
        <h2>{name} </h2>
        <div className="detail-content">
          Exercises keep you strong.
          <br /> <span>{name}</span> is one of the best exercises to target your{' '}
          {target}. It will help you improve your mood and gain energy.
        </div>
        {extraDetail.map((item) => (
          <div className="icons-container" key={item.name}>
            <Button className="button-icons">
              <img src={item.icon} alt={bodyPart} />
            </Button>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
