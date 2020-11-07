import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';

import { getBooks } from '../../../utils/requests';
import { responseInterface, Book, filterInterface } from '../../../utils/types';

const BooksTable: React.FC<RouteComponentProps<any>> = () => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filters, setFilters] = useState<filterInterface[]>([]);
  const [totalSize, setTotalSize] = useState(0);
  const [allBooks, setAllBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks(page, itemsPerPage, filters)
      .then(function (response: responseInterface) {
        console.log(response);
        if (response.data && response.data.books && response.data.count) {
          setAllBooks(response.data.books);
          setTotalSize(response.data.count);
        }
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, [page, itemsPerPage, filters]);

  const columns = [
    {
      dataField: 'id',
      text: 'ID',
      hidden: true,
    },
    {
      dataField: 'book_title',
      text: 'Title',
      filter: textFilter(),
    },
    {
      dataField: 'book_publication_year',
      text: 'Year',
      filter: textFilter(),
    },
    {
      dataField: 'book_author',
      text: 'Authors',
      filter: textFilter(),
    },
    {
      dataField: 'book_publication_city',
      text: 'City',
      filter: textFilter(),
    },
    {
      dataField: 'book_publication_country',
      text: 'Country',
      filter: textFilter(),
    },
  ];

  const handleTableChange = (type, { page, sizePerPage, filters }) => {
    setTimeout(() => {
      setPage(page);
      setItemsPerPage(sizePerPage);

      const filterVals = [];
      for (const dataField in filters) {
        const { filterVal, filterType, comparator } = filters[dataField];
        filterVals.push(filterVal);
      }

      if (filterVals.length > 0) {
        setFilters([{ type: 'all', values: filterVals }]);
      } else {
        setFilters([]);
      }
    }, 1000);
  };

  return (
    <>
      {allBooks.length > 0 ? (
        <ToolkitProvider keyField="id" data={allBooks} columns={columns} search>
          {toolkitprops => (
            <div>
              <Card className="mb-5 mt-5 sensor-record-card">
                <CardBody>
                  <BootstrapTable
                    remote
                    pagination={paginationFactory({
                      page,
                      itemsPerPage,
                      totalSize,
                    })}
                    bordered={false}
                    filter={filterFactory()}
                    onTableChange={handleTableChange}
                    // eslint-disable-next-line react/prop-types
                    {...toolkitprops.baseProps}
                  />
                </CardBody>
              </Card>
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <>
          <h2>Loading Books...</h2>
          <div className="loading" />
        </>
      )}
    </>
  );
};

export default BooksTable;
