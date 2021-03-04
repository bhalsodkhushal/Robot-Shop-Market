import React, { useContext } from "react";
import { Col, Row, Button, Space } from "antd";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import { CartContext } from "../../contexts/CartContext";
import { ThaiBahtAmountFormat } from "../../utils/Helpers";

const CartItem = ({ product }) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 16, lg: 32 }}>
      <Col xs={24} sm={12} md={8} lg={6}>
        <div className="cart-img">
          <img alt={product.name} src={product.image} />
        </div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <h2>{product.name}</h2>
        <h3>Price: {ThaiBahtAmountFormat(product.price)} </h3>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <h3>Qty: {product.quantity}</h3>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Space>
          <Button onClick={() => increase(product)} type="primary">
            <PlusCircleOutlined />
          </Button>

          {product.quantity > 1 && (
            <Button onClick={() => decrease(product)} type="primary">
              <MinusCircleOutlined />
            </Button>
          )}

          {product.quantity === 1 && (
            <Button onClick={() => removeProduct(product)} type="primary">
              <DeleteOutlined />
            </Button>
          )}
        </Space>
      </Col>
    </Row>
  );
};

export default CartItem;
