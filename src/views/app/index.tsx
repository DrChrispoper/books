import React, { Suspense } from 'react';
import {
  Route,
  withRouter,
  Switch,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';

import AppLayout from '../../layout/AppLayout';

const BooksTable = React.lazy(
  () => import(/* webpackChunkName: "viwes-gogo" */ './main')
);

const App = (props: RouteComponentProps<any>) => {
  const { match } = props;

  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/main`} />
            <Route
              path={`${match.url}/main`}
              render={props => <BooksTable {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

export default withRouter(App);
