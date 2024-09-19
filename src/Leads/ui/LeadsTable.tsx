import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { leadsSelectors } from "../slice/leadsSlice";

import { LeadsRow } from "./LeadsRow";

import { colorTask } from "../hooks";

export const LeadsTable = () => {
  
  const leadList = useSelector(leadsSelectors.leadList);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Название</th>
            <th>Бюджет</th>
          </tr>
        </thead>
        <tbody>
          {leadList?.map((e) => (
            <LeadsRow
              id={e.id}
              name={e.name}
              price={e.price}
              color={colorTask(e.closest_task_at)}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};
