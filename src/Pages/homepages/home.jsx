import "../homepages/styles/homepages.css";
import "../homepages/styles/homepages02.css";
import "../homepages/styles/homepages03.css";
import "../homepages/styles/homepages04.css";
import "../homepages/styles/homepages05.css";
import Typewriter from "../../components/typewriter";
import IconDiscord from "../../assets/icons/iconDiscord";
import HomepagesItem from "./component/Homepages";
import YoutubeDev from "../../assets/logo/maxresdefault.webp";
import SCasset from "../../assets/logo/SCasset.webp";
import PTTlogo from "../../assets/logo/PTT_Digital.webp";
import Microsoftlogo from "../../assets/logo/Microsoft-logo.webp";
import Egatlogo from "../../assets/logo/logo-egat-th-300x50.png.webp";
import Intallogo from "../../assets/logo/Intel-logo-300x169.png";
import LineDevelopers from "../../assets/logo/LINE-Developers-TH-gray-1-300x37.png";
import Appscilogo from "../../assets/logo/logo-appsci-kmutnb-300x68.png.webp";
import Proenlogo from "../../assets/logo/AnyConv.com__proen-logo-gray.webp";
import Sonylogo from "../../assets/logo/70-large-1.png";
import ToyoTalogo from "../../assets/logo/logo-toyota-yasothorn.png.webp";
import Dockerlogo from "../../assets/logo/docker-2.png.webp";
import figmalogo from "../../assets/logo/figma-300x300.png.webp";
import ModalVideo from "../../components/modalVideo";
import { useState } from "react";
import Mockuplogo from "../../assets/logo/mockuplogo.png";

const HomePages = () => {
  const [showVideo, setshowVideo] = useState(false);
  return (
    <>
      <div className="Home01">
        <div className="Home01-container">
          <div className="Home01-container01">
            <div className="Home01-item">
              <div className="Home01-item01">
                <h11 className="Home01-h11">👨🏻‍💻 เรียนรู้ทักษะแห่งอนาคต</h11>
              </div>
              <div className="Home01-item02">
                <p>ให้คุณ</p>
                <Typewriter
                  text={[
                    '"ได้กลายเป็นนักพัฒนาเทคโนโลยีรุ่นใหม่"',
                    '"ได้ย้ายสายงานมาทำไอที"',
                    '"ได้พัฒนาทักษะเขียนโปรแกรม"',
                    '"สร้างสรรค์ผลงานระดับโลก"',
                    '"ได้สร้างแอปพลิเคชันในฝัน"',
                    '"เขียนเว็บแอปเป็นแบบไวๆ"',
                  ]}
                  delay={2000}
                  speed={15}
                  infinite
                  reverse={true}
                />
                <p>ได้ในวันนี้ !</p>
              </div>
              <div className="Home01-item03">
                <p>
                  สร้างสรรค์แอปพลิเคชัน และ ผลงานด้านดิจิทัล
                  ด้วยหลักสูตรที่ลงลึกจัดเต็ม
                </p>
                <br />
                <p>
                  ทั้งศาสตร์ และ
                  ศิลป์จากผู้มีประสบการณ์เชี่ยวชาญด้านเทคโนโลยีตัวจริง
                </p>
              </div>
              <div className="Home01-item04">
                <p>เลือกเส้นทางการเรียนรู้</p>
              </div>
              <div className="Home01-item05">
                <a className="Home01-item-box01">Web Dev</a>
                <a className="Home01-item-box02">Software Dev</a>
                <a className="Home01-item-box03">Game Dev</a>
                <a className="Home01-item-box04">UX/UI Design</a>
                <a className="Home01-item-box05">Data</a>
              </div>
              <div className="Home01-item06">
                <h12 className="Home01-h12">
                  🏢 เลือกดูหลักสูตร และ บริการสำหรับองค์กร
                </h12>
              </div>
              <div className="Home01-item07">
                <div className="Home01-item07-text">
                  <HomepagesItem
                    icon={<IconDiscord />}
                    HomePagesName="borntoDev Community on Discord"
                  />
                  มาร่วมพูดคุย สอบถามปัญหา แบ่งปันความรู้ <br /> และ
                  เป็นส่วนหนึ่งกับเราได้แล้ววันนี้ฟรี !!
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="Home01-container02">
            <div className="Home01-vidoe">
              <ModalVideo
                show={showVideo}
                handleClose={() => setshowVideo(false)}
              />
              <img
                src={YoutubeDev}
                alt={YoutubeDev}
                style={{ with: "100%", height: "100%", borderRadius: "5px" }}
                onClick={() => setshowVideo(!showVideo)}
              />
            </div>
          </div>
          <div className="Home01-container03">
            <div className="Home03-item-box01">
              <div className="Home03-item01">
                <div className="Home03-item01-text01">
                  <h13>ส่วนหนึ่งจากองค์กรชั้นนำที่ไว้วางใจพวกเรา</h13>
                </div>
                <div className="Home03-item01-text02">
                  <p>
                    เราพร้อมให้บริการทั้งบุคคลทั่วไปที่สนใจ และ
                    ลูกค้าในรูปแบบองค์กร
                  </p>
                  <p>
                    เพื่อจุดประกายทุกไอเดียในการพัฒนาเทคโนโลยี
                    ทั้งด้านการเรียนรู้ และ บริการประชาสัมพันธ์
                  </p>
                </div>
              </div>
            </div>
            <div className="Home03-item-box02">
              <div className="Home03-item02-box03" style={{ flex: "1 20%" }}>
                <img
                  src={SCasset}
                  alt={SCasset}
                  style={{ with: "128px", height: "80px" }}
                />
              </div>
              <div className="Home03-item02-box03" style={{ flex: "1 20%" }}>
                <img
                  src={PTTlogo}
                  alt={PTTlogo}
                  style={{ with: "125px", height: "51px" }}
                />
              </div>
              <div className="Home03-item02-box03" style={{ flex: "1 20%" }}>
                <img
                  src={Microsoftlogo}
                  alt={Microsoftlogo}
                  style={{ with: "228.5px", height: "52px" }}
                />
              </div>
              <div className="Home03-item02-box03" style={{ flex: "1 20%" }}>
                <img
                  src={Egatlogo}
                  alt={Egatlogo}
                  style={{ with: "228.5px", height: "38px" }}
                />
              </div>
              <div className="Home03-item02-box03" style={{ flex: "1 20%" }}>
                <img
                  src={Intallogo}
                  alt={Intallogo}
                  style={{ with: "142px", height: "80px" }}
                />
              </div>
            </div>
            <div className="Home03-item-box03">
              <div className="Home03-item02-box03" style={{ flex: "1 20%" }}>
                <img
                  src={LineDevelopers}
                  alt={LineDevelopers}
                  style={{ with: "100%", height: "28px" }}
                />
              </div>
              <div className="Home03-item02-box03" style={{ flex: "1 20%" }}>
                <img
                  src={Appscilogo}
                  alt={Appscilogo}
                  style={{ with: "100%", height: "52px" }}
                />
              </div>
              <div className="Home03-item02-box03" style={{ flex: "1 20%" }}>
                <img
                  src={Proenlogo}
                  alt={Proenlogo}
                  style={{ with: "100%", height: "80px" }}
                />
              </div>
              <div className="Home03-item02-box03" style={{ flex: "1 20%" }}>
                <img
                  src={Sonylogo}
                  alt={Sonylogo}
                  style={{ with: "100%", height: "80px" }}
                />
              </div>
              <div className="Home03-item02-box03" style={{ flex: "1 20%" }}>
                <img
                  src={ToyoTalogo}
                  alt={ToyoTalogo}
                  style={{ with: "100%", height: "80px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Home02">
        <div className="Home02-container">
          <div className="Home02-container-text01">
            <h14>แนะนำให้รู้จัก</h14>
          </div>
          <div className="Home02-container-text02">
            <p style={{ fontSize: "54px" }}>อัพสกิลสายโค้ดดิ้งได้ไม่จำกัด</p>
            <p style={{ fontSize: "54px" }}>ทั้งรูปแบบออนไลน์ และ ไลฟ์สด</p>
            <p>
              <span style={{ fontSize: "54px" }}>ใน</span>
              <span style={{ fontSize: "54px", fontWeight: "600" }}>
                {" "}
                bornto
              </span>
              <span
                style={{
                  fontSize: "54px",
                  color: "#ffc000",
                  fontWeight: "600",
                }}
              >
                Dev+
              </span>
            </p>
          </div>
          <div className="Home02-container-text03">
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "30px" }}>
                ลงทะเบียนวันนี้เพียง 832.50.- ต่อเดือน
              </span>{" "}
              <br />
              <span style={{ fontSize: "30px" }}>เมื่อสั่งซื้อแบบรายปี</span>
            </p>
          </div>
          <div className="Home02-container-text04">
            <a href="" className="Home02-button01">
              <span>ลงทะเบียนวันนี้</span>
            </a>
            <a href="" className="Home02-button02">
              <span>👨🏻‍💻 ดูสิทธิพิเศษสำหรับสมาชิก</span>
            </a>
          </div>
        </div>
      </div>
      <div className="Home03">
        <div className="Home03-container">
          <div className="Home03-container-text01">
            <h15>👨‍💻 PRO CLASS</h15>
          </div>
          <div className="Home03-container-text02">
            <p>
              <span>หลักสูตรสอนสดแบบเข้มข้นจากผู้เชี่ยวชาญตัวจริง</span>
            </p>
          </div>
        </div>
      </div>
      <div className="Home04">
        <div className="Home04-container">
          <div className="row">
            <div className="col-sm-6">
              <div
                className="card"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#41042f",
                  color: "#ffff",
                }}
              >
                <div className="card-body">
                  <div className="card01">คลาสเรียนสด</div>
                  <h5 className="card-title">
                    <img
                      src={figmalogo}
                      alt={figmalogo}
                      style={{ width: "35px", height: "auto" }}
                    />
                    Essential UX/UI Design
                  </h5>
                  <p className="card-text">
                    จะเปลี่ยนคุณให้ได้เข้าสู่โลกของการออกแบบประสบการณ์อันน่าเหลือเชื่อที่ปั้นให้คุณเข้าใจทุกมุมมองพื้นฐานของ
                    UX / UI ได้ภายใน 2 วัน
                  </p>
                  <p style={{ margin: "0" }}>
                    <span>
                      📌 เรียนสดเสาร์ – อาทิตย์ที่ 18-19 พฤศจิกายน 2566 ( 2 วัน
                      )
                    </span>
                  </p>
                  <p>
                    <span>
                      เวลา 09.00 – 16.00 น. @ WorkWiz เดอะสตรีทรัชดาชั้น 3
                    </span>
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div
                className="card"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#3661a5",
                  color: "#ffff",
                }}
              >
                <div className="card-body">
                  <div className="card01">คลาสเรียนสด</div>
                  <h5 className="card-title">
                    <img
                      src={Dockerlogo}
                      alt={Dockerlogo}
                      style={{ width: "35px", height: "auto" }}
                    />{" "}
                    Docker for Developer / IT
                  </h5>
                  <p className="card-text">
                    หลักสูตรนี้ที่จะนำพาคุณไปสู่การเป็นผู้เชี่ยวชาญใน Docker,
                    เครื่องมือที่ทำให้การพัฒนา, ทดสอบ,
                    และจัดการแอพพลิเคชั่นมีประสิทธิภาพยิ่งขึ้น !!
                  </p>
                  <p style={{ margin: "0" }}>
                    <span>
                      📌 เรียนสดเสาร์ – อาทิตย์ที่ 25-26 พฤศจิกายน 2566 ( 2 วัน
                      )
                    </span>
                  </p>
                  <p>
                    <span>
                      เวลา 09.00 – 16.00 น. @ WorkWiz เดอะสตรีทรัชดาชั้น 3
                    </span>
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Home05">
        <div className="Home05-container">
          <div className="Home05-item01">
            <div className="Home05-card01">
              <img src={Mockuplogo} alt={Mockuplogo} style={{width:"100%", height:"100%"}}/>
            </div>
            <div className="Home05-card02">
              <div className="row">
                <div className="col-sm-6" style={{width:"100%"}}>
                  <div
                    className="card"
                    style={{
                      borderRadius: "10px",
                      color: "black",
                    }}
                  >
                    <div className="card-body">
                      <div className="card01">🔴 Live สอนสด ผ่านออนไลน์</div>
                      <h5 className="card-title">
                        <strong>ROAD TO FRONT-END</strong> <br />
                        <strong>DEVELOPER Bootcamp</strong>
                      </h5>
                      <h6>
                        <span>หลักสูตรจัดเต็ม 3 เดือนครึ่งสู่การเป็น</span>{" "}
                        <br />
                        <span>Front-End Developer อย่างมืออาชีพ</span>
                      </h6>
                      <p className="card-text">
                      <p>ให้คุณ</p>
                <Typewriter
                  text={[
                    '"Basic IT"',
                    '"Computer Programming"',
                    '"HTML/CSS"',
                    '"JavaScript"',
                    '"Git"',
                    '"เขียนเว็บแอปเป็นแบบไวๆ"',
                  ]}
                  delay={2000}
                  speed={15}
                  infinite
                  reverse={true}
                />
                      </p>
                      <p style={{ margin: "0" }}>
                        <span>
                          หลักสูตรฉบับรวบรัด
                          เปลี่ยนคุณให้กลายเป็นนักพัฒนาเว็บไซต์ฝั่งหน้าบ้าน
                          (Front-End Developer) ได้ภายใน 3
                          เดือนครึ่งจากทีมผู้สอนที่ถ่ายทอดความรู้เรื่องการพัฒนาเว็บ
                          และ คนในวงการตัวจริง
                        </span>
                      </p>
                      <p>
                        <span>
                          เวลา 09.00 – 16.00 น. @ WorkWiz เดอะสตรีทรัชดาชั้น 3
                        </span>
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePages;
