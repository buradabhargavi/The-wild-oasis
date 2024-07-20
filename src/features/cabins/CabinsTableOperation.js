import React from "react";
import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinsTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", label: "All" },
          { value: "withDiscount", label: "with Discount" },
          { value: "NoDiscount", label: "No Discount" },
        ]}
      />
      <SortBy></SortBy>
    </TableOperations>
  );
}

export default CabinsTableOperation;
