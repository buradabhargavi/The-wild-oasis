import styled from "styled-components";
import React, { useState } from "react";
import { getCabins } from "../../services/apicabin";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";

import { useQuery } from "@tanstack/react-query";
import CabinRow from "./CabinRow";
import CreateCabinForm from "./CreateCabinForm";

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
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
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
        {cabins.map((cabin) => (
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
