export function Header({ title }: { title: string }) {
  return (
    <h2 className="font-heading text-xl">
      <strong># {title}</strong>
    </h2>
  );
}
