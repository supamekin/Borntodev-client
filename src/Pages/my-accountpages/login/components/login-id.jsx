import { FormControl } from "@mui/material";
import { Input } from "antd";
import { Controller } from "react-hook-form";
import { addErrorIntoField } from "../../../../Pages/borntodev-for-businesspages/components/utils";
import ErrorMessage from "../../../../Pages/borntodev-for-businesspages/components/ErrorMessage";

const LoginId = ({name, control, errors}) => {
  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Input {...field} {...addErrorIntoField(errors[name])} style={{borderRadius:'0'}}/>}
    />
    {errors[name] ? <ErrorMessage message={errors[name].message}/> : null}
  </FormControl>
  )
}

export default LoginId