import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //?detail=true&mode=1
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개합니다</h1>
      <p>리액트 라우터를 사용해보는 프로젝트입니다.</p>
      <p>detail :{detail}</p>
      <p>mode :{mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode +1</button>
      {/* useLocation : search는 메서드임. 쿼리(조건에 맞는 데이터)스트링(문자)
      search(맨앞에 ? 문자를 포함한 쿼리스트링 값을 사용할 수 있는 메서드) */}
    </div>
  );
};

export default About;
