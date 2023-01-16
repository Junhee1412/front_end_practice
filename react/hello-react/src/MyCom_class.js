import React, { Component } from "react";
import PropTypes from "prop-types";

class MyCom_class extends Component {
  render() {
    const { name, children, favoriteNumber } = this.props;
    return (
      <div>
        {name}의 첫 컴포넌트
        <br />
        children 값은 {children}
        <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

MyCom_class.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

MyCom_class.defaultProps = {
  name: "기본이름",
};
export default MyCom_class;
