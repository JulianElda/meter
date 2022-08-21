type FooterProps = {
  repoUrl: string;
  label: string;
};

export default function Footer(props: FooterProps) {
  return (
    <div className="app-footer">
      <a
        href={props.repoUrl}
        target="_blank"
        rel="noreferrer"
        className="app-url">
        {props.label}
      </a>
    </div>
  );
}
