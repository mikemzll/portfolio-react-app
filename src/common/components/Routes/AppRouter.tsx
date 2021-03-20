import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { DEFAULT_PAGE, HOME, PORTFOLIO, ABOUT_US } from '../../../modules/core/constants/routes';
import Header from '../../../modules/core/components/Header/Header';
import Footer from '../../../modules/core/components/Footer/Footer';

const AppRouter = () => {
  return (
    <Router>
      <Header />

      <div className="page-wrapper">
        <Switch>
          <Route path={HOME.path}>
            <HOME.component />
          </Route>
          <Route path={PORTFOLIO.path}>
            <PORTFOLIO.component />
          </Route>
          <Route path={ABOUT_US.path}>
            <ABOUT_US.component />
          </Route>
          <Route path="/" render={() => <Redirect to={DEFAULT_PAGE} />} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
