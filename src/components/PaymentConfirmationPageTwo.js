import { Typography, Row, Col, Spin } from 'antd';
import "../assets/styles/ReserveConfirmPageOne.css";
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const { Text } = Typography;
export const PaymentConfirmationPageTwo = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            
            navigate("/paymentConfirmationPageThree")
        }, 5000)
    })
    return (
        <div className="reserve-container" >
            <Row gutter={[0, 16]}>
                <Col span={24}>
                    <Text className="text-container">
                        Verifying payment, please wait a moment
                    </Text>
                    <Spin size='large'/>
                </Col>
            </Row>
        </div>
    )
};