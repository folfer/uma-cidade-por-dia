import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import History from './pages/History';

const src: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/history" component={History} />
    </Switch>
  );
};

export default src;
