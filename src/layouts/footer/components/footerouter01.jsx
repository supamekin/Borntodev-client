function FooterItem(prop) {
    return (
      <>
        <div className="footer05-item">
          <div className="footer05-item01 d-flex">
            {prop.icon ? (
              <div
                style={{
                  width: "22px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                {prop.icon}
              </div>
            ) : null}
            <div className="footername" style={{ cursor: "pointer" }}>
              {prop.footerName}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default FooterItem;