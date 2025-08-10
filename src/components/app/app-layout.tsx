import { AppClient } from "./app-client";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-4xl flex-col sm:pt-4 md:pb-16 md:gap-5">
      <AppClient>{children}</AppClient>
    </div>
  );
}
