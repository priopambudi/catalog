import React from "react";
import Image from "next/image";
import s from "@/styles/index.module.scss";
import styles from "./detail.module.scss";
import { dataProps } from "@/components/CardItem";

async function getDetail(productId: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const DetailPage = async ({ params }: { params: { productId: string } }) => {
  const detail: dataProps = await getDetail(params.productId);

  return (
    <div className={s.flex_top}>
      <div className={styles.product_view}>
        <div className={styles.img_wrap}>
          <Image
            src={detail?.image}
            alt={detail?.title}
            width={200}
            height={300}
          />
        </div>
      </div>
      <div className={styles.detail_description}>
        <p>{detail.title}</p>
        <p>Price</p>
      </div>
    </div>
  );
};

export default DetailPage;
