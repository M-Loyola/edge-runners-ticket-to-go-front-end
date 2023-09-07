import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api/apiConfig";
import "../assets/styles/AccountPage.css";
import { setLoggedInUser } from "../reducers/ticketReducer";
import eye from '../assets/icons/eye-regular.svg';
import eyeslash from '../assets/icons/eye-slash-regular.svg';
import { Alert } from 'antd';

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showEmailAlert, setShowEmailAlert] = useState(false);

  const handleEmailOnChange = (e) => {
    const {value} = e.target;
    setEmail(value);
        const isValidEmail = value.includes('@') && value.includes('.com');
        setShowEmailAlert(!isValidEmail);
  };
  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBack = async () => {
    const signInData = {
      email: email,
      password: password,
    };

    await signIn(signInData)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        const localUserData = localStorage.getItem("user");
        dispatch(setLoggedInUser(localUserData));
        alert("Successfully loggedin ");
        navigate("/");
      })
      .catch(() => {
        alert("Wrong email or password!");
      });
  };

  return (
    <>
      <div className="form-group">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailOnChange}
        /> 
        {showEmailAlert && (
            <Alert message="Invalid email domain!" type="error" showIcon />
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password: </label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={handlePasswordOnChange}
        />
        <span className="password-toggle" onClick={togglePasswordVisibility}>
            <img
              src={showPassword ? eyeslash : eye}
              alt = "Toggle Password"
              className={"eye-icon"}
            />
          </span>
      </div>
      <button type="submit" onClick={handleBack}>
        Log In
      </button>

    </>
  );
};
