import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={inter.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
