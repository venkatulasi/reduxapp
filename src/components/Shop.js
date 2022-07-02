import React from "react";
import "./Style-Shop.css";
import { useSelector, useDispatch } from "react-redux";
import { buyLaptop } from "../redux/actions";

export default function Shop() {
  // const [lapTopCount, SetLapTopCount] = useState({
  //   numberOfLaptops: 100
  // });

  // const byLapTops = () => {
  //   SetLapTopCount((prevCount) => {
  //     return {
  //       ...prevCount,
  //       numberOfLaptops: lapTopCount.numberOfLaptops - 1
  //     };
  //   });
  // };

  const lapTops = useSelector((state) => state.numberOfLaptops);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="title">Welcome to VShop</h1>
      <div className="item">
        <p>Dell Inspiron Laptop</p>
        <p>Available: {lapTops}</p>
        <button onClick={() => dispatch(buyLaptop())}>BUY</button>
      </div>
    </div>
  );
}
