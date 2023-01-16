import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0, //state의 초기값을 설정할 수 있다.
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        {/* onClick을 통해 버튼이 클릭되었을 때 호출되는 함수를 지정할 수 있다. */}
        <button
          onClick={() => {
            //setState를 사용하여 새로운 값을 넣을 수 있다.
            this.setState({ number: number + 1 }, () => {
              console.log("방금 setState가 호출되었습니다");
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
