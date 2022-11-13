import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import useCounter from "../../Hooks/counter";
import "./earth.css"
export default function Contact({ notif, datas }) {
  const [isValue, setIsValue] = useState("phone"),
    [data, setData] = useState({
      phone: "",
      userName: "",
      name: "",
      decr: "",
    });
    const
    headers = {
     'Content-Type': 'application/json'
   }
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
   
    axios.post("https://drenix-back.herokuapp.com/bot5777250834:AAGaNZDkl_Z8R-B6HonPYDV6_xJvqrM5ZSQ", data, {
        headers: headers
      })
      .then((response) => {
        toast.success("Send message", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            console.log(response);
      })
      .catch((error) => {
        toast.error("Send message", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            console.log(error);
      })
    setData({
      phone: "",
      userName: "",
      name: "",
      decr: "",
    })
  };
  const p = "fvbgnhjmk,l.;/.l,kmjnhbgfvcd"
  let c =useCounter(p.length ,100)
  const [ tit, setTit ] = useState( "" )
  console.log( c );
  useEffect( () => {
    setTit(p.substring(0 ,c))
  },[c ,p])
  
  
  return (
    <div className="contact">
     
      <ToastContainer />
      <article className="earth-demo">
        <div className="earth">
          <div className="more-info">
            <h1>Earth</h1>
            <ul>
              <li>Third planet from the Sun</li>
              <li>Atmosphere: 21% oxygen</li>
              <li>Liquid water on surface</li>
              <li>Only planet that has life (that we know of)</li>
            </ul>
          </div>
          <img src="https://cssanimation.rocks/images/random/earth.png" alt=""/>
        </div>
        <div className="moon-container">
          <div className="moon">
            <img src="https://cssanimation.rocks/images/random/moon.png" alt=""/>
          </div>
        </div>
        <div className="cont_sec">
          <div className="tit_c">
            <p className="para">{tit}</p>
          </div>
           <div className="number_box">
            {/* <div className="titl">
              <h1></h1>
            </div> */}
            <div className="phone">
              <h1>{datas.phone}</h1>
            </div>
          </div>
          <div className="form">
            <form onSubmit={onSubmit}>
              <div className="contact_input">
                <div className="name_input">
                  <div className="phone_int">
                    <span onClick={() => setIsValue("phone")}>
                      <i className="fa-solid fa-phone"></i>
                    </span>
                  </div>
                  <div className="tg_int">
                    <span onClick={() => setIsValue("tg")}>
                      {" "}
                      <i className="fa-brands fa-telegram"></i>
                    </span>
                  </div>
                </div>
                <div className="contact_int">
                  <input
                    id="contact"
                    type={isValue === "phone" ? "number" : "text"}
                    placeholder={
                      isValue === "phone"
                        ? `${datas.intName[0]}`
                        : `${datas.intName[1]}`
                    }
                    value={isValue === "phone" ? data.phone : data.userName}
                    onChange={
                      isValue === "phone"
                        ? (e) => setData({ ...data, phone: e.target.value })
                        : (e) => setData({ ...data, userName: e.target.value })
                    }
                    required={true}
                    name="contact"
                  />
                  <label htmlFor="contact"> {datas.label}</label>
                </div>
              </div>
              <div className="team_input">
                <div className="text_int">
                  <input
                    type="text"
                    placeholder={datas.place1}
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    min={4}
                    required={true}
                  />
                </div>
                <div className="text_int">
                  <textarea
                    id="noter-text-area"
                    name="textarea"
                    placeholder={datas.place2}
                    value={data.decr}
                    onChange={(e) => setData({ ...data, decr: e.target.value })}
                    min={50}
                    required={true}
                  />
                </div>
              </div>
              <div className="submit">
                <button>{datas.btn}</button>
              </div>
            </form>
          </div>

        </div>



      </article>

    </div>
  );
}
