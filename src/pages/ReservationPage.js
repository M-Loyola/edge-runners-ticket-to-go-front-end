import { Card, Col, Row } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { creatNewOrder, updateOccupiedSeats } from "../api/apiConfig";
import "../assets/styles/ReservationPage.css";
import CinemaSeatingModal from "../components/CinemaSeatingModal";
import { setCurrentDateTime } from "../reducers/ticketReducer";

const ReservationPage = () => {
  const reservationDetails = [];
  const dispatch = useDispatch();
  const valToBePushed = useSelector((state) => state.ticket.selectedMovie);
  reservationDetails.push(valToBePushed);
  const userInfo = JSON.parse(localStorage.getItem("user"));
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
    navigate("/");
  };
  const handleConfirmation = async () => {
    const orderDetails = {
      title: reservationDetails[0].title,
      cinemaName: reservationDetails[0].cinemaName,
      schedule: reservationDetails[0].schedule,
      location: reservationDetails[0].location,
      reservedSeats: selectedSeats.join(","),
      imageUrl: reservationDetails[0].image,
      duration: reservationDetails[0].duration,
      isPayed: false,
      price: reservationDetails[0].price,
      quantity: selectedSeats.length,
      totalPrice: selectedSeats.length * reservationDetails[0].price,
      userId: userInfo.id,
    };

    await creatNewOrder(orderDetails).then(async () => {
      dispatch(setCurrentDateTime(new Date().toISOString()));
      await updateOccupiedSeats(
        reservationDetails[0].id,
        selectedSeats.join(",")
      ).then(() => {
        navigate("/confirmationpage1", { state: orderDetails });
      });
    });
  };
  const handlePayNow = async() => {
    const orderDetails = {
      title: reservationDetails[0].title,
      cinemaName: reservationDetails[0].cinemaName,
      schedule: reservationDetails[0].schedule,
      location: reservationDetails[0].location,
      reservedSeats: selectedSeats.join(","),
      imageUrl: reservationDetails[0].image,
      duration: reservationDetails[0].duration,
      isPayed: true,
      price: reservationDetails[0].price,
      quantity: selectedSeats.length,
      totalPrice: selectedSeats.length * reservationDetails[0].price,
      userId: userInfo.id,
    };
    await creatNewOrder(orderDetails).then(async () => {
      dispatch(setCurrentDateTime(new Date().toISOString()));
      await updateOccupiedSeats(
        reservationDetails[0].id,
        selectedSeats.join(",")
      ).then(() => {
        navigate("/paymentConfirmationPageOne", { state: orderDetails });
      });
    });
  }
  const hasNoSelectedSeats = () => {
    if (selectedSeats.length === 0) {
      return true;
    }
    return false;
  };
  return (
    <div className="page-container">
      <div className="card-container-reservation">
        <Card
          className="title-reservation"
          title="RESERVATION"
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
                  <Col>
                    <img src={details.image} alt={details.image} />
                  </Col>
                </Row>
                <br />
                <div className="movie-details-container">
                  <Row>
                    <Col>Movie Title: </Col>
                    <Col>{details.title}</Col>
                  </Row>
                  <Row>
                    <Col>Cinema Name: </Col>
                    <Col>{details.cinemaName}</Col>
                  </Row>
                  <Row>
                    <Col>Location: </Col>
                    <Col>{details.location}</Col>
                  </Row>
                  <Row>
                    <Col>Schedule: </Col>
                    <Col>{details.schedule}</Col>
                  </Row>
                  <Row>
                    <Col>Online Payment: </Col>
                    <Col> &nbsp;GCash</Col>
                  </Row>
                  <Row>
                    <Col>Payment Number: </Col>
                    <Col>{userInfo.mobile_number}</Col>
                  </Row>
                  <button
                    className="open-cinema-seating"
                    onClick={handleOpenModal}
                  >
                    Open Cinema Seating
                  </button>
                  <Row>
                    <Col>Selected Seats: </Col>
                    <Col>{selectedSeats.join(", ")}</Col>
                  </Row>
                  <Row>
                    <Col>Quantity: </Col>
                    <Col>{quantity}</Col>
                  </Row>
                  <Row>
                    <Col>Ticket Price: </Col>
                    <Col>{details.price}</Col>
                  </Row>
                  <Row>
                    <Col>Total Price: </Col>
                    <Col>{totalPrice}</Col>
                  </Row>
                </div>
                <CinemaSeatingModal
                  visible={isModalVisible}
                  onCancel={handleCloseModal}
                  onSelectedSeatsChange={handleSelectedSeatsChange}
                />
              </div>
            );
          })}
          <button
            className="button"
            onClick={handleConfirmation}
            disabled={hasNoSelectedSeats()}
          >
            Reserve now!
          </button>
          <button className="button" onClick={handlePayNow} disabled={hasNoSelectedSeats()} >Pay now!</button>
          <button className="back-button" onClick={handleBack}>
            Back
          </button>
        </Card>
      </div>
    </div>
  );
};

export default ReservationPage;
