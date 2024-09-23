import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useActionCreators } from "../store";
import { useSelector } from "react-redux";
import { leadsActions, leadsSelectors } from "./slice/leadsSlice";

import { LeadsCard, LeadsTable } from "./ui";
import { BasePagination, Loading } from "../shared";



export const LeadsPage = () => {
  const setPage = useActionCreators(leadsActions).setPage;
  const setLimit = useActionCreators(leadsActions).setLimit;
  const getLeadList = useActionCreators(leadsActions).getLeadsList;
  const getTotalCount = useActionCreators(leadsActions).getTotalCount;
  const page = useSelector(leadsSelectors.page);
  const limit = useSelector(leadsSelectors.limit);
  const totalCount = useSelector(leadsSelectors.totalCount);
  const isLoad = useSelector(leadsSelectors.isLoading);

  useEffect(() => {
    getLeadList({ params: { limit: limit, page: page } });
  }, [limit, page]);

  useEffect(() => {
    getTotalCount({ params: {} });
  }, []);

  const onPaginationChange = (page: number, limit: number) => {
    setPage(page);
    setLimit(limit);
  };
  return (
    <>
      <LeadsCard />
      <Container>
        <h3>Сделки</h3>
        <LeadsTable />
      </Container>
      {!isLoad ? (
        <BasePagination
          onChange={onPaginationChange}
          pageSize={3}
          totalCount={totalCount}
          startPage = {page}
        />
      ) : null}
      {isLoad ? <Loading /> : null}
    </>
  );
};
