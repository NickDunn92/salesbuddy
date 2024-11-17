import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ callbacks }) => (
  <div className='card-list'>
    {callbacks.map((callback) => {
      return <Card callback={callback} />;
    })}
  </div>
);

export default CardList;