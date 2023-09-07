import { Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import "../assets/styles/AccountPage.css";
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";

export const AccountPage = () => {
  const { TabPane } = Tabs;
  const navigate = useNavigate();
  const onChange = (key) => {};

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <h1 className="banner-text-login">
        "Unleash Your Cinematic Journey: Stream, Watch, Repeat!"
      </h1>

      <div className="tabs-container">
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Log In" key="1">
            <SignIn />
          </TabPane>
          <TabPane tab="Sign Up" key="2">
            <SignUp />
          </TabPane>
        </Tabs>
      </div>

      <button className="back-button" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};
