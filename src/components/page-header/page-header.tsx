interface PageHeaderProps {
  title: string;
}

export function PageHeader(props: PageHeaderProps) {
  return <h1 className="font-heading font-bold text-xl">{props.title}</h1>;
}
