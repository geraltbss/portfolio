import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buddhima Senarathna - Data, AI & building",
  description:
    "A portfolio of practical tools and experiments in data, AI, and software by Buddhima Senarathna.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
