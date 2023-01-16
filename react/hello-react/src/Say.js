import React, { useState } from "react";

const Say = () => {
  const [text, setText] = useState("");
  const onClickEnter = () => setText("Hello~");
  const onClickLeave = () => setText("Bye Bye~");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{text}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        red
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        green
      </button>
      <button style={{ color: "purple" }} onClick={() => setColor("purple")}>
        purple
      </button>
    </div>
  );
};

export default Say;
