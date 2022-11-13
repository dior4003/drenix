import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";
import MainSection from "./Section1";
import Section10 from "./Section10/Section10";
// import Fireworks from "./Section10/ui/particles";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";

export default function Main() {
  // const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [ posts , setPosts]=useState(null)
  const [lang, setLang] = useState("uz");
  useEffect(() => {
    fetch(`https://drenix-back.herokuapp.com/static/${lang}.json`)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => {
        setData(data);
        // setLoading(false);
      });
  }, [lang]);
  useEffect(() => {
    fetch(`https://drenix-back.herokuapp.com/`)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => {
        setPosts(data);
        // setLoading(false);
      });
  }, []);
  const [nav, setNav] = useState("col-6");
  const [search, setSearch] = useState(false);

  return (
    <div onClick={() => setSearch(false)}>
      {data === null ? (
        <Loader />
      ) : (
        <>
          <Header
            nav={nav}
            setNav={setNav}
            search={search}
            setSearch={setSearch}
            data={data.header}
            lang={lang}
            setLang={setLang}
          />
          <MainSection data={data.section1} />
          <Section2 data={data.section2} />
          <Section3 data={data.section3} />
          <Section4 data={data.section4} />
          <Section5 data={data.sectoin5} />
          <Section6 data={data.seaction6} />
          <Section7 data={data.sectoin7} />
          <Section8 data={data.section8} />
          {posts>0?<Section9 />:null}
          <Section10 data={data.section10} />
            <Footer data={ data.footer } />
            {/* <Fireworks/> */}
        </>
      )}
    </div>
  );
}
