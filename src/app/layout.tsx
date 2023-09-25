import "./globals.css";
import { Providers } from "./providers";
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";

const inter = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gene Ni | Aspiring Software Engineer",
  description:
    "Hello there! I'm Gene, a passionate and driven junior at the University of Maryland, pursuing a degree in Computer Science. I enjoy the world of programming and love learning the newest packages, frameworks and coding paradigms! I invite you to take a peek into my journey as a programmer!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" !scroll-smooth md:scroll-pt-0">
      <body className={`${inter.className} dark bg-black overflow-x-hidden`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
