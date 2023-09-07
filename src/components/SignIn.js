import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api/apiConfig";
import "../assets/styles/AccountPage.css";
import { setLoggedInUser } from "../reducers/ticketReducer";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      </div>
      <div className="form-group">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordOnChange}
        />
      </div>
      <button type="submit" onClick={handleBack}>
        Log In
      </button>
    </>
  );
};
