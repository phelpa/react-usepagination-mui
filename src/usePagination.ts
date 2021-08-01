import { useState, useCallback, ChangeEvent } from 'react';

const usePagination = (
  initialPerPage?: number
): {
  page: number;
  changePageEvent: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, number: number) => void;
  perPage: number;
  changePerPageEvent: (e: ChangeEvent<HTMLInputElement>) => void;
  changePage: (page: number) => void;
  arrayPage: number;
  changePerPage: (perPage: number) => void;
} => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(initialPerPage ? initialPerPage : 25);
  const [arrayPage, setArrayPage] = useState(0); 

  const changePageEvent = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, number: number): void => {
    setPage(number + 1);
    setArrayPage(number);
  }, []);

  const changePage = useCallback((page: number): void => {
    setPage(page);
    setArrayPage(page - 1);
  }, []);

  const changePerPageEvent = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setPerPage(parseInt(e.target.value));
    setPage(1);
    setArrayPage(0);
  }, []);

  const changePerPage = useCallback((perPage: number): void => {
    setPerPage(perPage);
    setPage(1);
    setArrayPage(0);
  }, []);

  return { page, changePageEvent, perPage, changePerPageEvent, changePage, arrayPage, changePerPage };
};

export default usePagination;
