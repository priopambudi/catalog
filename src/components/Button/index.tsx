"use client";
import React from "react";
import styles from "./button.module.scss";

const Button = ({
  children,
  type = "default",
}: {
  children: React.ReactElement | string;
  type?: "outline" | "default";
}) => {
  return (
    <button
      className={`${styles.green_btn} ${
        type === "outline" && styles.outline_btn
      }`}
      onClick={(e) => {
        e.preventDefault();
        alert(children);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
