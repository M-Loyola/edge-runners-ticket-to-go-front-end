import { Button, Card, Col, Row } from 'antd';
import { useState } from "react";
import CinemaSeatingModal from '../components/CinemaSeatingModal';

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
  // reservationDetails.map((details) => console.log(details))
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };
  
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Card
        title="Card title"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        {
          reservationDetails.map((details) => {
            (
              <>
                <Row>
                  <Col>Movie Title</Col>
                  <Col>{details.title}</Col>
                </Row>
                <Row>
                  <Col>Location</Col>
                  <Col>{details.location}</Col>
                </Row>
                <Row>
                  <Col>Location</Col>
                  <Col>{details.location}</Col>
                </Row>
                <Row>
                  <Col>Online Payment</Col>
                  <Col>GCash</Col>
                </Row>
                <Row>
                  <Col>Payment Number</Col>
                  <Col>{details.phoneNumber}</Col>
                </Row>
                <button onClick={handleOpenModal}>Open Cinema Seating</button>
                <Row>
                  <Col>Ticket Price</Col>
                  <Col>{details.price}</Col>
                </Row>
                <Row>
                  <Col>Total Price</Col>
                  <Col>{details.price*3}</Col>
                </Row>
                <CinemaSeatingModal visible={isModalVisible} onCancel={handleCloseModal} />
              </>
            )
          })
        }
      </Card>
    </div>
  );
};

export default ReservationPage;
