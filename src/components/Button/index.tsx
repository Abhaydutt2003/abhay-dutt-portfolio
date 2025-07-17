import React from "react";
import "./style.css";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "danger";
};

const Button: React.FC<Props> = ({ children, variant = "primary" }) => {
  return <button className={`btn btn-${variant}`}>{children}</button>;
};

export default Button;
