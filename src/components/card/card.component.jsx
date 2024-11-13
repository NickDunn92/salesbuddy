import { Component } from "react";
import './card.styles.css';

class Card extends Component {
  render () {

  const { name, id } = this.props.callback;

    return (
      <div className='card-container'>
          <h1 key={ id }>
            {name}
          </h1>
      </div>
    );
  }
}

export default Card;