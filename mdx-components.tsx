import type { MDXComponents } from "mdx/types";
import Link from "./src/components/link/link";
import Header from "./src/components/header/header";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a(props) {
      return (
        <Link
          title={props.children as string}
          href={props.href!}
        />
      );
    },
    h2(props) {
      return <Header>{props.children}</Header>;
    },
    ...components,
  };
}
