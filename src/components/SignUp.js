import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Row, Col, Input, Button, Form, Typography } from 'antd'; // Import Ant Design components
import "../assets/styles/AccountPage.css";

const { Text } = Typography;

export const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gcashNumber: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gcashNumber: '',
  });

  const handleBack = () => {
    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!formData.lastName) {
      errors.lastName = 'Last Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        if (!emailRegex.test(formData.email)) {
          errors.email = 'Invalid Email Address';
        } else {
          const validDomains = ['example.com', 'yourdomain.com'];
          const domain = formData.email.split('@')[1];
          if (!validDomains.includes(domain)) {
            errors.email = 'Invalid Email Domain';
          }
        }
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    if (!formData.gcashNumber) {
      errors.gcashNumber = 'GCASH Number is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      alert('Form submitted successfully');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row gutter={[30, 30]}>
        <Col span={30}>
          <Form.Item label="First Name" validateStatus={formErrors.firstName ? 'error' : ''}>
            <Input
              type="text"
              name="firstName"
              placeholder="ex. Juan"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {formErrors.firstName && (
              <Text type="danger">{formErrors.firstName}</Text>
            )}
          </Form.Item>
        </Col>
        </Row>

        <Row>
        <Col span={35}>
        <Form.Item label="Last Name" validateStatus={formErrors.lastName ? 'error' : ''}>
            <Input
              type="text"
              name="lastName"
              placeholder="ex. Dela Cruz"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {formErrors.lastName && (
              <Text type="danger">{formErrors.lastName}</Text>
            )}
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={60}>
        <Form.Item label="Email Address" validateStatus={formErrors.email ? 'error' : ''}>
            <Input
              type="text"
              name="email"
              placeholder="ex. JuanDelaCruz@JuanDelaCruz.com"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && (
              <Text type="danger">{formErrors.email}</Text>
            )}
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={60}>
        <Form.Item label="Password" validateStatus={formErrors.password ? 'error' : ''}>
            <Input
              type="text"
              name="password"
              placeholder="ex. iluvj3lly4c3"
              value={formData.password}
              onChange={handleInputChange}
            />
            {formErrors.password && (
              <Text type="danger">{formErrors.password}</Text>
            )}
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={40}>
        <Form.Item label="Gcash Number" validateStatus={formErrors.gcashNumber ? 'error' : ''}>
            <Input
              type="text"
              name="gcashnumber"
              placeholder="09999999999"
              value={formData.gcashNumber}
              onChange={handleInputChange}
            />
            {formErrors.gcashNumber && (
              <Text type="danger">{formErrors.gcashNumber}</Text>
            )}
          </Form.Item>
        </Col>
      </Row>
      <Button type="submit">Submit</Button>
      <Button type="back" onClick={handleBack}>Back</Button>
    </Form>
  );
};
