import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Col, Row, Button, Space, Modal } from "antd";

import { CartContext } from "../../contexts/CartContext";
import { ThaiBahtAmountFormat } from "../../utils/Helpers";

import CartProducts from "./CartProducts";
const Cart = () => {
  const { total, cartItems, itemCount, clearCart } = useContext(CartContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Link className="cart-link" onClick={showModal}>
        <ShoppingCartOutlined /> Cart ({itemCount})
      </Link>
      <Modal
        title="My Cart"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={false}
        width={1200}
      >
        <div className="container">
          <Row gutter={24}>
            <Col xs={24} sm={18} md={18} lg={18}>
              {cartItems.length > 0 ? (
                <CartProducts />
              ) : (
                <p>Your cart is empty</p>
              )}
            </Col>
            {cartItems.length > 0 && (
              <Col xs={24} sm={6} md={6} lg={6}>
                <div className="cart-price-detail">
                  <h4>Total Items : {itemCount}</h4>
                  <h4>Total Payment : {ThaiBahtAmountFormat(total)}</h4>
                  <hr />
                  <div className="cart-btn-wrap">
                    <Space>
                      <Button type="primary" disabled>
                        CHECKOUT
                      </Button>
                      <Button type="primary" onClick={clearCart}>
                        CLEAR
                      </Button>
                    </Space>
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
