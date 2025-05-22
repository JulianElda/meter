export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-xl">
      <strong># {children}</strong>
    </h2>
  );
}
