import React, { useState, useEffect } from "react";
import { Input, Tooltip, Space, Button, Checkbox, Form } from "antd";
import { useHistory } from "react-router";
import styled from "styled-components";
import {
  InfoCircleOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";

export const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loginUser = async (user: string, pass: string) => {
    console.log(userName, pass);
    if (userName === "paco" && pass === "paco") {
      console.log("you can pass");
    } else {
      alert("you dont have rights");
    }
  };

  const handleSubmit = (user: string, pass: string) => {
    console.log("user", user, "pass", pass);
  };

  return (
    <WrapperLogin>
      <h1>ThermoCo Admin</h1>
      <Space direction="horizontal">
        <form>
          <Input
            placeholder="Enter your username"
            suffix={<UserOutlined className="site-form-item-icon" />}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            data-testid="input-username"
          />
          <Input.Password
            placeholder="input password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            data-testid="input-password"
          />
        </form>
        <Button
          type="primary"
          data-testid="button-login"
          onClick={() => {
            handleSubmit(userName, password);
          }}
        >
          Enter
        </Button>
      </Space>
    </WrapperLogin>
  );
};

const WrapperLogin = styled.div`

`;
