import { FormControl } from "@mui/material";
import { Input } from "antd";
import { Controller } from "react-hook-form";
import { addErrorIntoField } from "../../../borntodev-for-businesspages/components/utils";
import ErrorMessage from "../../../borntodev-for-businesspages/components/ErrorMessage";

const LoginPassword = ({name, control, errors}) => {
  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Input.Password {...field} {...addErrorIntoField(errors[name])} style={{borderRadius:'0'}}/>}
    />
    {errors[name] ? <ErrorMessage message={errors[name].message}/> : null}
  </FormControl>
  )
}

export default LoginPassword