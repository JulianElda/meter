import type { Metadata } from "next";

import App from "./../src/components/App/App";

import "./tailwind.css";

export const metadata: Metadata = {
  title: "meter",
  description: "meter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 p-2 font-serif text-neutral-900 dark:bg-gray-800 dark:text-gray-50">
        <App>{children}</App>
      </body>
    </html>
  );
}
