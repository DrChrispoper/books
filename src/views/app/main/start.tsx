import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getBooks } from '../../../utils/requests';

const BooksTable: React.FC<RouteComponentProps<any>> = () => {
  useEffect(() => {
    getBooks(1, 20, []);
  }, []);

  return (
    <>
      <h2>Loading Books...</h2>
      <div className="loading" />
    </>
  );
};

export default BooksTable;
