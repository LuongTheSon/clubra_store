import { useShop } from "@/hooks/useShop";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  id,
  image,
  name,
  price,
}: {
  id: string;
  image: string;
  name: string;
  price: number;
}) {
  const { formatCurrency } = useShop();
  return (
    <Link href={`/collections/${id}`}>
      <figure className="mb-5 w-full">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="h-full w-full object-cover"
        />
      </figure>
      <h4 className="text-md text-neutral-1100 mb-2 font-medium">{name}</h4>
      <p className="text-neutral-1000 text-xl font-medium">{formatCurrency(price)}</p>
    </Link>
  );
}
