import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const BooksTable: React.FC<RouteComponentProps<any>> = () => {
  return (
    <>
      <h2>Loading Books...</h2>
      <div className="loading" />
    </>
  );
};

export default BooksTable;
