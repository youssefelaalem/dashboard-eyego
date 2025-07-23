"use client";
import Menu from "../Components/Menu";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Components/Navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, []);
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[17%] xl:w-[14%] p-4 h-screen overflow-auto">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image
            src="/Logo.jpg"
            alt="logo"
            className=""
            width={40}
            height={40}
          />
          <span className="hidden lg:block font-bold">Eyego</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[83%] xl:w-[86%] bg-[#F7F8FA] overflow-auto flex flex-col">
        <Navbar />
        <div className="p-4 w-[100%]">{children}</div>
      </div>
    </div>
  );
}
