function HomepagesItem(prop) {
    return (
      <>
        <div className="Homepages-item">
          <div className="Homepages-item01 d-flex">
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
            <div className="HomePages01" style={{ cursor: "pointer", }}>
              {prop.HomePagesName}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default HomepagesItem;