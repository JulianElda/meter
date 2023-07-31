export type HeaderProps = {
  title: string;
};

export default function Header(props: HeaderProps) {
  return <h1 className="font-mono text-xl mb-4">{props.title}</h1>;
}
