import React from 'react';

const CardItem = ({ image, title, text}) => {
  return (
    <div className="CardItem d-flex fd-column a-center">
      <img src={image} />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default CardItem;
