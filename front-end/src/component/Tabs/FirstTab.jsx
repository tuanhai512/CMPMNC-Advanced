import React, { useState } from "react";
import "./FirstTab.css";
import "./Destination";
import { Destination } from "./Destination";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
function FirstTab() {
  const [choice, setChoice] = useState("");

  const handleChange = (e) => {
    setChoice(e.target.value);
  };

  return (
    <div className="button-form-first">
      <form className="radio-form">
        <input
          type="radio"
          value="male"
          id="male"
          onChange={handleChange}
          name="gender"
          className="button-radio"
        />
        <label for="male">One-way / Round-trip</label>

        <input
          type="radio"
          value="female"
          id="female"
          onChange={handleChange}
          name="gender"
          className="button-radio"
        />
        <label for="female">Multi-city</label>
      </form>
      <form className="select-form">
        <div className="top-form">
          <div className="div-Fdetail">
            <p>Điểm khởi hành</p>
            <select className="select-area">
              {Destination.map((item, index) => {
                return <option key={index}>{item.title}</option>;
              })}
            </select>
          </div>
          <div  className="div-Fdetail">
            <p>Điểm đến</p>
            <select className="select-area">
              {Destination.map((item, index) => {
                return <option key={index}>{item.title}</option>;
              })}
            </select>
          </div>
          <div  className="div-Fdetail">
            <p>Số hành khách</p>
            <select className="select-areaR">
              {Destination.map((item, index) => {
                return <option key={index}>{item.title}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="bottom-form">
          <div  className="div-Fdetail">
            <p>Ngày đi</p>
            <select className="select-area">
              {Destination.map((item, index) => {
                return <option key={index}>{item.title}</option>;
              })}
            </select>
          </div>
          <div  className="div-Fdetail">
            <div className="checkbox-area">
              <input type="checkbox" value="Khứ hồi" />
              <span>Khứ hồi</span>
            </div>
            <div className="select-area"></div>
          </div>
          <div  className="div-Fdetail">
            <p>Hạng ghế</p>
            <select className="select-areaR">
              {Destination.map((item, index) => {
                return <option key={index}>{item.title}</option>;
              })}
            </select>
          </div>
        </div>
      </form>
      <form className="search-form">
        <button className="search-button">
          <AiOutlineSearch />
          <Link to="/product"> Tìm chuyến bay</Link>
        </button>
      </form>
    </div>
  );
}

export default FirstTab;
