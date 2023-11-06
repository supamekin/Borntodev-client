import Registerdata from "./components/registerdata";
import RegisterPassword from "./components/registerPassword";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "antd";

const RegisterForm = ({ onSubmit, loadingBtn }) => {
  // create schema validation
  const schema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().required("Email is required").email(),
    password: yup
      .string()
      .required("Password is required")
      .matches
      // pawdRegExp,
      // "Must Contain 8 Characters, One Uppercase, One Lowercase, One number and one special case Characters"
      (),
  });

  // Formdata

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  return (
    <>
      <form
        className="my-form"
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "40vw" }}
      >
        <div className="Full-Name">
          <div className="First-Name">
            <label>First Name</label>
            <Registerdata errors={errors} control={control} name="firstName" />
          </div>
          <div className="Last-Name">
            <label>Last Name</label>
            <Registerdata errors={errors} control={control} name="lastName" />
          </div>
        </div>
        <div className="Email">
          <label>อีเมล</label>
          <span style={{ color: "#ffc40b" }}>*</span>
          <Registerdata errors={errors} control={control} name="email" />
        </div>
        <div className="Password">
          <label>รหัสผ่าน</label>
          <span style={{ color: "#ffc40b" }}>*</span>
          <RegisterPassword errors={errors} control={control} name="password" />
        </div>
        <p style={{ marginTop: "16px" }}>
          <span>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
          </span>
          <span style={{ fontFamily: "Prompt", color: "#ffc40b" }}>
            นโยบายความเป็นส่วนตัว.
          </span>
        </p>
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
          loading={loadingBtn}
          onClick={handleSubmit(onSubmit)}
        >
          ลงทะเบียน
        </Button>
      </form>
    </>
  );
};

export default RegisterForm;
