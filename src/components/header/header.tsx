export type HeaderProps = {
  title: string;
};

export default function Header(props: HeaderProps) {
  return (
    <h1 className="font-medium text-xl mb-4 text-gray-200">{props.title}</h1>
  );
}
