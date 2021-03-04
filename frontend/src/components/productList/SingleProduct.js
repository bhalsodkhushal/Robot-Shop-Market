import React, { useContext } from "react";
import { Col, Button } from "antd";
import { CartContext } from "../../contexts/CartContext";
import { ToDateTime, ThaiBahtAmountFormat } from "../../utils/Helpers";
import { ErrorNotificationMsg } from "../../utils/NotificationHelper";

const SingleProduct = ({ product }) => {
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const increaseProduct = () => {
    increase(product);
  };

  const addMoreProduct = () => {
    if (cartItems.length >= 5) {
      ErrorNotificationMsg("You can add up to 5 different robots to cart.");
    } else {
      addProduct(product);
    }
  };

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.name === product.name);
  };

  return (
    <Col xs={24} sm={12} md={8} lg={6} key={product.name}>
      <div className="prowrap">
        <div className="imagdiv">
          <img alt={product.name} src={product.image}></img>
        </div>
        <div className="Description">
          <h3>{product.name}</h3>
          <p>
            <label>Material :</label> {product.material}
          </p>
          <p>
            <label>Stock :</label> {product.stock}
          </p>
          <p>
            <label>Created Date :</label> {ToDateTime(product.createdAt)}
          </p>
        </div>
        <div className="price_compare_wrap">
          <div className="price">{ThaiBahtAmountFormat(product.price)}</div>
          <div className="compare">
            {isInCart(product) && (
              <Button
                onClick={() => increaseProduct(product)}
                type="primary"
                htmlType="button"
                disabled={product.stock > 0 ? false : true}
              >
                Add More
              </Button>
            )}

            {!isInCart(product) && (
              <Button
                onClick={() => addMoreProduct(product)}
                type="primary"
                htmlType="button"
                disabled={product.stock > 0 ? false : true}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleProduct;
