import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';

import Landing from './pages/Landing';
import Listen from './pages/Listen';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Route component={Landing} path="/" exact />
        <Route component={Listen} path="/listen" exact />
      </BrowserRouter>
    </>
    
  )
}

export default Routes;