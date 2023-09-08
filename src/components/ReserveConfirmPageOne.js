import { Typography, Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import "../assets/styles/ReserveConfirmPageOne.css";
const moment = require("moment");


const { Text } = Typography;

export const ReserveConfirmPageOne = () => {
    const [countdown, setCountdown] = useState(10);
    const navigate = useNavigate();
    const orderDetails = useLocation().state;
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const currentDateTime = useSelector((state) => state.ticket.currentDateTime);
    const deadlineDateTime = moment(currentDateTime).add(30, "m").format("MMMM DD, YYYY on h:mm A");
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
    return (
        <div className="reserve-container" >
            <Row gutter={[0, 16]}>
                <Col span={24}>
                    <Text className="text-container">
                        Hello, {userInfo.firstName + " " + userInfo.lastName}<br /> 
                        You've reserved a seat at <span style={{color: 'cadetblue'}}>{orderDetails.cinemaName}, {orderDetails.location} </span>for the
                        movie <span style={{color: 'cadetblue'}}>"{orderDetails.title}" </span>scheduled on &nbsp;
                        <span style={{color: 'cadetblue'}}>{moment(orderDetails.schedule).format("MMMM DD, YYYY on h:mm A")}</span>
                    </Text>
                </Col>
                <Col span={24}>
                    <Text className="text-container">
                        The total cost for your <br />
                        reservation is <span style={{color: 'green'}}>₱{orderDetails.totalPrice}. </span>To secure your <br />
                        seat, please make the payment
                        before <span style={{color: 'red'}}>{deadlineDateTime}.</span><br /><br />
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
