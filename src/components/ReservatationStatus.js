import React from 'react';
import { Typography, Row, Col ,Button} from 'antd';
import "../assets/styles/ReservationStatus.css";
import { NavLink } from 'react-router-dom';


const { Text } = Typography;

const reservationData = [
    {
        imageUrl: "https://i.pinimg.com/originals/5f/1c/3f/5f1c3f76297204de2346b0bfce854000.jpg",
        movieTitle: "Bumblebee",
        date: "09/03/23",
        location: "SM Manila",
        schedule: "1:00 PM to 3:00 PM",
        status: "Reserved",
    },
];

export const ReservationStatus = () => {
    return (
        <div>
            <h3>RESERVATION:</h3>
            {reservationData.map((reservation, index) => (
                <Row key={index} className="reservationMain-container">
                    <Col span={12} className="reservation-card">
                        <img src={reservation.imageUrl} alt={reservation.movieTitle} />
                    </Col>
                    <Col span={12} className="reservation-details">
                        <Text>
                            Movie Title: {reservation.movieTitle}<br />
                            Date: {reservation.date}<br />
                            Location: {reservation.location}<br />
                            Schedule: {reservation.schedule}<br />
                            Status: {reservation.status}<br />
                            <div className="button-container">
                                <NavLink to="/"><br />
                                    <Button>
                                        Pay Now
                                    </Button>
                                </NavLink>
                            </div>
                        </Text>
                    </Col>

                </Row>
            ))}
        </div>
    );
};
