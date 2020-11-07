import React from 'react';
import { Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

const Main: React.FC<RouteComponentProps<any>> = () => {
  return <Redirect to="/app" />;
};
export default Main;
