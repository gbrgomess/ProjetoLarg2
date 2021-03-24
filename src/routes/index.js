import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Inicial from '../pages/Inicial';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Inicial} />
    </Switch>
  );
}

export default Routes;
