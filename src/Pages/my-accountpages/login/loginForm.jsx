import LoginId from "./components/login-id";
import LoginPassword from "./components/login-password";
import { Checkbox } from "antd";
import "../styles/my-account.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "antd";

const LoginForm = ({ onSubmit, loadingBtn}) => {
  // create schema validation
  const schema = yup.object({
    email: yup.string().required("Email is required").email(),
    password: yup.string().required("Password is required").matches(),
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  return (
    <>
      <div
        className="input-field"
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "35vw", height: "600px" }}
      >
        <div className="Login-email">
          <label>ชื่อผู้ใช้หรือที่อยู่อีเมล</label>
          <span style={{ color: "#ffc40b" }}>*</span>
          <LoginId errors={errors} control={control} name="email" />
        </div>
        <div className="Login-password">
          <label>รหัสผ่าน</label>
          <span style={{ color: "#ffc40b" }}>*</span>
          <LoginPassword errors={errors} control={control} name="password" />
        </div>
        <Checkbox style={{ fontFamily: "Prompt", fontWeight: "700" }}>
          จำฉันไว้
        </Checkbox>

        <Button
          type="submit"
          variant="contained"
          style={{
            width: "100%",
            backgroundColor: "#ffc40b",
            color: "white",
            marginTop: "2rem",
            marginBottom: "3rem",
          }}
          onClick={handleSubmit(onSubmit)}
          loading={loadingBtn}
        >
          เข้าสู้ระบบ
        </Button>
        <h4 style={{ textAlign: "center" }}>
          <a href="" style={{ color: "#ffc40b" }}>
            คุณจำรหัสผ่านไม่ได้?
          </a>
        </h4>
      </div>
    </>
  );
};

export default LoginForm;
