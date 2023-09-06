import { Button, Card, Col, Row } from 'antd';
import { useState } from "react";
import CinemaSeatingModal from '../components/CinemaSeatingModal';
import { useNavigate } from 'react-router-dom';

const reservationDetails = [
  {
    key: '1',
    title: 'Bumblebee',
    description: "Lorem ipsum just john wick things",
    location: 'Manila/Cinema One',
    duration: 140,
    schedule: "2023-09-04 10:30:00",
    reservedSeats: "A1,A2",
    phoneNumber: "09569453524",
    location: "Laguna",
    price: 240,
    cinemaName: "Sm Sta rosa Cinema 1",
    action: (
      <>
        <Button type="primary">Reserve Now!</Button>
        <Button type="primary">Pay Now!</Button>
      </>
    ),
  },
];

const ReservationPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSeats, setSectedSeats] = useState([]);
  const navigate = useNavigate();
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSelectedSeatsChange = (seats) => {
    setSectedSeats(seats);
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleConfirmation = () => {
    if (selectedSeats.length === 0) {
        alert('Please select a seat first before you can reserve. Thank you!');
      } else {
        navigate('/confirmationpage1');
      }
  }; 

  return (
    <Card
      title="Reservation"
      bordered={false}
      style={{
        width: 300,
      }}
    >
      {reservationDetails.map((details) => {
          const quantity = selectedSeats.length;
          const pricePerTicket = details.price;
          const totalPrice = quantity * pricePerTicket;

          return (
        <div key={details.key}>
          <Row>
            <Col>Movie Title</Col>
            <Col>{details.title}</Col>
          </Row>
          <Row>
            <Col>Location</Col>
            <Col>{details.location}</Col>
          </Row>
          <Row>
            <Col>Schedule</Col>
            <Col>{details.schedule}</Col>
          </Row>
          <Row>
            <Col>Online Payment:  </Col>
            <Col>GCash</Col>
          </Row>
          <Row>
            <Col>Payment Number:  </Col>
            <Col>{details.phoneNumber}</Col>
          </Row>
          <button onClick={handleOpenModal}>Open Cinema Seating</button>
          <Row>
            <Col>Selected Seats:</Col>
            <Col>{selectedSeats.join(', ')}</Col>
          </Row> 
          <Row>
            <Col>Quantity: </Col>
            <Col>{quantity}</Col>
          </Row> 
          <Row>
            <Col>Ticket Price:  </Col>
            <Col>{details.price}</Col>
          </Row>
          <Row>
            <Col>Total Price:  </Col>
            <Col>{totalPrice}</Col>
          </Row>
          <CinemaSeatingModal visible={isModalVisible} onCancel={handleCloseModal} onSelectedSeatsChange={handleSelectedSeatsChange}/>
        </div>
          );
          })}
      <button className="reserve-button" onClick={handleConfirmation}>
        Reserve now!
      </button>
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
    </Card>
  );
};

export default ReservationPage;