import {useMemo} from 'react'

const range = (start, end) => {
    let length = end - start + 1;
    /*
        Create an array of certain length and set the elements within it from
      start value to end value.
    */
    return Array.from({ length }, (_, idx) => idx + start);
  };


export const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
  }) => {
    const paginationRange = useMemo(() => {
      const totalPageCount = Math.ceil(totalCount / pageSize);

      const totalPageNumbers = siblingCount + 5;


      if (totalPageNumbers >= totalPageCount) {
        return range(1, totalPageCount);
      }
    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
  };
