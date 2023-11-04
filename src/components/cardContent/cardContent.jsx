import "./CardContent.css"

function Cardcontent(prop) {
    return (
        <>
            <div className="crad-container">
                <div className="image-container">
                    <img src={prop.imageUrl} alt="" />
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h3>{prop.texttitel}</h3>
                    </div>
                    <a href="">{prop.a}</a>
                    <div className="card-body-text">
                        <p>{prop.text}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cardcontent;

