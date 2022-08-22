import React, { useState } from 'react';
import { Card } from '../../components/Card';
import { Search } from '../../components/Search';
import { Pagination } from "../../components/Pagination";

export const Cards = ({ games }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [currentPage, setcurrentPage] = useState(12);

  const maximo = games.length / currentPage;
  const listGame = () => {
    if (!search) {
      var filter = games.slice((page - 1) * currentPage, (page - 1) * currentPage + currentPage);
      return filter;
    } else {
      filter = games.filter((game) => game.title.toLowerCase().includes(search.toLocaleLowerCase()));
      return filter;
    }
  }
  const searcher = (e) => {
    setSearch(e.target.value);
  }

  return (
    <>
      <Search search={search} change={searcher}></Search>
      <div className="container-cards">
        <div className='row'>
          {listGame().map((game) => (
            <Card key={game.id} game={game}></Card>
          ))}
        </div>
      </div>
      <Pagination page={page} setPage={setPage} maximo={maximo} />

    </>
  );
};
