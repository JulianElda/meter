import { FOOTER_LABEL, REPO_URL } from "consts";

export default function Footer() {
  return (
    <div className="grid justify-items-end mt-2 mx-2">
      <a
        href={REPO_URL}
        target="_blank"
        rel="noreferrer"
        className="font-mono hover:underline decoration-dotted">
        {FOOTER_LABEL}
      </a>
    </div>
  );
}
