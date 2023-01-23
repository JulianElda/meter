type FooterProps = {
  repoUrl: string;
  label: string;
};

export default function Footer(props: FooterProps) {
  return (
    <div className="grid justify-items-end mt-2 mx-2">
      <a
        href={props.repoUrl}
        target="_blank"
        rel="noreferrer"
        className="font-mono hover:underline decoration-dotted">
        {props.label}
      </a>
    </div>
  );
}
