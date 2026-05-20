import { images } from "@/public/images/assets";
import Image from "next/image";

export default function ProductRate() {
  return (
    <div>
      <div className="mb-8 flex items-center">
        <div className="grid grid-cols-[repeat(5,22px)] gap-1">
          <span>
            <Image src={images.star_icon} alt="" />
          </span>
          <span>
            <Image src={images.star_icon} alt="" />
          </span>
          <span>
            <Image src={images.star_icon} alt="" />
          </span>
          <span>
            <Image src={images.star_icon} alt="" />
          </span>
          <span>
            <Image src={images.star_dull_icon} alt="" />
          </span>
        </div>
        <p className="ml-4 text-xl">(122)</p>
      </div>
    </div>
  );
}
