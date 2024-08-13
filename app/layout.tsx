//import type { Metadata } from "next";
import dynamic from "next/dynamic";

import "@julianelda/scratchpad/style.css";
import "./../styles/index.css";
import "./tailwind.css";

/*
export const metadata: Metadata = {
  title: "meter",
  description: "meter",
};
*/

const AppComponent = dynamic(() => import("./../src/components/App/App"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <base href="/" />
      </head>
      <body className="bg-gray-50 p-2 font-serif text-neutral-900 dark:bg-gray-800 dark:text-gray-50">
        <AppComponent>{children}</AppComponent>
      </body>
    </html>
  );
}
