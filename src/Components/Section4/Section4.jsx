import React from "react";
import FullSection from "./ui/FullSection";
import Card from "./ui/card";
import Progress from "./ui/Progress";

export default function Section4({ data }) {
  return (
    <section className="section_4">
      <div className="row">
        <div className="col-5">
          <div className="background_section">
            <div className="big_text">
              <h1>{data.year}+</h1>
            </div>
            <div className="second_text">
              <h1>{data.title1}</h1>
            </div>
            <div className="thrid_text">
              <h1>{data.title2}</h1>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="left_box">
            <div className="box_title">
              <h1>{data.title3}</h1>
            </div>
            <div className="progress_bar">
              <ul className="progres_list">
                <Progress data={data.skills} />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cards_section">
        <div className="card_box">
          <Card card={data.courses} />
        </div>
      </div>
      <FullSection item={data.fullSection} />
    </section>
  );
}
