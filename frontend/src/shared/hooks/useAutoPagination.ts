import { useEffect } from 'react';

export default function useAutoPagination(
  page: number,
  setPage: (v: number) => void,
  itemsLength: number | undefined
) {
  useEffect(() => {
    if (itemsLength === 0 && page > 1) setPage(page - 1);
  }, [itemsLength]);
}
