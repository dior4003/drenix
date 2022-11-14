import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./earth.css"
import Writer from "./useCouner";
export default function Contact({ notif, datas }) {
  const [next,setNext] =useState(null)

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
      setNext(4)

    setData({
      phone: "",
      userName: "",
      name: "",
      decr: "",
    })
  };
  const p ={
    t1: "Salom Drenix Academiyasining rasmiy saytiga hush kelibsiz!!!",
    t2:"Biz bilan bog'laning va o'z kelajagingiz poydevorini biz bilan quring",
    t3:" Iltimos ismingizni kiriting",
    t4:"Iltimos telegram foydalanuvchi nomi yoki telefon raqamingizni kiriting",
    t5:"Takliflar va sizni qiziqtirgan savollaringizni kiriting",
    t6:"Jo'natish tugmasini bosing va biz siz bilan albatta aloqaga chiqamiz!!!"
  }
  
 

  
  
  return (
    <div className="contact">
     
     
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
        <div className=" cont_sec">
          <div className={next===4?"containers":""}>
          <form onSubmit={onSubmit}>
            <div className="tit_c">
              <p className="para">{Writer(p.t1 ,10 ,false)}</p>
            </div>
            <div className="tit_c2">
              <p className="para2">{ Writer(p.t2 ,p.t1.length*40 ,false)}</p>
            </div>
            <div className="tit_c3">
              <p className="para3">{ Writer(p.t3 ,(p.t2.length)*40 ,false)}</p>
            </div>{Writer(p.t3 ,p.t2.length*40).length===p.t3.length?(
            <div className="text_int">
            <input
              type="text"
              placeholder={datas.place1}
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              min={4}
              required={true}
              
              style={{background:`${next===0?"red":"transparent"}`}}
            />
            <span className="span" style={{background:`${data.name.length>=3?"rgba(0, 75, 10, 1)":"transparent"}`}} onClick={()=>data.name.length>=3?setNext(1):setNext(0)}>Davom etish</span>
          </div>):null}
          <div className="tit_c2">
              <p className="para2">{ Writer(p.t4 , (p.t3.length)*40,next===1?false:true)}</p>
            </div>
            <div className="contact_input">
                
                  {Writer(p.t4 ,p.t3.length*40 , next===1?false:true).length===p.t4.length?(
                    <>
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
                      className="inputs"
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
                      style={{background:`${next===1?"red":"transparent"}`}}
                    />
                    <span  style={{background:`${data.phone.length>=3||data.userName.length>=3?"rgba(0, 75, 10, 1)":"transparent"}`}} onClick={()=>data.phone.length>=3||data.userName.length>=3?setNext(2):setNext(1)} className="span"> Davom etish</span>
                  </div>
                    </>
                    
                  ):null}
                  
            </div>
            <div className="tit_c2">
              <p className="para2">{ Writer(p.t5 , (p.t4.length)*40,next===2?false:true)}</p>
            </div>
            {
              Writer(p.t5 ,p.t4.length*40 , next===2?false:true).length===p.t5.length?
              (
                <div className="team_input">
                  
                  <div className="text_int">
                    <textarea
                    className="inputs"
                      id="noter-text-area"
                      name="textarea"
                      placeholder={datas.place2}
                      value={data.decr}
                      onChange={(e) => setData({ ...data, decr: e.target.value })}
                      min={50}
                      required={true}
                    />
                  </div>
                  <span  style={{background:`${data.decr.length>=30?"rgba(0, 75, 10, 1)":"transparent"}`}} onClick={()=>data.decr.length>=30?setNext(3):setNext(2)} className="span"> Davom etish</span>
                </div>
              ):null
            }
          <div className="tit_c2">
              <p className="para2">{ Writer(p.t6 , (p.t5.length)*40,next===3?false:true)}</p>
            </div>
            { Writer(p.t6 ,p.t5.length*40 , next===3?false:true).length===p.t6.length?
            (
              <div className="submit">
                <button className="span">{datas.btn}</button>
              </div>
            ):null}
          
          </form>
          </div>
          {/* <div className="thanks">
            <h1>hello</h1>
          </div> */}
        </div>
        
      </article>
      <ToastContainer />
    </div>
  );
}
