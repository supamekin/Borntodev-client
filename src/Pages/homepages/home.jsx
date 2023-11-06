import "../homepages/styles/homepages.css";
import "../homepages/styles/homepages02.css";
import "../homepages/styles/homepages03.css";
import "../homepages/styles/homepages04.css";
import "../homepages/styles/homepages05.css";
import "../homepages/styles/homepages06.css";
import "../homepages/styles/homepages07.css";
import "../homepages/styles/homepages08.css";
import "../homepages/styles/homepages09.css";
import "../homepages/styles/homepages10.css";
import "../homepages/styles/homepages11.css";
import "../homepages/styles/homepages12.css";
import "../homepages/styles/homepages13.css";
import "../homepages/styles/homepages14.css";
import "../homepages/styles/homepages15.css";
import "../homepages/styles/responsive.css";

import Typewriter from "../../components/typewriter";
import IconDiscord from "../../assets/icons/iconDiscord";
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
import Mockuplogo from "../../assets/logo/mockuplogo.png";
import B2Dlogo from "../../assets/logo/logo-b2d-school-blackyellow.png";
import Businesslogo from "../../assets/logo/business-course-1024x812.jpg";
import Picture1 from "../../assets/logo/picture-1024x683-1.webp";
import Devlablogo from "../../assets/logo/devlab_logo-02-minimal-1.png";
import Accessimg from "../../assets/logo/open-access-2022-300x109.png";

import course1 from "../../assets/logo/gallery/sqr_get-started-php.png";
import course2 from "../../assets/logo/gallery/PROG-5.webp";
import course3 from "../../assets/logo/gallery/sqr_ultimate-game-plus.webp";
import course4 from "../../assets/logo/gallery/sqr_arduino.webp";
import course5 from "../../assets/logo/gallery/1000x1000-3.png";
import course6 from "../../assets/logo/gallery/sqr_ux-ui.webp";
import course7 from "../../assets/logo/gallery/ux_ui.jpg";
import course8 from "../../assets/logo/gallery/ult-python-2023-sqr.webp";
import course9 from "../../assets/logo/gallery/sqr_professional-c-sharp-1.webp";
import course10 from "../../assets/logo/gallery/sqr_java.png";
import course11 from "../../assets/logo/gallery/sqr_ultimate-game-plus.webp";
import course12 from "../../assets/logo/gallery/sqr_complete-data.webp";
import course13 from "../../assets/logo/gallery/starter-program-2023-sqr.webp";
import course14 from "../../assets/logo/gallery/sqr_front-end-1.webp";

import { useEffect, useState } from "react";
import Slider from "react-styled-carousel";
import Cardcontent from "../../components/cardContent/cardContent";
import CardColor from "../../components/cardContent/cardContent-Color";
import IconDatabase from "../../assets/icons/iconDatabase";
import IconGithubY from "../../assets/icons/iconGithubY";
import IconCode from "../../assets/icons/iconCode";
import IconCodepen from "../../assets/icons/iconCodepen";
import IconTerminal from "../../assets/icons/iconTerminal";
import Blogmongo from "../../assets/logo/card/blog-mongo.webp";
import Blogvue from "../../assets/logo/card/blog-vue.webp";
import Blogcardui from "../../assets/logo/card/blog-cardui.webp";

const HomePages = () => {
  const response= [
    { breakPoint: 1425, cardsToShow: 4 }, 
    { breakPoint: 1000, cardsToShow: 3 },
    { breakPoint: 700, cardsToShow: 2 },
    { breakPoint: 200, cardsToShow: 1 }
  ]
  const [showVideo, setshowVideo] = useState(false);
  const [APIdata, setAPIdata] = useState(55);
  const [
    cardCourse,
    // setCardCourse
  ] = useState([
    { image: course1 },
    { image: course2 },
    { image: course3 },
    { image: course4 },
    { image: course5 },
    { image: course6 },
    { image: course7 },
    { image: course8 },
    { image: course9 },
    { image: course10 },
    { image: course11 },
    { image: course12 },
    { image: course13 },
    { image: course14 },
  ]);
  const fetchAPI = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setAPIdata(json));
  };

  useEffect(() => {
    console.log(APIdata);
  }, [APIdata]);

  useEffect(() => {
    fetchAPI();
  }, []);

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
                <p>
                  ทั้งศาสตร์ และ
                  ศิลป์จากผู้มีประสบการณ์เชี่ยวชาญด้านเทคโนโลยีตัวจริง
                </p>
              </div>
              <div className="Home01-item04">
                <p>เลือกเส้นทางการเรียนรู้</p>
              </div>
              <div className="Home01-item05">
                <button className="Home01-item-box01">Web Dev</button>
                <button className="Home01-item-box02">Software Dev</button>
                <button className="Home01-item-box03">Game Dev</button>
                <button className="Home01-item-box04">UX/UI Design</button>
                <button className="Home01-item-box05">Data</button>
              </div>
              <div className="Home01-item06">
                <a href="" className="H01-a">
                  🏢 เลือกดูหลักสูตร และ บริการสำหรับองค์กร
                </a>
              </div>
              <div className="Home01-item07">
                <div className="Home01-item07-text">
                  <strong>
                    <i>
                      <IconDiscord />
                    </i>
                    <span className="Home01-icon">
                      {" "}
                      borntoDev Community on Discord
                    </span>
                  </strong>
                  <span style={{ fontSize: "16px", fontFamily: "Prompt" }}>
                    {" "}
                    มาร่วมพูดคุย สอบถามปัญหา แบ่งปันความรู้
                    <br /> และ เป็นส่วนหนึ่งกับเราได้แล้ววันนี้ฟรี !!
                  </span>
                  <a
                    href=""
                    style={{
                      fontSize: "16px",
                      fontFamily: "Prompt",
                      fontWeight: "600",
                      color: "#ffc40b",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    คลิกที่นี่
                  </a>
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
            <p >อัพสกิลสายโค้ดดิ้งได้ไม่จำกัด</p>
            <p >ทั้งรูปแบบออนไลน์ และ ไลฟ์สด</p>
            <p>
              <span >ใน</span>
              <span style={{ fontWeight: "600" }}>
                {" "}
                bornto
              </span>
              <span
                style={{
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
            <div className="Home02-button01">
              <span>ลงทะเบียนวันนี้</span>
            </div>
            <div className="Home02-button02">
              <span>👨🏻‍💻 ดูสิทธิพิเศษสำหรับสมาชิก</span>
            </div>
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
              <img
                src={Mockuplogo}
                alt={Mockuplogo}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="Home05-card02">
              <div className="Home5-row">
                <div className="Home05-col-sm-6" style={{ width: "100%" }}>
                  <div
                    className="card"
                    style={{
                      borderRadius: "10px",
                      color: "black",
                      border: "0",
                    }}
                  >
                    <div className="Home05-card-body">
                      <div className="card01">🔴 Live สอนสด ผ่านออนไลน์</div>
                      <h5 className="card-title" style={{ fontSize: "48px" }}>
                        <strong>ROAD TO FRONT-END</strong> <br />
                        <strong>DEVELOPER Bootcamp</strong>
                      </h5>
                      <h6 style={{ fontSize: "30px" }}>
                        <span>หลักสูตรจัดเต็ม 3 เดือนครึ่งสู่การเป็น</span>{" "}
                        <br />
                        <span>Front-End Developer อย่างมืออาชีพ</span>
                      </h6>
                      <p className="card-text" style={{ fontSize: "30px",height:"80px" }}>
                        <p>
                          <span>คุณจะได้เรียนรู้ </span>
                          <Typewriter
                            text={[
                              "Basic IT",
                              "Computer Programming",
                              "HTML/CSS",
                              "JavaScript",
                              'Git"',
                              "CSS Framework",
                              "Web Security",
                              "Web Programming",
                              "React",
                              "SEO/Online Marketing",
                              "UX/UI Design",
                              "Vue",
                              "Web Testing",
                            ]}
                            delay={2000}
                            speed={15}
                            infinite
                            reverse={true}
                          />
                        </p>
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
                        <span
                          className="before-text"
                          style={{ fontSize: "30px" }}
                        >
                          ราคาพิเศษ เพียง{" "}
                        </span>
                        <span
                          className="price-text"
                          style={{ fontSize: "30px" }}
                        >
                          19,900{" "}
                        </span>
                        <span
                          className="after-text"
                          style={{ fontSize: "15px" }}
                        >
                          ฿ / ท่าน (จากปกติ 29,700 ฿)
                        </span>
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
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
      <div className="Home06">
        <div className="Home06-container01">
          <div className="Home06-content">
            <div className="Home06-content01">
              <div className="Home06-content01-item01">
                <h20>🚀 หลักสูตรที่แนะนำ</h20>
              </div>
              <div className="Home06-content01-item02">
                <p>
                  เรามีหลักสูตรที่พร้อมพัฒนาคุณให้เข้าใจ และ ปฏิบัติได้จริง
                  <br />
                  พร้อม Community ขนาดใหญ่ที่ให้ความช่วยเหลือสำหรับทุกคำถาม
                </p>
              </div>
            </div>
            <div className="Home06-content02">
              <div className="Home06-content02-item01">
                <div className="Home06-text01">
                  <strong style={{ fontSize: "30px", top: "0" }}>
                    คอร์สเรียนออนไลน์คุณภาพสูง
                  </strong>
                  <p
                    className="default-paragraph"
                    style={{ textAlign: "left" }}
                  >
                    เรียนเขียนโปรแกรม พัฒนาเทคโนโลยีกับกูรูตัวจริง
                    ที่ให้การสนับสนุนคุณจนไปถึงเป้าหมาย
                  </p>
                </div>
              </div>
              <div className="Home06-content02-item01">
                <div className="Home06-text02">
                  <a href="" className="home06-text-a">
                    <span>หลักสูตรทั้งหมด</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="Home06-content03" style={{ overflow: "hidden" }}>
              <div>
                <Slider 
                 responsive={response}
                  cardsToShow={4}
                  autoSlide={2000}
                  pauseOnMouseOver={true}
                  padding="25px"
                  margin="0"
                  width="300px"
                >
                  {cardCourse.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        width: "100%",
                        minWidth: "280px",
                        height: "280px",
                        padding: "6px",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.image}
                        style={{
                          width: "100%",
                          height: "280px",
                          padding: "6px",
                          objectFit:"Fill",
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Home07">
        <div className="Home07-text01">
          <a href="">
            🙋 กำลังหาหลักสูตรที่เหมาะกับคุณที่สุดอยู่ ?
            ให้ทีมงานของเราช่วยเหลือสิ !
          </a>
          <a href="">รับคำแนะนำผ่านออนไลน์ คลิกที่นี่ !</a>
        </div>
      </div>
      <div className="Home08">
        <div className="Home08-content">
          <div className="Home08-content01">
            <div className="Home08-content01-item01">
              <div className="Home08-text01">
                <h3 style={{ color: "#00000", textAlign: "left" }}>
                  บทความปลุกสมอง เพิ่มความรู้
                </h3>
                <span style={{ fontSize: "16px" }}>
                  เพราะบางครั้งความรู้ก็อยู่ในรูปแบบตัวหนังสือสุดพิเศษ​
                </span>{" "}
                😃
              </div>
            </div>
            <div className="Home08-content01-item01">
              <div className="Home08-text02">
                <div className="Home08-button01">
                  <a href="">
                    <span>อ่านบทความทั้งหมด</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="Home08-card">
            <div className="Home08-content02">
              <div className="Home08-card-item01">
                <Cardcontent
                  imageUrl={Blogvue}
                  texttitel="การใช้งาน React Hooks ในการจัดการ State"
                  a=" | DevInit, Front-End Developer"
                  text="สารจากนักเขียน หนึ่งในความสำคัญของ React คือการจัดการ state ของแอพพลิเคชัน …"
                />
              </div>
              <div className="Home08-card-item01">
                <Cardcontent
                  imageUrl={Blogcardui}
                  texttitel="Checkbox VS Radio Button เลือกแบบไหนให้เหมาะกับการใช้งาน?"
                  a=" | DevInit, UX/UI Designer"
                  text="สรุปสั้นๆ ก่อนอื่นมาทำความรู้จักกับ Component ทั้ง 2 ตัวนี้ก่อนว่าแต่ละ Com…"
                />
              </div>
              <div className="Home08-card-item01">
                <Cardcontent
                  imageUrl={Blogmongo}
                  texttitel="การใช้งาน MongoDB และ Mongoose เบื้องต้น"
                  a=" | Back-End Developer DevInit"
                  text="สารจากนักเขียน ในปัจจุบันที่เรียกว่า Data-driven world มีปริมาณข้อมูลมากมาย…"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Home09">
        <div className="Home09-content">
          <div className="Home09-content-item01"></div>
          <div className="Home09-content-item02">
            <div className="Home09-image">
              <img
                src={Accessimg}
                alt={Accessimg}
                style={{ margin: "15px 0" }}
              />
            </div>
            <div className="Home09-header">
              <h1 style={{ textAlign: "center" }}>
                bornto
                <span style={{ color: "#ffcc00" }}>Dev</span> Open Access
              </h1>
              <h6 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "16px" }}>
                  คอร์สเรียนเขียนโปรแกรม และ
                  เทคโนโลยีที่เปิดกว้างสำหรับทุกคนให้ได้เข้า
                  <span style={{ color: "#ffcc00", fontSize: "18px" }}>
                    {" "}
                    เรียนฟรี ไม่มีค่าใช้จ่ายให้ต้องกังวล
                  </span>{" "}
                  เพื่อการเรียนรู้ตลอดชีวิตที่สร้างสรรค์
                </span>
                <span style={{ fontSize: "16px" }}>
                  เน้นปฏิบัติจริง ผ่านระบบออนไลน์เข้าถึงได้ทุกที่ ทุกเวลา
                </span>
              </h6>
            </div>
            <div className="btn-bcy-1">
              <a href="">
                <span>ค้นหาหลักสูตรฟรี</span>
              </a>
            </div>
          </div>
          <div className="Home09-content-item01"></div>
        </div>
      </div>
      <div className="Home10">
        <div className="Home10-card-component">
          <div
            className="Home10-card-item01"
            style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}
          >
            <CardColor
              title1="ฟรี"
              icon={<IconDatabase />}
              header={"Essential SQL for Everyone"}
              text="เรียนรู้การเรียกใช้งานฐานข้อมูลด้วยภาษา SQL ตั้งแต่พื้นฐาน เพื่อเตรียมตัวสร้างสรรค์ผลงานระดับ Masterpiece"
              animation="https://lottie.host/d26550aa-9578-4c59-8f41-bde88cb635f3/VyXP8CFIIC.json"
            />
          </div>
          <div
            className="Home10-card-item01"
            style={{
              backgroundColor: "#3855ff",
              borderRadius: "10px",
              color: "#ffffff",
            }}
          >
            <CardColor
              title1="ฟรี"
              title2="ใหม่"
              icon={<IconGithubY />}
              header={"GitHub for Developer"}
              text="ปูทุกพื้นฐานที่สำคัญเกี่ยวกับการใช้งาน Git และ GitHub เบื้องต้น ที่จะได้เปิดโลกใบใหม่ของเหล่า Developer"
              animation="https://lottie.host/82169b12-4472-4247-b37b-1eb4a12dda13/KwecdBKywJ.json"
            />
          </div>
          <div
            className="Home10-card-item01"
            style={{
              backgroundColor: "#2779e3",
              borderRadius: "10px",
              color: "#ffffff",
            }}
          >
            <CardColor
              title1="ฟรี"
              icon={<IconCode />}
              header={"Get started with TypeScript"}
              text="มาเริ่มเรียนรู้กับภาษา TypeScript ตั้งแต่พื้นฐาน สู่การใช้งานจริง กับภาษาที่มาแรงที่สุดในเวลานี้"
              animation="https://lottie.host/0ef010ec-ad7d-443f-86f5-42ed603d0544/mR8vY2tZ84.json"
            />
          </div>
        </div>
      </div>
      <div className="Home11">
        <div className="Home11-card-component">
          <div
            className="Home11-card-item01"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              color: "#000000",
            }}
          >
            <CardColor
              title1="ฟรี"
              icon={<IconTerminal />}
              header={"Introduction to GoLang"}
              text="พื้นฐานภาษา Go เบื้องต้นไปจนถึงสามารถนำความรู้ในภาษานี้ไปประยุกต์ใช้ในการทำ Web Service และการเชื่อมต่อกับระบบฐานข้อมูล MySQL"
            />
          </div>
          <div
            className="Home11-card-item01"
            style={{
              backgroundColor: "#ffc40b",
              borderRadius: "10px",
              color: "#000000",
            }}
          >
            <CardColor
              title1="ฟรี"
              icon={<IconCodepen />}
              header={"Introduction to JavaScript"}
              text="พื้นฐานแบบก้าวกระโดดสำหรับ JavaScript สำหรับใครที่เขียนโปรแกรมมาแล้วอย่างน้อย 1 ภาษา แล้วต้องการย้ายมาลุย JS"
            />
          </div>
        </div>
      </div>
      <div className="Home12">
        <div className="Home12-Container">
          <div className="Home12-content01">
            <div className="Home12-card01"></div>
            <div className="Home12-card02">
              <div
                className="card"
                style={{ borderRadius: "10px", color: "black", border: "0" }}
              >
                <div className="Home12-card-body">
                  <div
                    className="Home12-image01"
                    style={{ marginBottom: "15px" }}
                  >
                    <img
                      src={B2Dlogo}
                      alt={B2Dlogo}
                      style={{ maxWidth: "300px" }}
                    />
                  </div>
                  <h3 style={{ textAlign: "left" }}>
                    พบกับประสบการณ์การเรียนรู้ด้านโค้ด + ไอที
                    <br />
                    ที่ดีที่สุดได้แล้วที่ borntoDev School
                  </h3>
                  <ul>
                    <li style={{ textAlign: "left" }}>
                      <span style={{ fontSize: "18px" }}>
                        หลักสูตรที่รวมความรู้ด้านไอทีสมัยใหม่
                        ตอบโจทย์การทำงานจริง
                      </span>
                    </li>
                    <li>
                      <span style={{ fontSize: "18px" }}>
                        ครบถ้วนตั้งแต่เริ่มต้น เหมาะสำหรับผู้เรียนทุกระดับ
                      </span>
                    </li>
                    <li>
                      <span style={{ fontSize: "18px" }}>
                        หลักสูตร Open Access เรียนฟรี ไม่จำกัดระยะเวลา กว่า 10
                        หลักสูตร
                      </span>
                    </li>
                  </ul>
                  <div className="Home12-button01">
                    <a href="#">Go somewhere</a>
                  </div>
                  <div className="Home12-button02">
                    <a href="#">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Home12-content02">
            <div className="Home12-card01">
              <img
                src={Businesslogo}
                alt={Businesslogo}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  marginBottom: "15px",
                }}
              />
            </div>
            <div className="Home12-card02">
              <div
                className="card"
                style={{ borderRadius: "10px", color: "black", border: "0" }}
              >
                <div className="Home12-card-body">
                  <p style={{ textAlign: "left" }}>
                    <strong>
                      <span style={{ color: "#333333", fontSize: "16px" }}>
                        บริการหลักที่แนะนำ – borntoDev for Business
                      </span>
                    </strong>
                  </p>
                  <h3 style={{ textAlign: "left" }}>
                    อัพเกรดทักษะให้องค์กร
                    <br />
                    ติดอาวุธด้วย Digital Skills
                  </h3>
                  <p style={{ textAlign: "left" }}>
                    <span style={{ fontSize: "18px" }}>
                      หลักสูตรสำหรับองค์กรที่ถูกออกแบบมาเพื่อธุรกิจโดยเฉพาะ
                      พัฒนาทักษะบุคลากรของคุณให้ก้าวไกล
                      กับหลักสูตรคุณภาพที่มาพร้อมกับ Workshop ให้ฝึกคิด และ
                      ปฏิบัติจริง
                    </span>
                  </p>
                  <ul>
                    <li>
                      <span style={{ fontSize: "18px" }}>
                        ครบจบได้ไวในหลักสูตรระยะสั้น เห็นผลได้ตั้งแต่
                        วันแรกที่เรียน !
                      </span>
                    </li>
                    <li>
                      <span style={{ fontSize: "18px" }}>
                        ร่วมออกแบบ และ
                        ปรับแต่งหลักสูตรให้เหมาะกับอุตสาหกรรมของคุณได้
                      </span>
                    </li>
                  </ul>
                  <div className="btn-bcy-1">
                    <a href="">
                      <span>ดูรายละเอียดหลักสูตรเพื่อองค์กร</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Home12-content03">
            <div className="Home12-card01">
              <img
                src={Picture1}
                alt={Picture1}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  marginBottom: "15px",
                }}
              />
            </div>
            <div className="Home12-card02">
              <div
                className="card"
                style={{
                  borderRadius: "10px",
                  color: "black",
                  border: "0",
                  textAlign: "center",
                }}
              >
                <div className="Home12-card-body">
                  <h6>
                    <span style={{ color: "#333333", fontSize: "16px" }}>
                      เกี่ยวกับเรา
                    </span>
                  </h6>
                  <h3>
                    เรามีผู้เชี่ยวชาญพร้อมให้คำตอบ <br />
                    สำหรับทุกคำถามในบทเรียน
                  </h3>
                  <h6 style={{ lineHeight: "25px" }}>
                    <span style={{ fontSize: "16px" }}>
                      เปลี่ยนข้อจำกัดเดิม ๆ ของการเรียนรู้ทั้งแบบออนไลน์ และ
                      ออฟไลน์
                    </span>
                    <br />
                    <span style={{ fontSize: "16px" }}>
                      ด้วยทีมงานด้านเทคนิคที่พร้อมตอบทุกคำถามสำหรับผู้เรียน
                      Online Premium
                    </span>
                    <br />
                    <span style={{ fontSize: "16px" }}>
                      ที่ให้คุณได้รับประสบการณ์ในการเรียนรู้ที่ดีที่สุด
                    </span>
                  </h6>
                  <p style={{ padding: "27px" }}></p>
                  <h6 style={{ textAlign: "center", lineHeight: "25px" }}>
                    <span style={{ fontSize: "16px" }}>
                      📞&nbsp; ผ่านเบอร์โทรศัพท์ 02-096-2899{" "}
                    </span>
                    <span style={{ fontSize: "16px" }}>
                      หรือ{" "}
                      <a
                        href=""
                        style={{ textDecoration: "none", color: "#FFC40B" }}
                      >
                        ผ่านออนไลน์
                      </a>
                      <br />
                    </span>
                    <span style={{ fontSize: "16px" }}>
                      เวลา 09.00 – 18.00 จันทร์ ถึง ศุกร์
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Home13">
        <div className="Home13-Container">
          <div className="Home13-content01">
            <div className="Home13-card01"></div>
            <div className="Home13-card02">
              <div
                className="card"
                style={{
                  borderRadius: "10px",
                  color: "white",
                  border: "0",
                  background: "#111111",
                  margin: "20px 0",
                }}
              >
                <div className="Home13-card-body">
                  <div
                    className="Home13-image01"
                    style={{ marginBottom: "15px" }}
                  >
                    <img
                      src={Devlablogo}
                      alt={Devlablogo}
                      style={{ maxWidth: "300px" }}
                    />
                  </div>
                  <h3 style={{ textAlign: "left", fontSize: "30px" }}>
                    <strong>
                      ระบบฝึกทักษะ การเขียนโปรแกรม
                      <br />
                    </strong>
                    <strong>ที่พร้อมตรวจผลงานคุณ 24 ชั่วโมง</strong>
                  </h3>
                  <ul>
                    <li style={{ textAlign: "left" }}>
                      <span style={{ fontSize: "18px" }}>
                        โจทย์ปัญหากว่า 200 ข้อ ที่รอท้าทายคุณอยู่
                      </span>
                    </li>
                    <li>
                      <span style={{ fontSize: "18px" }}>
                        รองรับ 9 ภาษาโปรแกรมหลัก ไม่ว่าจะ Java, Python, C
                        ก็เขียนได้
                      </span>
                    </li>
                    <li>
                      <span style={{ fontSize: "18px" }}>
                        ใช้งานได้ฟรี ! ครบ 20 ข้อขึ้นไป รับ Certificate ไปเลย !!
                      </span>
                    </li>
                  </ul>
                  <div className="Home13-button01">
                    <a href="#">Go somewhere</a>
                  </div>
                  <div className="Home13-button02">
                    <a href="#">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="Home14">
        <div className="Home14-container">
          <div className="Home14-content01">1</div>
          <div className="Home14-content02">2</div>
        </div>
      </div> */}
      <div className="Home15">
        <div className="Home15-content">
          <div className="Home15-content01-item01">
            <div className="Home15-box01"></div>
            <div className="Home15-text01">
              <p
                style={{
                  color: "rgba(48,48,48,0.88)",
                  lineHeight: "0",
                  textAlign: "left",
                  margin: "0",
                  paddingBottom: "27px",
                }}
              >
                ยังลังเล สงสัยเกี่ยวกับหลักสูตรอยู่ ?
              </p>
              <h3 style={{ textAlign: "left" }}>
                ให้เราช่วยค้นหาคอร์สที่เหมาะกับคุณ
              </h3>
              <p style={{ textAlign: "left" }}>
                สอบถามเพิ่มเติม พร้อมรับคำแนะนำกับที่ปรึกษาทางการเรียน
              </p>
            </div>
            <div className="Home15-text02">
              <script
                src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
                type="module"
              ></script>
              <dotlottie-player
                src="https://lottie.host/f96b9e60-a73f-4da5-860d-e22da6a217c3/K4OmS2kPBM.json"
                background="transparent"
                speed="1"
                style={{ width: "100px", height: "auto", maxWidth: "100%" }}
                direction="1"
                mode="normal"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className="Home15-box01"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePages;
