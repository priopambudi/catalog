"use client";
import React from "react";
import styles from "./button.module.scss";
import { useRouter } from "next/navigation";

const Button = ({
  children,
  type = "default",
}: {
  children: React.ReactElement | string;
  type?: "outline" | "default" | "text";
}) => {
  const router = useRouter();

  if (type === "text") {
    return (
      <button
        className={styles.text_btn}
        onClick={() => {
          router.back();
        }}
      >
        {children}
      </button>
    );
  }

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
