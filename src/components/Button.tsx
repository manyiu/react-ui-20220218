import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  id: string;
  label: string;
}

const Button = (props: ButtonProps) => {
  return <MuiButton id={props.id}>{props.label}</MuiButton>;
};

export default Button;
