import React from 'react';
import { withRouter } from 'next/router';

const CardItem = ({ router, image, title, text, link }) => {

  const goTo = (link) => {
    router.push(link);
  }

  return (
    <div className="CardItem d-flex fd-column a-center" onClick={() => goTo(link)}>
      <div className="CardIconContainer">
        <img src={image} />
      </div>
      <h1 className="margin-t-md text-bold">{title}</h1>
      <p className="margin-t-md">{text}</p>
    </div>
  );
};

export default withRouter(CardItem);
