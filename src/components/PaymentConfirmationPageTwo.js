import { Typography, Row, Col } from 'antd';
import "../assets/styles/ReserveConfirmPageOne.css";

const { Text } = Typography;
export const PaymentConfirmationPageTwo = () => {
    return (
        <div className="reserve-container" >
            <Row gutter={[0, 16]}>
                <Col span={24}>
                    <Text className="text-container">
                        Verifying payment, please wait a moment
                    </Text>
                </Col>
            </Row>
        </div>
    )
};