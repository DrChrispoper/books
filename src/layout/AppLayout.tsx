import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<any> {
  children: JSX.Element;
}

const AppLayout = (props: Props) => {
  return (
    <div id="app-container">
      <main>
        <div className="container-fluid">{props.children}</div>
      </main>
    </div>
  );
};

export default withRouter(AppLayout);
