type HeaderProps = {
  title: string;
};

export default function Header(props: HeaderProps) {
  return <h1 className="app-heading">{props.title}</h1>;
}
