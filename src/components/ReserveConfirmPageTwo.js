import { Typography, Row, Col, Button } from 'antd';
import "../assets/styles/ReserveConfirmPageOne.css";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

export const ReserveConfirmPageTwo = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
      };
    return (
        <div className="reserve-container" >
            <Row gutter={[0, 16]}>
                <Col span={24}>
                    <Text className="text-container">
                        Your ticket is now reserved!<br />
                        Thank you for trusting us.
                    </Text>
                    <div className="button-container">
                        <NavLink to="/"><br/>
                            <Button className="button" onClick={handleBack}>
                                Return Home
                            </Button>
                        </NavLink>
                    </div>
                </Col>
            </Row>
        </div>
    );
};
