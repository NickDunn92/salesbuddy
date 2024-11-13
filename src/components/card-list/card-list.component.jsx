import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
  render() {

    const { callbacks } = this.props;

    return (
      <div className='card-list'>
        {callbacks.map((callback) => {

          return (
            <Card callback={callback} />
          );
        })}
      </div>
    );
  }
}

export default CardList;