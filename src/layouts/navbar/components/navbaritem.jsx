function NavbarItem(prop) {
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
          <div className="tap01" style={{ cursor: "pointer" }}>
            {prop.titleName}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarItem;
