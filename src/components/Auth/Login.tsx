import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import {
  GoogleOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import "./Login.scss";

export const Login: React.FC = () => {
  const history = useHistory();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    history.push("/dashboard");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="login-info">
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="www.google.com" className="social">
            <GoogleOutlined />
          </a>
          <a href="www.facebook.com" className="social">
            <FacebookOutlined />
          </a>
          <a href="www.linkedin.com" className="social">
            <LinkedinOutlined />
          </a>
        </div>
        <span>or use your account</span>
      </div>
      <Form
        className="login-form"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input placeholder="Email" autoComplete="off" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password
            autoComplete="off"
            placeholder="Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button className="submit-btn" type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
