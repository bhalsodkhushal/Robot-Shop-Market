import React from "react";
import { Select, Button } from "antd";

const FilterProduct = (props) => {
  return (
    <div className="search-wrap">
      <Select
        mode="multiple"
        allowClear
        style={{ width: "100%" }}
        placeholder="Please select"
        onChange={props.handleMaterialSelectChange}
      >
        {props.materialOptionArr}
      </Select>
      <Button
        onClick=""
        type="primary"
        htmlType="button"
        onClick={props.filterProduct}
        size="small"
      >
        Search
      </Button>
    </div>
  );
};

export default FilterProduct;
