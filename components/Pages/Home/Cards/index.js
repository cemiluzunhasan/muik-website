import CardItem from './CardItem';
import data from '../../../../data/home/cards';

const Cards = () => {
  return (
    <div className="Cards">
      <div className="full-content">
        {data.map(x => (
          <CardItem key={x.id} title={x.title} text={x.text} image={x.icon} /> 
        ))}
      </div>
    </div>
  );
};

export default Cards;
