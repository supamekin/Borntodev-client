import "../styles/navbar.css";
import bornToDevLogo from "../../assets/logo/Logo_Borntodev.webp";
import NavbarItem from "./components/navbaritem";
import IconBook from "../../assets/icons/iconbook";
import IconBag from "../../assets/icons/iconBag";
import IconLaptop from "../../assets/icons/iconLaptop";
import IconNewpaper from "../../assets/icons/iconNewpaper";
import IconSignIn from "../../assets/icons/iconSign-in";
import IconPlay from "../../assets/icons/iconPlay";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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
            <NavbarItem onClick={() => routeTo("/online-course")} icon={<IconBook />} titleName={"หลักสูตรคุณภาพสูง"} />
            <NavbarItem onClick={() => routeTo("/devlab")} icon={<IconLaptop />} titleName={"Dev Lab 3"} />
            <NavbarItem onClick={() => routeTo("/blog")} icon={<IconNewpaper />} titleName={"บทความ"} />
            <NavbarItem onClick={() => routeTo("/borntodev-for-business")} titleName={"สำหรับภาคธุรกิจ"} />
            <NavbarItem onClick={() => routeTo("/my-account")} icon={<IconSignIn />} titleName={"เข้าสู่ระบบ"} />
            <div className="box01-item">
              <NavbarItem
                onClick={() => routeTo("")}
                icon={<IconPlay />}
                titleName={"เข้าระบบเรียน (ใหม่!)"}
              />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <NavbarItem onClick={() => routeTo("cart")} icon={<IconBag />} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
