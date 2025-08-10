import type { MDXComponents } from "mdx/types";

import { Header } from "./src/components/header/header";
import { Link } from "./src/components/link/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a(props) {
      return (
        <Link
          href={props.href ?? ""}
          title={props.children as string}
        />
      );
    },
    h2(props) {
      return <Header>{props.children}</Header>;
    },
    ...components,
  };
}
