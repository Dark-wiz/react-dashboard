import React from "react";
// import { css } from "@emotion/core";
// First way to import
import { BounceLoader } from "react-spinners";

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;
const loaderStyle = {
  margin: "0 auto",
  position: "absolute",
  overflow: "hidden",
  marginTop: "200px"
};
class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        {/* when loading state is false and there are children */}
        {this.state.loading === false && this.props.children}

        <div className="sweet-loading">
          <BounceLoader
            className="text-center"
            css={loaderStyle}
            sizeUnit={"px"}
            size={500}
            color={"#2ECA6A"}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}

export default Loader;
