import React from 'react';
import {
  Route,
} from 'react-router-dom';
import DogList from './DogList';
import DogDetailFilter from './DogDetailFilter';

function Routes({dogs}) {
  return (
    <Routes>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route path="/dogs/:name">
        <DogDetailFilter dogs={dogs} />
      </Route>
      </Routes>
  );
}

export default Routes;
