import React from 'react'
import { Link } from "react-router-dom"

export default function Link_component({item}) {
    const { logo, links } = item;
    return (
        <div className="contact">
            <div className="logo">
                {logo.type==="img" ? <img src={logo.url} alt="" /> : <h3>{logo.url}</h3>}
            </div>
            <ul className="list_group">
                {links.map((item, i) => (
                        <Link to={item.url} key={i+1000}>
                            <li className="list_item">{item.icon ? <i className={item.icon}></i> : null} <span>{item.title}</span></li>
                        </Link>
                ))}


            </ul>
        </div>
    )
}
