import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages/Home';


const RootRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RootRoutes;