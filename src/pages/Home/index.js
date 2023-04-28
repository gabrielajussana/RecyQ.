import React from 'react';
import { TheHeader } from '../../components/Header';
import { TheFooter } from '../../components/Footer';
import { Home } from '../../components/Home';
import { About } from '../../components/About';

export const LandingPage = () => {
  return (
    <div>
        <TheHeader />
        <Home />
        <About />
        <TheFooter />
    </div>
  );
};