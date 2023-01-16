import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="mainCite">
      <h2>쿠딜 추천</h2>
      <section id="eventInfo">
        <h3>이벤트 정보</h3>
        <div id="firstEvent">
          <Link to="/FirstEvent">올리브영</Link>
        </div>
        <div id="secondEvent">
          <Link to="/SecondEvent">에버랜드</Link>
        </div>
        <div id="thirdEvent">
          <Link to="/ThirdEvent">맘스터치</Link>
        </div>
        <div id="forthEvent">
          <Link to="/ForthEvent">탑텐</Link>
        </div>
      </section>
      <section id="couponInfo">
        <h3>쿠폰 정보</h3>
        <div id="firstcoupon">
          <Link to="/FirstCoupon">카페</Link>
        </div>
        <div id="secondcoupon">
          <Link to="/SecondCoupon">식당</Link>
        </div>
        <div id="thirdcoupon">
          <Link to="/ThirdCoupon">게임</Link>
        </div>
        <div id="forthcoupon">
          <Link to="/ForthCoupon">통신사 데이터</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
