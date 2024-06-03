type PageHeaderProps = {
  title: string;
};

export function PageHeader(props: PageHeaderProps) {
  return <h1 className="pb-2 font-heading text-xl">{props.title}</h1>;
}
