import { Typography, Row, Col, Spin } from 'antd';
import "../assets/styles/ReserveConfirmPageOne.css";
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const { Text } = Typography;
export const PaymentConfirmationPageOne = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/paymentConfirmationPageTwo")
        }, 5000)
    })
    return (
        <div className="reserve-container" >
            <Row gutter={[0, 16]}>
                <Col span={24}>
                    <Text className="text-container">
                        Dear Valued Customer,
                        Please wait patiently while we process your GCASH transaction. 
                        Your patience is greatly appreciated.
                        Thank you for choosing us.
                    </Text>
                    <Spin size='large'/>
                </Col>
            </Row>
        </div>
    )
};