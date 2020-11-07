import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './assets/css/vendor/bootstrap.min.css';
import './assets/css/sass/themes/root.default.scss';

const App = React.lazy(() => import(/* webpackChunkName: "App" */ './App'));

ReactDOM.render(
  <Suspense fallback={<div className="loading" />}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
