import { Input, Checkbox, Button } from "antd";
import "./styles/my-account.css";
import { useState } from "react";

const MyAccount = () => {
  const [tapNumber, setTapNumber] = useState(1);
  return (
    <>
      <div className="my-Account">
        <div className="my-Account-header">
          <div
            className="tap02"
            style={{
              textAlign: "center",
              fontSize: "3em",
              cursor: "pointer",
              color: "#bfbfbf",
            }}
            onClick={() => setTapNumber(1)}
          >
            เข้าสู่ระบบ
          </div>
          <div
            className="tap02"
            style={{
              textAlign: "center",
              fontSize: "3em",
              cursor: "pointer",
              color: "#bfbfbf",
            }}
            onClick={() => setTapNumber(2)}
          >
            ลงทะเบียน
          </div>
        </div>
        <br />
        {tapNumber === 1 ? (
          <div
            className="input-field"
            style={{ width: "40vw", height: "600px" }}
          >
            <div className="register-email">
              <h4>อีเมล</h4>
              <Input placeholder="Basic usage" />
            </div>
            <div className="register-password">
              <h4>รหัสผ่าน</h4>
              <Input.Password placeholder="input password" />
            </div>
            <Checkbox style={{fontFamily:"Prompt",fontWeight:"700"}}>จำฉันไว้</Checkbox>
            <Button type="primary" block style={{ backgroundColor: "#ffc40b",margin:"16px 0" }}>
              เข้าสู่ระบบ
            </Button>
            <h4><a href="" style={{color:"#ffc40b"}}>คุณจำรหัสผ่านไม่ได้?</a></h4>
          </div>
        ) : null}
        {tapNumber === 2 ? (
          <div
            className="input-field"
            style={{ width: "40vw", height: "600px" }}
          >
            <div className="Name-LastName-header">
              <div className="register-name">
                <h4>Name</h4>
                <Input placeholder="Basic usage" style={{ width: "267.5px" }} />
              </div>
              <div className="register-lastname">
                <h4>Last Name</h4>
                <Input placeholder="Basic usage" style={{ width: "267.5px" }} />
              </div>
            </div>
            <div className="register-email">
              <h4>
                อีเมล<span style={{ color: "#ffc40b" }}>*</span>
              </h4>
              <Input placeholder="Basic usage" />
            </div>
            <div className="register-password">
              <h4>
                รหัสผ่าน<span style={{ color: "#ffc40b" }}>*</span>
              </h4>
              <Input.Password placeholder="input password" />
            </div>
            <p>
              <span>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
              </span>
              <span style={{ fontFamily: "Prompt", color: "#ffc40b" }}>
                นโยบายความเป็นส่วนตัว.
              </span>
            </p>
            <Button type="primary" block style={{ backgroundColor: "#ffc40b" }}>
              ลงทะเบียน
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default MyAccount;
