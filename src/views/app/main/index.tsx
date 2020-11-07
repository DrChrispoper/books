import React, { Suspense } from 'react';
import { Redirect, Route, Switch, RouteComponentProps } from 'react-router-dom';

const Start = React.lazy(
  () => import(/* webpackChunkName: "start" */ './start')
);

interface Props extends RouteComponentProps<any> {}

const Gogo: React.FC<Props> = ({ match }: Props) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/start/1`} />
      <Route
        path={`${match.url}/start/:page`}
        render={props => <Start {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Gogo;
