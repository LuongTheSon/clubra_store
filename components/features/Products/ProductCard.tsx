import Image from "next/image";

export default function ProductCard({
  image,
  name,
  price,
}: {
  image: string;
  name: string;
  price: number;
}) {
  return (
    <div className="">
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
      <p className="text-neutral-1000 text-xl font-medium">${price}</p>
    </div>
  );
}
