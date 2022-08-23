import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Detalles } from '../pages/Detalles';
import { Home } from '../pages/Home';

export const AppRouter = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detalles/:id' element={<Detalles />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
