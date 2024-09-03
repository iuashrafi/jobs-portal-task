import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
const myFont = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Variable.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CyberMind Works | Job Board",
  description: "Created by Imtiaz uddin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
