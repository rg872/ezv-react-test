import Link from "next/link";
import { Inter } from "next/font/google";
import { API_URL } from "@/utils/constants";
import { Product, ProductList } from "@/utils/types";
import ProductCard from "@/components/ProductCard";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  productList: ProductList;
}

export async function getServerSideProps() {
  const res = await fetch(API_URL + "/products/");
  const productList: ProductList = await res.json();

  return {
    props: {
      productList,
    },
  };
}

export default function Home({ productList }: HomeProps) {
  return (
    <main>
      {productList.products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </main>
  );
}
