import React from 'react';
import './cardstyles.css'

const Card = ({ name }) => {
  return (
    <div className='tc fl w-third bg-green br bb bw2 br3 br--right br--bottom grow'>
      <h1>
        {name}
      </h1>
      <img        
        alt='user profile'
        src='https://i.etsystatic.com/33269334/r/il/c0beb2/3719088381/il_570xN.3719088381_sco7.jpg'
        />
    </div>
  );  
}

export default Card;