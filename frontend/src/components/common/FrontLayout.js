import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col } from "antd";

import { CartContext } from "../../contexts/CartContext";
import Cart from "../cart";

import "antd/dist/antd.css";
import "../../css/Style.scss";

const { Header, Content } = Layout;

const FrontLayout = (props) => {
  const { itemCount } = useContext(CartContext);
  return (
    <Layout className="front">
      <Header>
        <div className="container">
          <Row justify="space-between">
            <Col className="logo">
              <Link to="/">Robot Market</Link>
            </Col>
            <Col align="end" className="rightside">
              <Cart />
            </Col>
          </Row>
        </div>
      </Header>
      <Content>{props.children}</Content>
    </Layout>
  );
};

export default FrontLayout;
