import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      hello~ 제 이름은 {name}입니다.
      <br />
      children 값은 {children}입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

MyComponent.defaultProps = {
  name: "기본이름",
};

export default MyComponent;
