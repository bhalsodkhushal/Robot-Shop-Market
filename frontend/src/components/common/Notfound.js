import React, { Component } from "react";

const titleStyle = {
  fontSize: "150px",
  color: "#A1C9A4",
  textAlign: "center",
  marginBottom: "10px",
};

const title2Style = {
  fontSize: "35px",
  color: "#A1C9A4",
  margin: "10px 0 30px 0",
  textAlign: "center",
};

export class Notfound extends Component {
  render() {
    return (
      <div className="message-box">
        <h1 style={titleStyle}>404</h1>
        <h1 style={title2Style}>Page not found</h1>
      </div>
    );
  }
}

export default Notfound;
