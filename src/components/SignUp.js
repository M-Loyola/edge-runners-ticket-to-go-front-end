import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Alert, Row, Col, Input, Button, Form } from 'antd';
import "../assets/styles/AccountPage.css";

export const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gcashNumber: '',
  });
  
  const [showEmptyFieldAlert, setShowEmptyFieldAlert] = useState(false);
  const [showEmailAlert, setShowEmailAlert] = useState(false);
  const [showGcashNumberValid, setshowGcashNumberValid] = useState(false);
  const [showFirstNameSpacesAlert, setShowFirstNameSpacesAlert] = useState(false);
  const [showLastNameSpacesAlert, setShowLastNameSpacesAlert] = useState(false);
  const [showEmailSpacesAlert, setShowEmailSpacesAlert] = useState(false);
  const [showPasswordSpacesAlert, setShowPasswordSpacesAlert] = useState(false);
  const [showGcashNumberSpacesAlert, setShowGcashNumberSpacesAlert] = useState(false);

  const handleBack = () => {
    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const trimmedValue = value.trim();

    if (value !== trimmedValue) {
        if (name === 'firstName') {
          setShowFirstNameSpacesAlert(true);
        } else if (name === 'lastName') {
          setShowLastNameSpacesAlert(true);
        } else if (name === 'email') {
          setShowEmailSpacesAlert(true);
        } else if (name === 'password') {
          setShowPasswordSpacesAlert(true);
        } else if (name === 'gcashNumber') {
          setShowGcashNumberSpacesAlert(true);
        }
      } else {
        if (name === 'firstName') {
          setShowFirstNameSpacesAlert(false);
        } else if (name === 'lastName') {
          setShowLastNameSpacesAlert(false);
        } else if (name === 'email') {
          setShowEmailSpacesAlert(false);
        } else if (name === 'password') {
          setShowPasswordSpacesAlert(false);
        } else if (name === 'gcashNumber') {
          setShowGcashNumberSpacesAlert(false);
        }
      }

      if (name === 'email') {
        const isValidEmail = value.includes('@') && value.includes('.com');
        setShowEmailAlert(!isValidEmail);
      }

      if (name == 'gcashNumber' ){
        const isValidGcashNumber = /^\d{11}$/.test(value) && value.startsWith('0');
        setshowGcashNumberValid(!isValidGcashNumber);
      }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
const hasAlerts = showFirstNameSpacesAlert || showLastNameSpacesAlert || showEmailSpacesAlert || showPasswordSpacesAlert 
                || showGcashNumberSpacesAlert || showEmptyFieldAlert || showEmailAlert;
  const isEmpty = Object.values(formData).some(value => value === '');

  if (hasAlerts) {
    alert('Please fix the form errors before submitting.');
        if (!isEmpty) {
            setShowEmptyFieldAlert(false);
            alert('Form submitted successfully');
        }
  } else if (isEmpty) {
        setShowEmptyFieldAlert(true);
    } else {
        setShowEmptyFieldAlert(false);
        alert('Form submitted successfully');
      }
};


  return (
    <Form onSubmit={handleFormSubmit}>
      <Row gutter={[40, 40]}>
        <Col span={30}>
          <Form.Item label="First Name">
            <Input
              type="text"
              name="firstName"
              placeholder="ex. Juan"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            { showFirstNameSpacesAlert && (
                <Alert message="Please remove extra spaces" type="error" showIcon />
            )}
          </Form.Item>
        </Col>
        </Row>

        <Row>
        <Col span={35}>
        <Form.Item label="Last Name">
            <Input
              type="text"
              name="lastName"
              placeholder="ex. Dela Cruz"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            { showLastNameSpacesAlert && (
                <Alert message="Please remove extra spaces" type="error" showIcon />
            )}
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={100}>
        <Form.Item label="Email Address">
            <Input
              type="text"
              name="email"
              placeholder="ex. JuanDelaCruz@JuanDelaCruz.com"
              value={formData.email}
              onChange={handleInputChange}
            />
            { showEmailSpacesAlert && (
                <Alert message="Please remove extra spaces" type="error" showIcon />
            )}
            {showEmailAlert && (
                <Alert message="Invalid email domain!" type="error" showIcon />
            )}
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={80}>
        <Form.Item label="Password">
            <Input
              type="text"
              name="password"
              placeholder="ex. iluvj3lly4c3"
              value={formData.password}
              onChange={handleInputChange}
            />
            { showPasswordSpacesAlert && (
                <Alert message="Please remove extra spaces" type="error" showIcon />
            )}
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={40}>
        <Form.Item label="Gcash Number">
            <Input
              type="text"
              name="gcashNumber"
              placeholder="09999999999"
              value={formData.gcashNumber}
              onChange={handleInputChange}
            />
            { showGcashNumberSpacesAlert && (
                <Alert message="Please remove extra spaces" type="error" showIcon />
            )}
            { showGcashNumberValid && (
                <Alert message="Please use valid Gcash Number" type="error" showIcon />
            )}
          </Form.Item>
        </Col>
      </Row>
      <Button type="submit" className='submit-button' onClick={handleFormSubmit}>Submit</Button> 
      <Button type="back" onClick={handleBack}>Back</Button>
      {showEmptyFieldAlert && (
        <Alert message= "Please fill all the fields." type='error' showIcon />
      )}
    </Form>
  );
};
