import React from 'react';
import getRandomColor from '../../util/getRandomColor';
import './Card.scss';

const Card: React.FC<{ imgSrc: string; title: string }> = ({
  imgSrc,
  title,
}) => {
  return (
    <div className="card">
      {imgSrc != undefined && (
        <img
          style={{ backgroundColor: getRandomColor() }}
          className="image"
          src={imgSrc}
          alt="image"
        />
      )}
      <div className="card-bottom">
        <div className="card-bottom-text">{title}</div>
      </div>
    </div>
  );
};

export default Card;
