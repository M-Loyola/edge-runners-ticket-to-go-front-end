import React from 'react';
import { Typography, Row, Col } from 'antd';
import "../assets/styles/ReservationStatus.css";


const { Text } = Typography;

const reservationData = [
    {
        imageUrl: "https://i.pinimg.com/originals/5f/1c/3f/5f1c3f76297204de2346b0bfce854000.jpg",
        movieTitle: "Bumblebee",
        date: "09/03/23",
        Location: "SM Manila",
        schedule: "1:00 PM to 3:00 PM",
        status: "Reserved",
    },
    {
        imageUrl: "https://i.pinimg.com/originals/5f/1c/3f/5f1c3f76297204de2346b0bfce854000.jpg",
        movieTitle: "Bumblebee",
        date: "09/03/23",
        Location: "SM Manila",
        schedule: "1:00 PM to 3:00 PM",
        status: "Reserved",
    }
];


export const ReservationStatus = () => {
    return (
        <div>
            <h3>RESERVATION : </h3>
            <Row className="reservationMain-container">
                <Row className='reservation-container'>
                    {reservationData.map((reservation, index) => (
                        <React.Fragment key={index}>
                            <Col span={12}>
                                <div className="reservation-card">
                                    <img src={reservation.imageUrl} alt={reservation.movieTitle} />
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="reservation-details">
                                    <Text>
                                        Movie Title: {reservation.movieTitle}<br />
                                        Date: {reservation.date}<br />
                                        Location: {reservation.Location}<br />
                                        Schedule: {reservation.schedule}<br />
                                        Status: {reservation.status}<br />
                                    </Text>
                                </div>
                            </Col>
                        </React.Fragment>))}
                </Row>

            </Row>

        </div>
    );
};
