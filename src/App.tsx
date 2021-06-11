import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Row, Col } from "antd";
import { Login } from "./containers/Login/Login";
import { Sensors } from './containers/Sensors/Sensors';
import styled from "styled-components";

export const App = () => {
  return (
    <WrapperApp>
      <Row>
        <Col span={2}>space</Col>
        <Col span={20}>
          <BrowserRouter>
          <Switch>
          <Route
              data-testid="route-sensors"
              exact={true}
              path="/"
              component={Login}
            />
            <Route exact path="/sensors" component={Sensors} />
          </Switch>
        </BrowserRouter>
        </Col>
        <Col span={2}>space</Col>
      </Row>
    </WrapperApp>
  );
};

const WrapperApp = styled.div`
  margin: 2rem 0 0;
`;
