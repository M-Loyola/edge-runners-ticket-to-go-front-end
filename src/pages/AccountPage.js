import { useState } from 'react';
import "../assets/styles/AccountPage.css";
import { Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SignIn } from '../components/SignIn';
import { SignUp } from '../components/SignUp';
import { UserAccount } from "../components/UserAccount";

export const AccountPage = () => {
    const { TabPane } = Tabs;
    const navigate = useNavigate();
    const [isSignedIn, setIsSignedIn] = useState(false);

  const onChange = (key) => {
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
  <div className="login-container">
  <h1 className="banner-text-login">
    "Unleash Your Cinematic Journey: Stream, Watch, Repeat!"
  </h1>

{isSignedIn ? (
        <UserAccount handleSignOut={handleSignOut} />
      ) : (
  <div className="tabs-container">
    <Tabs defaultActiveKey="1" onChange={onChange}>
      <TabPane tab="Log In" key="1">
        <SignIn handleSignIn={handleSignIn} />
      </TabPane>
      <TabPane tab="Sign Up" key="2">
        <SignUp />
      </TabPane>
    </Tabs>
  </div>
)}
    <button className="back-button" onClick={handleBack}>
        Back
      </button>
    </div>

  );
  };
  