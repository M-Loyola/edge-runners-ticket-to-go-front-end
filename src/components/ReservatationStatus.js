import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Text } = Typography;

const reservationData = [
    {
        movieTitle: "Bumblebee",
        date: "09/03/23",
        cinemaLocation: "SM Manila",
        schedule: "1:00 PM to 3:00 PM",
        status: "Confirmed",
        imageUrl: "https://i.pinimg.com/originals/5f/1c/3f/5f1c3f76297204de2346b0bfce854000.jpg",
    }
];

export const ReservationStatus = () => {
    return (
        <div>
            <h3>RESERVATION : </h3>
            <Row gutter={[16, 16]}> {reservationData.map((reservation, index) => (
            
            <React.Fragment key={index}>
                <Col span={12}>
                    <div className="reservation-card">
                        <img src={reservation.imageUrl} alt={reservation.movieTitle} />
                    </div>
                </Col>
            </React.Fragment>))}
        </Row>
        </div>
    );
};
