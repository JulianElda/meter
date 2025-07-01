interface PageHeaderProps {
  title: string;
}

export function PageHeader(props: PageHeaderProps) {
  return <h2 className="pb-2 font-heading text-xl">{props.title}</h2>;
}
