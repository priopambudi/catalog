"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./carditem.module.scss";
import s from "@/styles/index.module.scss";
import Button from "@/components/Button";

export interface dataProps {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const CardItem = (props: { data: dataProps }) => {
  const { id, title, price, category, image, rating } = props.data;

  return (
    <Link href={`/detail/${id}`} className={styles.card_item}>
      <div className={styles.img_wrap}>
        <Image
          src={image}
          width={300}
          height={350}
          alt={title}
          loading="lazy"
        />
        <p className={styles.category}>{category}</p>
      </div>
      <div className={styles.description_box}>
        <p className={styles.title}>{title}</p>
        <div className={s.flex_between}>
          <div className={styles.rating}>
            <p>⭐ {rating.rate}</p>
            <span>|</span>
            <p>{rating.count} reviews</p>
          </div>
          <p className={styles.price}>${price}</p>
        </div>
        <Button>Beli Sekarang</Button>
      </div>
    </Link>
  );
};

export default CardItem;
