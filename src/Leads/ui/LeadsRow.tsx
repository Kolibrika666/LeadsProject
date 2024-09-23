import React from "react";

import { Status } from "../../shared/ui";

import { leadsActions } from "../slice/leadsSlice";
import { useActionCreators } from "../../store";

type LeadsRowType = {
  id: number;
  name: string;
  price: number;
  color: string;
};

export const LeadsRow = ({ id, name, price, color }: LeadsRowType) => {
  
  const getLead = useActionCreators(leadsActions).getLead;

  const getInfo = () => {
    getLead({ params: { id: id } });
  };

  return (
    <tr key={id} onClick={getInfo}>
      <th>{id}</th>
      <th>
        {name}
        <Status color={color} />
      </th>
      <th>{price}</th>
    </tr>
  );
};
