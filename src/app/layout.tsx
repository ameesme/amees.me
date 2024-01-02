import type { Metadata } from "next";
import { IBM_Plex_Sans, Work_Sans } from "next/font/google";
import "./globals.css";
import classNames from "classnames";

const IBMPlex = IBM_Plex_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mees Boeijen - Indie app developer, digital product engineer",
  description:
    "Eindhoven-based indie app developer, specialized in Product Engineering and React Native.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames("bg-grey-250", IBMPlex.className)}>
        {children}
      </body>
    </html>
  );
}
