import React from "react";
import Contact from "./ui/Contact";
import Corusel from "./ui/corusel";



export default function Section10({ data ,cont ,setCont}) {
  
  return (
    <section className="section_10">
      <div className="title">
        <h1>{data ? data.title1 : ""}</h1>
      </div>
      <div id="corusel">
        <Corusel data={data.corusel ? data.corusel : []} />
      </div>
      {cont?
      <Contact datas={data.contact ? data.contact : []} setCont={setCont}/>:null
      }
      

      
    </section>
  );
}
