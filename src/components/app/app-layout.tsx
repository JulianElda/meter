import { AppClient } from "./app-client";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-4xl flex-col sm:pt-4">
      <h1 className="text-center font-heading text-3xl font-semibold">meter</h1>
      <p className="my-1 text-center font-heading text-lg font-semibold md:pb-10">
        tools and converters
      </p>

      <AppClient>{children}</AppClient>
    </div>
  );
}
