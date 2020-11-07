export interface filterInterface {
  type: string;
  values: Array<string>;
}

export interface Book {
  id: number;
  book_author: Array<string>;
  book_publication_city: string;
  book_publication_country: string;
  book_publication_year: number;
  book_title: string;
  book_pages: number;
}

interface dataInterface {
  books: Array<Book>;
  count: number;
}

export interface responseInterface {
  data: dataInterface;
}
