import React, { Component } from "react";
import { Col, Row, Select } from "antd";
import { ErrorNotificationMsg } from "../../utils/NotificationHelper";

import SingleProduct from "./SingleProduct";
import FilterProduct from "./FilterProduct";

import Config from "../../Config";

const { Option } = Select;
export class ProductList extends Component {
  state = {
    loading: false,
    productArr: [],
    filteredProductArr: [],
    materialOptionArr: [],
    selectedMaterial: [],
  };

  componentDidMount() {
    this.getRobotList();
  }

  getRobotList = () => {
    this.setState({ loading: true });
    fetch(Config.API_URL + "api/robots", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        let productList = data.data;
        if (productList.length > 0) {
          this.setState({
            productArr: productList,
            filteredProductArr: productList,
            loading: false,
          });
        } else {
          this.setState({ loading: false });
        }
        this.getMaterialOptions(productList);
      })
      .catch((error) => {
        ErrorNotificationMsg("Failed to fetch data.");
        this.setState({ loading: false });
      });
  };

  handleMaterialSelectChange = (value) => {
    this.setState({ selectedMaterial: value });
  };

  getMaterialOptions = (productListArr) => {
    let materialOptionArr = new Set();
    productListArr.forEach((product) => {
      materialOptionArr.add(product.material);
    });

    let materialOptions = [];
    materialOptionArr.forEach((material) => {
      materialOptions.push(<Option key={material}>{material}</Option>);
    });
    this.setState({ materialOptionArr: materialOptions });
  };

  filterProduct = () => {
    let result = [];
    if (this.state.selectedMaterial.length > 0) {
      this.state.selectedMaterial.forEach((item) => {
        let items = this.state.productArr.filter(
          (array) => array.material === item
        );
        result = [...result, ...items];
      });
      this.setState({ filteredProductArr: result });
    } else {
      this.setState({ filteredProductArr: this.state.productArr });
    }
  };

  render() {
    const { filteredProductArr, materialOptionArr, loading } = this.state;
    return (
      <div className="container">
        <div className="productPage">
          <div className="heading">
            <div className="title">Product List</div>
            <FilterProduct
              handleMaterialSelectChange={this.handleMaterialSelectChange}
              filterProduct={this.filterProduct}
              materialOptionArr={materialOptionArr}
            />
          </div>
          <Row
            gutter={{ xs: 8, sm: 16, md: 16, lg: 32 }}
            className="product-list"
          >
            {filteredProductArr.length > 0 ? (
              filteredProductArr.map((product, index) => {
                return (
                  <SingleProduct
                    product={product}
                    addToCart={() => this.addToCart}
                    key={product.name}
                  />
                );
              })
            ) : filteredProductArr.length === 0 && loading === false ? (
              <Col xs={24} sm={24} md={24}>
                <div className="not-found">Not found product</div>
              </Col>
            ) : (
              ""
            )}
          </Row>
        </div>
      </div>
    );
  }
}

export default ProductList;
