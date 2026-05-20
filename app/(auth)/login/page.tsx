"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  return (
    <div className="flex h-[calc(100vh-105px)] flex-col items-center justify-center">
      <h1 className="mb-10 inline-block h-[118px] w-[120px]">
        <Image
          src="/common/logo.svg"
          alt="logo"
          width={80}
          height={78}
          className="h-full w-full object-contain"
        />
      </h1>
      <form action="">
        <div className="flex w-[400px] flex-col">
          <div>
            <input
              className="text-neutral-1000 text-md h-[50px] w-full whitespace-nowrap rounded-lg border-2 border-neutral-950 bg-white p-[10px_19px] font-medium shadow-none"
              placeholder="Email"
            />
          </div>
          <div className="mt-2">
            <input
              className="text-neutral-1000 text-md h-[50px] w-full whitespace-nowrap rounded-lg border-2 border-neutral-950 bg-white p-[10px_19px] font-medium shadow-none"
              placeholder="Password"
            />
          </div>
          <Button type="submit" className="mt-5" onClick={() => router.push("/products")}>
            Login
            <ChevronRightIcon className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
