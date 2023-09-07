import { useNavigate } from 'react-router-dom';
import "../assets/styles/AccountPage.css";
import { Typography, Row, Col } from 'antd';

const { Text } = Typography;

export const UserAccount = () => {
const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
      };

      const handleLogout = () => {
        navigate('/AccountPage'); 
      };

      return (
 <div>
    <div className="reserve-container" >
            <Row gutter={[0, 16]}>
                <Col span={24}>
                    <Text className="fullname-container">
                        Full Name 
                    </Text>
                </Col>

                <Col span={24}>
                    <Text className="contactnumber-container">
                        Contact
                    </Text>
                </Col>
                
                <Col span={24}>
                    <Text className="emailaddress-container">
                        Email Address
                    </Text>
                </Col>
        
                <Col>
                </Col>
            </Row>
      </div >
            <button className="button" onClick={handleLogout}>
             Logout
            </button>
            <button type="submit" className='button' onClick={handleBack}>back</button>
       </div>
);
};
