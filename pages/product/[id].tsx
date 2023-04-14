import { API_URL } from "@/utils/constants";
import { Product } from "@/utils/types";
import Image from "next/image";

interface ProductDetailProps {
  productData: Product;
}

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(API_URL + `/products/${params.id}`);
  const productData: Product = await res.json();

  return {
    props: {
      productData,
    },
  };
}

export default function ProductDetail({ productData }: ProductDetailProps) {
  return (
    <main>
      <section className="w-full h-1/4 sm:h-1/3">
        <Image
          src={productData.thumbnail}
          alt={`picture of ${productData.title}`}
          width={800}
          height={800}
          //   fill={true}
        />
      </section>
      <section className="flex flex-row justify-between w-full h-20 sm:h-40">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p>{`${productData.title} - ${productData.brand}`}</p>
            <p>{productData.description}</p>
          </div>
          <div>{productData.category}</div>
        </div>
        <div className="flex flex-col justify-between">
          <p>{productData.price}</p>
          <p>{productData.rating}</p>
        </div>
      </section>
      <section className="flex flex-wrap">
        {productData.images.map((image, index) => (
          <div key={`image${index}`} className="w-1/2 sm:w-1/3 lg:w-1/4">
            <Image
              src={image}
              alt={`picture of ${productData.title} number ${index}`}
              width={400}
              height={400}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
