import React, { Component } from "react";
import IterationSample from "./IterationSample";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <h2>ScrollBox</h2>
          <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
          <button onClick={() => this.scrollBox.scrollToBottom()}>
            밑으로
          </button>
          <hr />
        </div>
        <div>
          <h2>컴포넌트 반복</h2>
          <IterationSample />
          <hr />
        </div>
      </>
    );
  }
}

export default App;
