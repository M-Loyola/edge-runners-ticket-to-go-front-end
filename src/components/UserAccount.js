import { Col, Row, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../assets/styles/AccountPage.css";
import { loggedOutUser } from "../reducers/ticketReducer";

const { Text } = Typography;

export const UserAccount = () => {
  const userData = JSON.parse(localStorage.getItem("user"));

  const name = userData?.firstName + " " + userData?.lastName || "";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBack = () => {
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(loggedOutUser(null));
    navigate("/");
  };

  return (
    <div>
      <div className="reserve-container">
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <Text className="fullname-container">Full Name: {name}</Text>
          </Col>

          <Col span={24}>
            <Text className="contactnumber-container">
              Contact {userData.mobile_number}
            </Text>
          </Col>

          <Col span={24}>
            <Text className="emailaddress-container">
              Email Address {userData.email}
            </Text>
          </Col>

          <Col></Col>
        </Row>
      </div>
      <button className="button" onClick={handleLogout}>
        Logout
      </button>
      <button type="submit" className="button" onClick={handleBack}>
        back
      </button>
    </div>
  );
};
