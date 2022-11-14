import React from "react";
import UseCounter from "../../Hooks/counter";

export default function Progress({ data }) {
  const num = UseCounter(100);
  return (
    <>
      {data.map((item, i) => (
        <li key={i} className="list_item">
          <div className="label">
            <span>{item.text}</span>
            <span>{num < item.value ? num : item.value}%</span>
          </div>
          <span className="bar_item">
            <span
              style={{ width: `${num < item.value ? num : item.value}%` }}
            ></span>
          </span>
        </li>
      ))}
    </>
  );
}
