import React from "react";
import { Login } from "../../components/Auth/Login";
import { Form, Button } from "antd";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <>
      <div className="main-container d-flex">
        <div className="login-block d-flex">
          <Login />
        </div>
        <div className="signup-block d-flex">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <Form.Item>
            <Button className="signup-btn" type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </div>
      </div>
    </>
  );
};

export default Home;
