import { useLocation, } from "react-router-dom";

function NavbarItem(prop) {
  const location =useLocation() 
  console.log(location.pathname === "/my-account" ?"tap02" : "tap01" )
  return (
    <>
      <div className="navbar02-item" onClick={prop.onClick}>
        <div className="obj-opa08 d-flex">
          {prop.icon ? (
            <div
              style={{
                width: "32px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {prop.icon}
            </div>
          ) : null}
          <div className={location.pathname === "/my-account" ?"tap02" : "tap01" } style={{ cursor: "pointer" }}>
            <span>{prop.titleName}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarItem;
