import "./cardContent-Color.css"


function CardColor(prop) {
  return (
    <>
      <div className="card-Container" >
        <div className="card-Content">
          <div className="title-Content">
          {prop.title1 ? (
            <div className="title-Content01">{prop.title1}</div>
          ) : null}
          {prop.title2 ? (
          <div className="title-Content02">{prop.title2}</div>
          ) : null}
          </div>
          <div className="header-Content">
            <h4>
              <i>{prop.icon}</i>
              <span style={{ paddingLeft: "15px" }}>{prop.header}</span>
            </h4>
          </div>
          <div className="text-Content">
            <p>{prop.text}</p>
          </div>
          {prop.animation ? ( <div className="animation-Content">
          <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
          <dotlottie-player src={prop.animation} background="transparent" speed="1" style={{width: "100%", height: "auto",maxWidth:"100%"}} direction="1" mode="normal" loop autoplay></dotlottie-player>
          </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default CardColor;




