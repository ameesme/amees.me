import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Work_Sans } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import HomeContent from "@/content/Home";
import { usePathname } from "next/navigation";

const IBMPlex = IBM_Plex_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mees Boeijen - Indie app developer, digital product engineer",
  description:
    "Eindhoven-based indie app developer, specialized in Product Engineering and React Native.",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFEFC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          "flex bg-grey-250 w-full h-screen overflow-hidden",
          IBMPlex.className
        )}
      >
        <HomeContent>{children}</HomeContent>
      </body>
    </html>
  );
}
