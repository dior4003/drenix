import React from "react";
import UseCounter from "../../Hooks/counter";
export default function FullSection({ item = [] }) {
  const num = UseCounter(1000);

  return (
    <div className="full_section">
      <div className="section_background"></div>
      <div className="section_container">
        <div className="section_item">
          {item.map((item, i) => {
            return (
              <div key={i} className="item">
                <div className="image_box">
                  <img
                    src={`https://drenix-back.herokuapp.com/static/media/${item.img}`}
                    alt={item.title}
                  />
                </div>
                <div className="counter_box">
                  <span className="counter_item">
                    {num < item.value ? num : item.value}
                  </span>
                  <div className="counter_icon">{item.icon}</div>
                </div>
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
