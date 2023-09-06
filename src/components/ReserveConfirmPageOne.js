import { Typography, Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/styles/ReserveConfirmPageOne.css";


const { Text } = Typography;

export const ReserveConfirmPageOne = () => {
    const [countdown, setCountdown] = useState(20);
    const navigate = useNavigate();

    useEffect(() => {
        const delay = setTimeout(() => {
            if (countdown === 1) {
                navigate('/confirmationpage2');
            } else {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }
        }, 1000);
        return () => clearTimeout(delay);
    }, [countdown, navigate]);
    const reservationData = {
        location: "SM Manila",
        movieTitle: "Bumblebee",
        scheduledDate: "09/03/23",
        timeRange: "1:00 PM to 3:00 PM",
        paymentDeadline: "09/02/23",
        price: "$7"
    };
    return (
        <div className="reserve-container" >
            <Row gutter={[0, 16]}>
                <Col span={24}>
                    <Text className="text-container">
                        Hello,<br />
                        You've reserved a seat at {reservationData.location} Cinema One, for the
                        movie "{reservationData.movieTitle}" scheduled <br />
                        on {reservationData.scheduledDate} from {reservationData.timeRange}.<br /><br />
                    </Text>
                </Col>

                <Col span={24}>
                    <Text className="text-container">
                        The total cost for your <br />
                        reservation is {reservationData.price}. To secure your <br />
                        seat, please make the payment
                        before {reservationData.paymentDeadline}.<br /><br />
                    </Text>
                </Col>
                
                <Col span={24}>
                    <Text className="text-container">
                        <br /> Reservation is on Process...<br />
                        Redirecting to another page in {countdown} seconds...
                    </Text>
                </Col>
            </Row>
        </div >
    );
};
