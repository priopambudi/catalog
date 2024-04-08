import styles from "../styles/index.module.scss";
import CardItem from "@/components/CardItem";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const catalog = await getData();

  return (
    <div className={styles.grid}>
      {catalog
        ? catalog.map((data: any) => <CardItem key={data?.id} data={data} />)
        : "data not found"}
    </div>
  );
}
