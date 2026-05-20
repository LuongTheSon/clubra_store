import { images } from "@/public/images/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const companyLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/",
      label: "About",
    },
    {
      href: "/",
      label: "Contact",
    },
    {
      href: "/",
      label: "Terms of Service",
    },
    {
      href: "/",
      label: "Privacy Policy",
    },
  ];
  return (
    <div className="mt-20">
      <div className="inner">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <Link href="/" className="flex h-[78px] w-[190px] items-center">
              <Image
                src={images.logo}
                alt="logo"
                width={190}
                height={78}
                className="h-full w-full object-contain"
              />
            </Link>
            <p className="mt-4 text-2xl font-medium leading-7 text-neutral-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex justify-between gap-10">
            <div>
              <p className="mb-6 text-3xl font-medium tracking-[1px] text-neutral-900">COMPANY</p>
              <ul>
                {companyLinks.map((link) => (
                  <li key={link.href} className="mb-2">
                    <Link href={link.href} className="text-2xl tracking-[1px] text-neutral-700">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-6 text-3xl font-medium tracking-[1px] text-neutral-900">
                GET IN TOUCH
              </p>
              <ul>
                <li className="mb-2">
                  <Link
                    href="tel:+1-212-456-7890"
                    className="text-2xl tracking-[1px] text-neutral-700"
                  >
                    +1-212-456-7890
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:thesonworking@gmail.com"
                    className="text-2xl tracking-[1px] text-neutral-700"
                  >
                    thesonworking@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-300 p-[40px_10px]">
          <p className="text-center text-xl tracking-[1px] text-neutral-700">
            Copyright 2024 &copy; All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
