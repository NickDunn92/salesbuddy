import { Component } from 'react';

class CardList extends Component {
  render() {

    const { callbacks } = this.props;

    return (
      <div>
        {callbacks.map((callback) => (
          <h1 key={ callback.id }>
            {callback.name}
          </h1>
        ))}
      </div>
    )
  }
}

export default CardList;