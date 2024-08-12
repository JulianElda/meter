import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

import "@julianelda/scratchpad/style.css";
import "./../app/tailwind.css";

const preview: Preview = {
  decorators: [
    // @ts-ignore
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
