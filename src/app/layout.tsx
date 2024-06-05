import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Logout from "./logout";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abricos",
  description: "Asai Viata",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  let content;
  if (session) {
    content = <div className="btn-group">
        <Logout/>
        <Link className="btn" href={"/register"}>Add New User</Link>
        <Link className="btn" href={"/list"}>List of Users</Link>
      </div>;
  } else {
    content = <div className="btn-group">
        <Link className="btn" href={"/login"}>Login</Link>
        <Link className="btn" href={"/register"}>Add New User</Link>
        <Link className="btn" href={"/list"}>List of Users</Link>
      </div>;
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          {content}
        </nav>
        {children}</body>
    </html>
  );
}
