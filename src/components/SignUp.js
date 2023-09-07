import { Alert, Button, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../api/apiConfig";
import "../assets/styles/AccountPage.css";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile_number: "",
  });

  const [showEmptyFieldAlert, setShowEmptyFieldAlert] = useState(false);
  const [showEmailAlert, setShowEmailAlert] = useState(false);
  const [showGcashNumberValid, setshowGcashNumberValid] = useState(false);
  const [showFirstNameSpacesAlert, setShowFirstNameSpacesAlert] =
    useState(false);
  const [showLastNameSpacesAlert, setShowLastNameSpacesAlert] = useState(false);
  const [showEmailSpacesAlert, setShowEmailSpacesAlert] = useState(false);
  const [showPasswordSpacesAlert, setShowPasswordSpacesAlert] = useState(false);
  const [showGcashNumberSpacesAlert, setShowGcashNumberSpacesAlert] =
    useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const trimmedValue = value.trim();

    const spacesAlert = {
      firstName: setShowFirstNameSpacesAlert,
      lastName: setShowLastNameSpacesAlert,
      email: setShowEmailSpacesAlert,
      passowd: setShowPasswordSpacesAlert,
      mobile_number: setShowGcashNumberSpacesAlert,
    };

    if (spacesAlert[name]) {
      spacesAlert[name](value !== trimmedValue);
    }

    if (name === "email") {
      const isValidEmail = value.includes("@") && value.includes(".com");
      setShowEmailAlert(!isValidEmail);
    }

    if (name === "mobile_number") {
      const isValidGcashNumber =
        /^\d{11}$/.test(value) && value.startsWith("09");
      setshowGcashNumberValid(!isValidGcashNumber);
    }
  };
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const hasAlerts =
      showFirstNameSpacesAlert ||
      showLastNameSpacesAlert ||
      showEmailSpacesAlert ||
      showPasswordSpacesAlert ||
      showGcashNumberSpacesAlert ||
      showEmptyFieldAlert ||
      showEmailAlert;
    const isEmpty = Object.values(formData).some((value) => value === "");

    if (hasAlerts) {
      alert("Please fix the form errors before submitting.");
      if (!isEmpty) {
        setShowEmptyFieldAlert(false);
        alert("Form submitted successfully");
      }
    } else if (isEmpty) {
      setShowEmptyFieldAlert(true);
    } else {
      setShowEmptyFieldAlert(false);
      await signUp(formData)
        .then(() => {
          navigate("/");
          alert("Signed Up successfully");
        })
        .catch(() => {
          alert(
            "Cannot sign up, Please check of you have an existing account using the email and mobile number."
          );
        });
    }
  };

  return (
    <Form onSubmit={handleFormSubmit} className="form-container">
      <div className="form-row">
      <label className="label-col">First Name:</label>
            <Input
              type="text"
              name="firstName"
              placeholder="ex. Juan"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {showFirstNameSpacesAlert && (
              <Alert
                message="Please remove extra spaces"
                type="error"
                showIcon
              />
            )}
          </div>

          <div className="form-row">
          <label className="label-col">Last Name:</label>
            <Input
              type="text"
              name="lastName"
              placeholder="ex. Dela Cruz"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {showLastNameSpacesAlert && (
              <Alert
                message="Please remove extra spaces"
                type="error"
                showIcon
              />
            )}
        </div>

        <div className="form-row">
        <label className="label-col">Email Address:</label>
            <Input
              type="text"
              name="email"
              placeholder="ex. JuanDelaCruz@JuanDelaCruz.com"
              value={formData.email}
              onChange={handleInputChange}
            />
            {showEmailSpacesAlert && (
              <Alert
                message="Please remove extra spaces"
                type="error"
                showIcon
              />
            )}
            {showEmailAlert && (
              <Alert message="Invalid email domain!" type="error" showIcon />
            )}
        </div>

        <div className="form-row">
        <label className="label-col">Password:</label>
            <Input
              type="password"
              name="password"
              placeholder="ex. iluvj3lly4c3"
              value={formData.password}
              onChange={handleInputChange}
            />
            {showPasswordSpacesAlert && (
              <Alert
                message="Please remove extra spaces"
                type="error"
                showIcon
              />
            )}
        </div>

        <div className="form-row">
        <label className="label-col">Gcash Number:</label>
            <Input
              type="text"
              name="mobile_number"
              placeholder="09999999999"
              value={formData.mobile_number}
              onChange={handleInputChange}
            />
            {showGcashNumberSpacesAlert && (
              <Alert
                message="Please remove extra spaces"
                type="error"
                showIcon
              />
            )}
            {showGcashNumberValid && (
              <Alert
                message="Please use valid Gcash Number"
                type="error"
                showIcon
              />
            )}
        </div>

      <Button
        type="submit"
        className="submit-button"
        onClick={handleFormSubmit}
        style={{ backgroundColor: "black", color: "#D2DE32" }}
      >
        Submit
      </Button>
      {showEmptyFieldAlert && (
        <Alert message="Please fill all the fields." type="error" showIcon />
      )}
    </Form>
  );
};
