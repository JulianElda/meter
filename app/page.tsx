"use client";

import { MarkdownWrapper } from "@/src/components/MarkdownWrapper/MarkdownWrapper";

const content = `
## About

**meter** is a collection of tools and converters.

## Author

This website is developed by [Julius Polar](https://julianelda.io/).
You can find the source code in [GitLab](https://github.com/JulianElda/meter).
`;

export default function RootPage() {
  return <MarkdownWrapper content={content} />;
}
