import "./App.css";
import { useState, useRef, useCallback } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1, // todo.id
      text: "리액트의 기초알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 해보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
      checked: false,
    },
  ]);

  // 삽입하기
  const nextId = useRef(4); // 고유값으로 사용될 id
  // Ref를 사용하여 변수 담기

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // 1씩 추가
    },
    [todos]
  );

  // 제거하기

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  // 수정하기

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map(
          (todo) =>
            // id 가 같으면 {수정해라} : 그대로 나와라
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
          //수정해라 : 원소의 아이디가 같으면 체크값을 반대로 수정해라.
        )
      );
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
