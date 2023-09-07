import React, { useEffect, useState } from 'react';
import { Typography, Row, Col, Button } from 'antd';
import "../assets/styles/ReservationStatus.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { getUserOrderList } from '../api/apiConfig';
import { updateOrderPaidStatus } from '../api/apiConfig';
const moment = require("moment");

const { Text } = Typography;
export const ReservationStatus = () => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const [userOrderList, setUserOrderList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getUserOrderList(userInfo.id).then((response) => {
            setUserOrderList(response.data);
        });
        // eslint-disable-next-line
    }, []);
    const onPayNowHandler = async(orderNumber) => {
        await updateOrderPaidStatus(orderNumber).then((response) => {
            navigate('/paymentConfirmationPageOne')
        })
    }
    return (
        <div>
            <h3>RESERVATION:</h3>
            {userOrderList.map((reservation, index) => (
                <Row key={index} className="reservationMain-container">
                    <Col span={12} className="reservation-card">
                        <img src={reservation.imageUrl} alt={reservation.movieTitle} />
                    </Col>
                    <Col span={12} className="reservation-details">
                        <Text>
                            Movie Title: {reservation.title}<br />
                            Location: {reservation.location}<br />
                            Schedule: {moment(reservation.schedule).format("MMMM DD, YYYY on h:mm A")}<br />
                            Status: {reservation.isPayed ? "Paid" : "Reserved"}<br />
                            Reserved Seats: {reservation.reservedSeats}<br />
                            <div className="button-container">
                                <NavLink><br />
                                    <Button disabled={reservation.isPayed ? true : false} onClick={() => onPayNowHandler(reservation.orderNumber)}>
                                        Pay Now
                                    </Button>
                                </NavLink>
                                {reservation.isPayed ? <div>QR Code: <img src={reservation.qrCodeUrl} alt ={reservation.qrCodeUrl}></img></div> : <div></div>}
                            </div>
                        </Text>
                    </Col>

                </Row>
            ))}
        </div>
    );
};
