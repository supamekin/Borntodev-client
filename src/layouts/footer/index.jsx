import "../styles/footer.css";
import bornToDevPageFB from "../../assets/logo/Page_Fb.jpg";
import Dbd from "../../assets/logo/Dbd.png";
import FooterItem from "./components/footerouter01";
import IconStar from "../../assets/icons/iconstar";
import IconYoutube from "../../assets/icons/iconYoutube";
import IconBuilding from "../../assets/icons/iconBuilding";
import IconAd from "../../assets/icons/iconAd";
import IconGraduationcap from "../../assets/icons/iconGraduation-cap";
import IconLeaf from "../../assets/icons/iconLeaf";
import IconHandshake from "../../assets/icons/iconHandshake";
import IconPlay from "../../assets/icons/iconPlay";
import IconLaptop from "../../assets/icons/iconLaptop";
import IconQuestion from "../../assets/icons/iconQuestion";
import IconUser from "../../assets/icons/iconUser";
import IconAddressCard from "../../assets/icons/iconAddress-card";
import IconBuildingColumns from "../../assets/icons/iconBuilding-columns";
import IconPhone from "../../assets/icons/iconPhone";
import IconLine from "../../assets/icons/iconLine";
import IconFacebook from "../../assets/icons/iconFacebook";
import IconGitHub from "../../assets/icons/iconGithub";
import IconEnvelope from "../../assets/icons/iconEnvelope";
import IconHeart from "../../assets/icons/iconHeart";

const Footer = () => {
  return (
    <>
      <div className="footer01">
        <div className="footer01-outer">
          <div className="footer01-outer01">
            <div className="footer01-outer02">
              <div className="footer01-item">
                <img
                  src={bornToDevPageFB}
                  alt={bornToDevPageFB}
                  style={{ width: "300px", height: "270px" }}
                />
              </div>
              <div className="footer02-item">
                <div style={{ marginBottom: "30px" }}>
                  <FooterItem footerName={"เลือกเรียนรู้"} />
                  <div style={{ marginTop: "12px" }}>
                    <FooterItem
                      icon={<IconStar />}
                      footerName={"คอร์สเรียนพรีเมียมออนไลน์"}
                    />
                    <FooterItem
                      icon={<IconYoutube />}
                      footerName="ความรู้ฟรีที่ YouTube"
                    />
                    <FooterItem
                      icon={<IconBuilding />}
                      footerName={"หลักสูตรสำหรับองค์กร"}
                    />
                  </div>
                </div>
                <div style={{ marginBottom: "30px" }}>
                  <FooterItem footerName={"สนับสนุนพวกเรา"} />
                  <div style={{ marginTop: "12px" }}>
                    <FooterItem
                      icon={<IconAd />}
                      footerName={"ติดต่อลงโฆษณา"}
                    />
                    <FooterItem
                      icon={<IconHandshake />}
                      footerName={"เป็น Partner กับเรา"}
                    />
                  </div>
                </div>
                <div style={{ marginBottom: "30px" }}>
                  <FooterItem footerName="สำหรับภาคการศึกษา" />
                  <div style={{ marginTop: "12px" }}>
                    <FooterItem
                      icon={<IconGraduationcap />}
                      footerName=" คอร์สเรียนในราคาพิเศษ"
                    />
                  </div>
                </div>
              </div>
              <div className="footer03-item">
                <div style={{ marginBottom: "30px" }}>
                  <FooterItem footerName="ศูนย์ให้ความช่วยเหลือ" />
                  <div style={{ marginTop: "12px" }}>
                    <FooterItem
                      icon={<IconQuestion />}
                      footerName="คำถามที่พบบ่อย"
                    />
                    <FooterItem
                      icon={<IconUser />}
                      footerName="นโยบายความเป็นส่วนตัว"
                    />
                    <FooterItem
                      icon={<IconHeart />}
                      footerName="นโยบายการคืนเงิน"
                    />
                  </div>
                </div>
                <div style={{ marginBottom: "30px" }}>
                  <FooterItem footerName="บริการจากเรา" />
                  <div style={{ marginTop: "12px" }}>
                    <FooterItem
                      icon={<IconPlay />}
                      footerName="borntoDev School"
                    />
                    <FooterItem icon={<IconLaptop />} footerName="Dev Lab 3" />
                    <FooterItem
                      icon={<IconLeaf />}
                      footerName="Minimal Web Design"
                    />
                  </div>
                </div>
              </div>
              <div className="footer04-item">
                <div style={{ marginBottom: "30px" }}>
                  <FooterItem footerName="เกี่ยวกับ BorntoDev" />
                  <div style={{ marginTop: "12px" }}>
                    <FooterItem
                      icon={<IconAddressCard />}
                      footerName="borntoDev คืออะไร ?"
                    />
                    <FooterItem
                      icon={<IconBuildingColumns />}
                      footerName="สมัครเป็นผู้ดำเนินการสอน"
                    />
                    <FooterItem
                      icon={<IconHandshake />}
                      footerName="ร่วมงานกับเรา"
                    />
                  </div>
                </div>
                <div style={{ marginBottom: "30px" }}>
                  <FooterItem footerName="สนใจข้อมูลเพิ่มเติมสามารถติดต่อ" />
                  <div style={{ marginTop: "12px" }}>
                    <FooterItem
                      icon={<IconPhone />}
                      footerName="02-096-2899 "
                    />
                    <FooterItem
                      icon={<IconLine />}
                      footerName="ID Line: @borntoDev"
                    />
                    <FooterItem footerName="(จ - ศ 09.30 - 18.00 น. )" />
                  </div>
                </div>
                <div style={{ marginBottom: "30px" }}>
                  <FooterItem footerName="ได้รับการรับรองจาก" />
                  <div>
                    <img src={Dbd} alt={Dbd} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer02-outer">
          <div className="footer03-outer">
            <div className="footer02-outer01">
              <div className="footer01-text">
                <p style={{ margin: "0" }}>
                  สงวนลิขสิทธิ์ © 2565 - ข้อมูลและเนื้อหาทั้งหมด - บริษัท
                  บอร์นทูเดฟ จำกัด
                </p>
                <a href="">นโยบายรักษาข้อมูลส่วนบุคคล</a>
                <a href="">ข้อตกลงและเงื่อนไขการใช้บริการ</a>
              </div>
            </div>
            <div className="footer02-icon01">
              <FooterItem icon={<IconFacebook />} />
              <FooterItem icon={<IconYoutube />} />
              <FooterItem icon={<IconGitHub />} />
              <FooterItem icon={<IconPhone />} />
              <FooterItem icon={<IconEnvelope />} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
