interface PageHeaderProps {
  title: string;
}

export function PageHeader(props: PageHeaderProps) {
  return <h1 className="font-heading text-xl font-bold">{props.title}</h1>;
}
