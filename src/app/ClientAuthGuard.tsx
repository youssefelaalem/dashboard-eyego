"use client"
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function ClientAuthGuard({children}:{children :React.ReactNode}) {
 const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, []);

  return <>{children}</>;
}
