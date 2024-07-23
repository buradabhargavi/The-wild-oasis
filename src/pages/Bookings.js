import { useState } from "react";
import CreateBookingForm from "../features/bookings/CreateBookingForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import BookingTable from "../features/bookings/BookingTable";

function Bookings() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <p>TEST</p>
      </Row>
      <Row>
        <Button onClick={() => handleClick()}>Book a cabin</Button>
        {isOpen && <CreateBookingForm />}
      </Row>
      <Row>
        <BookingTable />
      </Row>
    </>
  );
}

export default Bookings;
