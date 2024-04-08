"use client";
import React from "react";
import styles from "./button.module.scss";

const Button = () => {
  return (
    <button
      className={styles.green_btn}
      onClick={(e) => {
        e.preventDefault();
        alert("Beli Sekarang");
      }}
    >
      Beli Sekarang
    </button>
  );
};

export default Button;
