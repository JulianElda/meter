import type { Metadata } from "next";

import localFont from "next/font/local";

import AppLayout from "@/src/components/app/app-layout";

import "./tailwind.css";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  description: "conversion and utilities online, made by Julius Polar",
  title: "meter",
};

const heliotrope3 = localFont({
  display: "swap",
  src: [
    {
      path: "./../node_modules/@julianelda/stilo/fonts/heliotrope_3_regular.woff2",
      style: "normal",
    },
    {
      path: "./../node_modules/@julianelda/stilo/fonts/heliotrope_3_italic.woff2",
      style: "italic",
    },
    {
      path: "./../node_modules/@julianelda/stilo/fonts/heliotrope_3_bold.woff2",
      weight: "bold",
    },
    {
      path: "./../node_modules/@julianelda/stilo/fonts/heliotrope_3_bold_italic.woff2",
      style: "italic",
      weight: "bold",
    },
  ],
  variable: "--font-heliotrope3",
});

const heliotrope4 = localFont({
  display: "swap",
  src: [
    {
      path: "./../node_modules/@julianelda/stilo/fonts/heliotrope_4_regular.woff2",
      style: "normal",
    },
    {
      path: "./../node_modules/@julianelda/stilo/fonts/heliotrope_4_italic.woff2",
      style: "italic",
    },
    {
      path: "./../node_modules/@julianelda/stilo/fonts/heliotrope_4_bold.woff2",
      weight: "bold",
    },
    {
      path: "./../node_modules/@julianelda/stilo/fonts/heliotrope_4_bold_italic.woff2",
      style: "italic",
      weight: "bold",
    },
  ],
  variable: "--font-heliotrope4",
});

const mPlus = localFont({
  display: "swap",
  src: "./../styles/MplusCodeLatin60-Regular.woff2",
  variable: "--font-mpluscode",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${heliotrope3.variable} ${heliotrope4.variable} ${mPlus.variable}`}
      lang="en">
      <body className="bg-app-background-light text-app-text-light dark:bg-app-background-dark dark:text-app-text-dark size-full font-serif">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
