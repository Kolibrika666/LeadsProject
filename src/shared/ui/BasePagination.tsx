import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

interface PaginationProps {
  pageSize?: number;
  totalCount: number;
  onChange: (page: number, limit: number) => void;
}
export function BasePagination({
  onChange,
  pageSize = 3,
  totalCount,
}: PaginationProps) {

  const lastPage = Math.ceil(totalCount / pageSize);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(pageSize);


  useEffect(() => {
    onChange(page, limit);
  }, [page, limit]);

  const onPrevPagination = () => {
    if (page >= 1) {
      setPage((page) => (page -= 1));
    } else {
      setPage(1);
    }
  };

  const onNextPagination = () => {
    if (page < lastPage) {
      setPage((page) => (page += 1));
    } else {
      setPage(lastPage);
    }
  };

  const isPrevDisabled = () => (page > 1 ? false : true);
  const isNextDisabled = () => (page < lastPage ? false : true);

  return (
    <>
      <Pagination className="justify-content-md-center">
        <Pagination.Prev
          onClick={onPrevPagination}
          disabled={isPrevDisabled()}
        />
        <Pagination.Next
          onClick={onNextPagination}
          disabled={isNextDisabled()}
        />
      </Pagination>
    </>
  );
}
