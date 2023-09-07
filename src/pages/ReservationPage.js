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
  console.log(valToBePushed);
  const userInfo = useSelector((state) => state.ticket.user);
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
  console.log(userInfo.id);
  const handleConfirmation = async () => {
    console.log(userInfo, "ttrsetsetjk");
    const orderDetails = {
      title: reservationDetails[0].title,
      cinemaName: reservationDetails[0].cinemaName,
      schedule: reservationDetails[0].schedule,
      location: reservationDetails[0].location,
      reservedSeats: selectedSeats.join(","),
      duration: reservationDetails[0].duration,
      isPayed: true,
      price: reservationDetails[0].price,
      quantity: selectedSeats.length,
      totalPrice: selectedSeats.length * reservationDetails[0].price,
      user_id: userInfo.id,
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
                  <Row gutter={[16, 16]}>
                    <Col span={8} className="label-col">Movie Title: </Col>
                    <Col span={16} className="content-col">{details.title}</Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col span={8} className="label-col">Cinema Name: </Col>
                    <Col span={16} className="content-col">{details.cinemaName}</Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col span={8} className="label-col">Location: </Col>
                    <Col span={16} className="content-col">{details.location}</Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col span={8} className="label-col">Schedule: </Col>
                    <Col span={16} className="content-col">{details.schedule}</Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col span={8} className="label-col">Online Payment: </Col>
                    <Col span={16} className="content-col"> &nbsp;GCash</Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col span={8} className="label-col">Payment Number: </Col>
                    <Col span={16} className="content-col">{userInfo.mobile_number}</Col>
                  </Row>
                  <button
                    className="open-cinema-seating"
                    onClick={handleOpenModal}
                  >
                    Open Cinema Seating
                  </button>
                  <Row gutter={[16, 16]}>
                    <Col span={8} className="label-col">Selected Seats: </Col>
                    <Col span={16} className="content-col">{selectedSeats.join(", ")}</Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col span={8} className="label-col">Quantity: </Col>
                    <Col span={16} className="content-col">{quantity}</Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col span={8} className="label-col">Ticket Price: </Col>
                    <Col span={16} className="content-col">{details.price}</Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col span={8} className="label-col">Total Price: </Col>
                    <Col span={16} className="content-col">{totalPrice}</Col>
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
          <button className="button">Pay now!</button>
          <br/><button className="back-button" onClick={handleBack}>
            Back
          </button>
        </Card>
      </div>
    </div>
  );
};

export default ReservationPage;
