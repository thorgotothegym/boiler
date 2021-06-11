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

import axios from "axios";

export const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loginUser = async (user: string, pass: string) => {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    };
    const bodyFormat = new FormData();
    bodyFormat.set('username', user)
    bodyFormat.set('password', pass)
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/auth/login`, bodyFormat, config
      );
      console.log("reponse", response);
    } catch (error) {
      console.log("error", error);
    }
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
            loginUser(userName, password);
          }}
        >
          Enter
        </Button>
      </Space>
    </WrapperLogin>
  );
};

const WrapperLogin = styled.div``;
