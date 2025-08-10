import { AppClient } from "./app-client";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`
        mx-auto flex h-full min-h-full w-full max-w-4xl flex-col
        sm:pt-4
        md:gap-5 md:pb-16
      `}>
      <AppClient>{children}</AppClient>
    </div>
  );
}
