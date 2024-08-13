import Markdown from "react-markdown";
import { Hyperlink } from "@julianelda/scratchpad";
import { Header } from "@/src/components/Header/Header";

export function MarkdownWrapper({ content }: { content: string }) {
  return (
    <Markdown
      components={{
        a(props) {
          return (
            <Hyperlink
              title={props.children as string}
              href={props.href!}
            />
          );
        },
        h2(props) {
          return <Header title={props.children as string} />;
        },
      }}>
      {content}
    </Markdown>
  );
}
