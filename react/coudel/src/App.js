import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FirstEvent from "./pages/Event/FirstEvent";
import SecondEvent from "./pages/Event/SecondEvent";
import ThirdEvent from "./pages/Event/ThirdEvent";
import ForthEvent from "./pages/Event/ForthEvent";
import FirstCoupon from "./pages/coupon/FirstCoupon";
import SecondCoupon from "./pages/coupon/SecondCoupon";
import ThirdCoupon from "./pages/coupon/ThirdCoupon";
import ForthCoupon from "./pages/coupon/ForthCoupon";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FirstEvent" element={<FirstEvent />} />
      <Route path="/SecondEvent" element={<SecondEvent />} />
      <Route path="/ThirdEvent" element={<ThirdEvent />} />
      <Route path="/ForthEvent" element={<ForthEvent />} />
      <Route path="/FirstCoupon" element={<FirstCoupon />} />
      <Route path="/SecondCoupon" element={<SecondCoupon />} />
      <Route path="/ThirdCoupon" element={<ThirdCoupon />} />
      <Route path="/ForthCoupon" element={<ForthCoupon />} />
    </Routes>
  );
};

export default App;
