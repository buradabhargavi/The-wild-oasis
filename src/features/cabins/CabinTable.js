import styled from "styled-components";
import React, { useState } from "react";
import { getCabins } from "../../services/apicabin";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";

import { useQuery } from "@tanstack/react-query";
import CabinRow from "./CabinRow";
import CreateCabinForm from "./CreateCabinForm";
import { useSearchParams } from "react-router-dom";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function CabinTable() {
  const [showForm, setShowForm] = useState(false);
  const [searchParams] = useSearchParams();
  //  console.log(searchParams);
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  //filter
  const filterVal = searchParams.get("discount") || "all";

  let filterCabins;
  if (filterVal === "all") filterCabins = cabins;
  if (filterVal === "withDiscount")
    filterCabins = cabins.filter((cabin) => cabin.discount > 0);
  if (filterVal === "NoDiscount")
    filterCabins = cabins.filter((cabin) => cabin.discount === 0);

  //sort

  const sortBy = searchParams.get("sortBy") || "";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filterCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading) return <Spinner />;

  return (
    <>
      <Table role="table">
        <TableHeader role="row">
          <div></div>
          <div>cabin</div>
          <div>capacity</div>
          <div>price</div>
          <div>Discount</div>
          <div></div>
        </TableHeader>
        {/*   {filterCabins.map((cabin) => ( */}
        {sortedCabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id}></CabinRow>
        ))}
      </Table>
      {showForm ? (
        <CreateCabinForm setShowForm={setShowForm} />
      ) : (
        <Button
          onClick={() => {
            setShowForm(true);
          }}
        >
          Add cabin
        </Button>
      )}
    </>
  );
}

export default CabinTable;
