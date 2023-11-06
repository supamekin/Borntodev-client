import "./styles/my-account.css";
import { useState } from "react";
import LoginForm from "./login/loginForm";
import RegisterForm from "./registerForm/registerForm";
import "./styles/responsive.css";
import "./styles/login-register.css"

const MyAccount = () => {
  const [tapNumber, setTapNumber] = useState(1);
  const [loadingBtnRegister, setloadingBtnRegister] = useState();

  // LoginForm
  const onSubmitFormlLogin = (data) => {
    setloadingBtnRegister(true);
    console.log(data);
    const formdata = {
      email: data.email,
      password: data.password,
    };
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((res) => {
        const data = res.data;
        setloadingBtnRegister(false);
        console.log(data);
      });
  };

  // RegisterForm
  const onSubmitFormRegister = (data) => {
    setloadingBtnRegister(true);
    console.log(data);
    const formdata = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      password: data.password,
    };
    fetch("http://localhost:8080/user/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((res) => {
        const data = res.data;
        setloadingBtnRegister(false);
        console.log(data);
      });
  };

  return (
    <>
      <div className="my-Account">
        <div className="my-Account-header" style={{fontSize:"3em"}}>
          <div
            className={tapNumber === 1 ? "tap02-selected" : "tap02"}
            style={{
              textAlign: "center",
              cursor: "pointer",
              color: "#bfbfbf",
            }}
            onClick={() => setTapNumber(1)}
          >
            เข้าสู่ระบบ
          </div>
          <div
            className={tapNumber === 2 ? "tap02-selected" : "tap02"}
            style={{
              textAlign: "center",
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
          <LoginForm
            onSubmit={onSubmitFormlLogin}
            loadingBtn={loadingBtnRegister}
          />
        ) : null}
        {tapNumber === 2 ? (
          <RegisterForm
            onSubmit={onSubmitFormRegister}
            loadingBtn={loadingBtnRegister}
          />
        ) : null}
      </div>
    </>
  );
};

export default MyAccount;
