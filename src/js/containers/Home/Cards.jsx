import React from 'react';
import { Card } from '../../components/Card';

export const Cards = ({ games }) => {

  console.log(games);
  return (
    <div className='row'>
      {games.map((game) => {
        return <Card key={game.id} game={game} />;
      })}
    </div>
  );
};
