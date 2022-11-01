import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

export const StyledButton = ({
  children,
  black,
  ...restProps
}: {
  children: ReactNode;
  black?: boolean;
} & ButtonProps) => (
  <Button
    disableElevation
    {...restProps}
    sx={{
      color: black ? "white" : "black",
      background: black ? "black" : "white",
      borderRadius: "200px",
      padding: "8px 22px",
      fontSize: "20px",
    }}
  >
    {children}
  </Button>
);
