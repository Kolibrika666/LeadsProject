import React from "react";

type statusType = {
  color: string;
};

export const Status = ({ color }: statusType) => {
    
  return (
    <svg width="100" height="100">
      <circle cx="40" cy="50" r="15" fill={color} />
    </svg>
  );
};
