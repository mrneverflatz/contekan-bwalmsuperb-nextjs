import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";

import { Providers } from "@/redux/provider";
import { useAuth } from "@/hooks/useAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LMSuperb",
  description: "LMS",
};

export default async function RootLayout(props) {
  const auth = await useAuth.fromServer();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="container mx-auto mt-12">
            {auth ? props.session : props.guest}
          </main>
        </Providers>
      </body>
    </html>
  );
}
