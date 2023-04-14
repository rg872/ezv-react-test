import { Product } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  id,
  thumbnail,
  title,
  brand,
  description,
  category,
  price,
  rating,
}: Product) {
  return (
    <section className="flex flex-col sm:flex-row ">
      <div className="w-full sm:w-80">
        <Link href={`/product/${id}`}>
          <Image
            src={thumbnail}
            alt={`picture of ${title}`}
            width={450}
            height={400}
          />
        </Link>
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p>{`${title} - ${brand}`}</p>
            <p>{description}</p>
          </div>
          <div>{category}</div>
        </div>
        <div className="flex flex-col justify-between">
          <p>{price}</p>
          <p>{rating}</p>
        </div>
      </div>
    </section>
  );
}
