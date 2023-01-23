type HeaderProps = {
  title: string;
};

export default function Header(props: HeaderProps) {
  return (
    <h1 className="font-mono text-2xl text-center mt-1 mb-4">{props.title}</h1>
  );
}
