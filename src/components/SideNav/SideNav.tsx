import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import axios from "axios";
import "./SideNav.css";
import "../../App.css";

const SideNav = ({ children }: any) => {
  const [navItems, setNavItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/data").then((res) => {
      console.log("res", res.data);
      setNavItems(res.data);
    });
  }, []);
  console.log(navItems);

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="sidebar">
        {/* <div className="top_section">
          <h1 className="logo" onClick={navigateToHome}>
            HR Pre-screening
          </h1>
        </div> */}
        <p onClick={navigateToHome} className="linkHome">
          <BiHome size={30} />
          Home
        </p>
        {/* <NavLink to="/" className="linkHome"></NavLink> */}
        {navItems.map((item: any, index: any) => (
          <>
            {/* <div className="icon">{item.icon}</div> */}
            <div key={index}>
              <div className="link_text">{item.section}</div>
            </div>
            {/* <hr /> */}
            {item.children.map((el: any) => (
              <NavLink to={`/${el.id}`} key={index} className="link">
                {el.name}
              </NavLink>
            ))}
          </>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideNav;
