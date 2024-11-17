import './card.styles.css';

const Card = ({ callback }) => {
  const { id, name } = callback;

  return (
    <div className='card-container'>
        <h1 key={ id }>
          {name}
        </h1>
    </div>
  );
};

export default Card;