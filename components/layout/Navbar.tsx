"use client";
import { Handbag, UserRound } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { images } from "@/public/images/assets";
import Link from "next/link";
import SearchButton from "./SearchButton";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      href: "/",
      label: "HOME",
    },
    {
      href: "/collections",
      label: "COLLECTION",
    },
    {
      href: "/about",
      label: "ABOUT",
    },
    {
      href: "/contact",
      label: "CONTACT",
    },
  ];

  return (
    <div className="fixed left-0 right-0 top-0 z-50 bg-white py-[29px_19px]">
      <div className="inner flex items-center justify-between">
        <h1 className="flex h-[53px] w-[140px] items-center">
          <Link href="/">
            <Image
              src={images.logo}
              alt="logo"
              width={140}
              height={53}
              className="h-full w-full object-contain"
            />
          </Link>
        </h1>
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-xl font-medium tracking-[1px] text-neutral-950 ${pathname === link.href ? "border-b border-neutral-950" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-8">
          <SearchButton onToggle={() => {}} disabled={pathname === "/products" ? false : true} />
          <Link href="/cart" className="relative z-10 cursor-pointer">
            <Handbag className="size-6" />
            <span className="absolute -bottom-2 -right-2.5 -z-10 flex size-5 items-center justify-center rounded-full bg-neutral-950 text-center text-xs text-white">
              0
            </span>
          </Link>
          <Link href="/login" className="relative z-10 cursor-pointer">
            <UserRound className="size-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
