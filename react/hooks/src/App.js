import "./App.css";
import Counter from "./Counter";
import Info from "./Info";
import React, { useState } from "react";
import Counter_re from "./Counter_re";
import Info_re from "./Info_re";
import Average from "./Average";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div>
        <h2>useState</h2>
        <Counter />
        <hr />
        <h2>useState를 여러번 사용해보자</h2>
        <Info />
        <hr />
        <h2>useEffect 사용하기</h2>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "숨기기" : "보이기"}
        </button>
        <hr />
        {visible && <Info />}
        <h2>Counter_re</h2>
        <Counter_re />
        <hr />
        <Info_re />
        <hr />
        <div>
          <h2>Average</h2>
          <Average />
        </div>
      </div>
    </>
  );
}

export default App;
