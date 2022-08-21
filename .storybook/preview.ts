// import app styles
import "./../src/assets/styles/index.scss";
import "./../src/assets/styles/tailwind.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
