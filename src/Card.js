import React from 'react';

const user = {
  name: 'Nick Dunn',
  imageUrl: 'https://i.etsystatic.com/33269334/r/il/c0beb2/3719088381/il_570xN.3719088381_sco7.jpg',
  imageSize: 90
};

const Card = () => {
  return (
    <>
      <h1>
        {user.name}
      </h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
        />
    </>
  );  
}

export default Card;
