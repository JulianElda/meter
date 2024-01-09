export type HeaderProps = {
  title: string;
};

export default function Header(props: HeaderProps) {
  return <h1 className="pb-2 pt-8 font-heading text-xl">{props.title}</h1>;
}
