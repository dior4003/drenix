import React from "react";
import Contact from "./ui/Contact";
import Corusel from "./ui/corusel";



export default function Section10({ data }) {
 
  return (
    <section className="section_10">
      <div className="title">
        <h1>{data ? data.title1 : ""}</h1>
      </div>
      <div id="corusel">
        <Corusel data={data.corusel ? data.corusel : []} />
      </div>
      <Contact datas={data.contact ? data.contact : []} />

      <div className="contact_btn">
        <img src="https://velesokolo.ru/wp-content/uploads/2019/07/9e619c79ba3e1608b0f2cea0b7169612.png" alt="" />
      </div>
    </section>
  );
}
