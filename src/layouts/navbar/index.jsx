import "../styles/navbar.css";
import bornToDevLogo from "../../assets/logo/Logo_Borntodev.webp";
import NavbarItem from "./components/navbaritem";
import IconBook from "../../assets/icons/iconbook";
import IconBag from "../../assets/icons/iconBag";
import IconLaptop from "../../assets/icons/iconLaptop";
import IconNewpaper from "../../assets/icons/iconNewpaper";
import IconSignIn from "../../assets/icons/iconSign-in";
import IconPlay from "../../assets/icons/iconPlay";
import IconHamburger from "../../assets/icons/iconHamburger";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Button, Drawer } from "antd";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    console.log("onClose")
  };
  const navigate = useNavigate();
  const routeTo = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="navbar01">
        <div className="navbar01-container">
          <div className="navbar01-logo" style={{ cursor: "pointer" }}>
            <img
              onClick={() => {
                routeTo("/");
              }}
              src={bornToDevLogo}
              alt={bornToDevLogo}
              style={{ with: "100%", height: "30px" }}
            />
          </div>
          <div className="navbar01-item">
            <div className="navbarMenu">
              <NavbarItem
                onClick={() => routeTo("/online-course")}
                icon={<IconBook />}
                titleName={"หลักสูตรคุณภาพสูง"}
              />
              <NavbarItem
                onClick={() => routeTo("/devlab")}
                icon={<IconLaptop />}
                titleName={"Dev Lab 3"}
              />
              <NavbarItem
                onClick={() => routeTo("/blog")}
                icon={<IconNewpaper />}
                titleName={"บทความ"}
              />
              <NavbarItem
                onClick={() => routeTo("/borntodev-for-business")}
                titleName={"สำหรับภาคธุรกิจ"}
              />
              <NavbarItem
                onClick={() => routeTo("/my-account")}
                icon={<IconSignIn />}
                titleName={"เข้าสู่ระบบ"}
              />
              <div className="box01-item">
                <NavbarItem
                  icon={<IconPlay />}
                  titleName={"เข้าระบบเรียน (ใหม่!)"}
                />
              </div>
            </div>
            <div style={{ marginLeft: "15px" }}>
              <NavbarItem onClick={() => routeTo("cart")} icon={<IconBag />} />
            </div>
            <div
              className="HamMenu"
              style={{ margin: "0 10px" }}
              onClick={showDrawer}
            >
              <IconHamburger />
            </div>
          </div>
          <Drawer
            placement="right"
            onClose={onClose}
            open={open}
            closeIcon= {false}
            style={{ backgroundColor: "#ffc40b",
            fontFamily:"Prompt",
            position:"relative",
            
          }}
          > 
          <div style={{fontSize:"1.5em",right:20,top:0,position:"absolute"}} onClick={()=> onClose()}>x</div>
            <p onClick={() => routeTo("/online-course")} >หลักสูตรคุณภาพสูง</p>
            <p onClick={() => routeTo("/devlab")}>Dev Lab 3</p>
            <p onClick={() => routeTo("/blog")}>บทความ</p>
            <p onClick={() => routeTo("/borntodev-for-business")}>สำหรับภาคธุรกิจ</p>
            <p onClick={() => routeTo("/my-account")}>เข้าสู่ระบบ</p>
            <p>เข้าระบบเรียน (ใหม่!)</p>
          </Drawer>
        </div>
      </div>
    </>
  );
};
export default Navbar;
