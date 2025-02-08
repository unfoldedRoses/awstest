import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "../components/Header";



export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div className="min-h-screen flex flex-col">
        <Header /> {/* Assuming Header is a component */}
        <main className="flex-1">{children}</main>
      </div>
    </ClerkProvider>
  );
}