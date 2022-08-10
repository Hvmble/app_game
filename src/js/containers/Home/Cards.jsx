import React, { useState } from 'react';
import { Card } from '../../components/Card';
import { Search } from '../../components/Search';

export const Cards = ({ games }) => {
  const [search, setSearch] = useState("");
  const searcher = (e) => {
    setSearch(e.target.value);
  }

  const results = !search ? games : games.filter((dato) => dato.title.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <>
      <Search search={search} change={searcher}></Search>
      <div className='row'>
        {results.map((game) => {
          return <Card key={game.id} game={game} />;
        })}
      </div>
    </>
  );
};
