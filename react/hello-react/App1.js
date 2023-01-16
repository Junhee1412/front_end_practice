import React from "react";
import MyComponent from "./MyComponent";
import MyCom_class from "./MyCom_class";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice_c from "./EventPractice_c";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";

const App = () => {
  return (
    <>
      <div>
        <MyComponent name="react" favoriteNumber={1}>
          리액트
        </MyComponent>
      </div>
      <div>
        <hr />
        <MyCom_class name="react_class" favoriteNumber={4}>
          클래스
        </MyCom_class>
      </div>
      <hr />
      <div>
        <h2>클래스 컴포넌트에서 state 사용하기</h2>
        <Counter />
      </div>
      <hr />
      <div>
        <h2>함수 컴포넌트에서 useState 사용하기</h2>
        <Say />
        <hr />
      </div>
      <div>
        <EventPractice_c />
      </div>
      <hr />
      <div>
        <EventPractice />
      </div>
      <hr />
      <div>
        <h2>DOM에 접근하기</h2>
        <ValidationSample />
      </div>
      <hr />
      <div>
        <h2>ScrollBox</h2>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom}>밑으로</button>
        <hr />
      </div>
    </>
  );
};

export default App;
