import { Typography, Row, Col } from 'antd';
import "../assets/styles/ReserveConfirmPageOne.css";

const { Text } = Typography;
export const PaymentConfirmationPageOne = () => {
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
                </Col>
            </Row>
        </div>
    )
};