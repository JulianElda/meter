import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  clearInput,
  expectAttribute,
  expectValue,
  typeInput,
} from "tests.helper";

import Color from "./color";

const R_LABEL = "red";
const G_LABEL = "green";
const B_LABEL = "blue";
const HEX_LABEL = "hex";

const user = userEvent.setup();

describe("preview", () => {
  test("background color in rgb", async () => {
    render(<Color />);
    clearInput(user, HEX_LABEL);
    await typeInput(user, HEX_LABEL, "DC143C");
    expectAttribute("preview", "style", "background-color: rgb(220, 20, 60);");
  });
});

describe("hex to rgb", () => {
  test("crimson #DC143C to (220, 20, 60)", async () => {
    render(<Color />);
    clearInput(user, HEX_LABEL);
    await typeInput(user, HEX_LABEL, "DC143C");
    expectValue(R_LABEL, "220");
    expectValue(G_LABEL, "20");
    expectValue(B_LABEL, "60");
  });
});

describe("rgb to hex", () => {
  test("crimson (220, 20, 60) to #DC143C", async () => {
    render(<Color />);
    clearInput(user, R_LABEL);
    clearInput(user, G_LABEL);
    clearInput(user, B_LABEL);
    await typeInput(user, R_LABEL, "220");
    await typeInput(user, G_LABEL, "20");
    await typeInput(user, B_LABEL, "60");
    expectValue(HEX_LABEL, "DC143C");
  });

  test("black (0, 0, 0) to #000000", async () => {
    render(<Color />);
    clearInput(user, R_LABEL);
    clearInput(user, G_LABEL);
    clearInput(user, B_LABEL);
    await typeInput(user, R_LABEL, "0");
    await typeInput(user, G_LABEL, "0");
    await typeInput(user, B_LABEL, "0");
    expectValue(HEX_LABEL, "000000");
  });

  test("white (255, 255, 255) to #FFFFFF", async () => {
    render(<Color />);
    clearInput(user, R_LABEL);
    clearInput(user, G_LABEL);
    clearInput(user, B_LABEL);
    await typeInput(user, R_LABEL, "255");
    await typeInput(user, G_LABEL, "255");
    await typeInput(user, B_LABEL, "255");
    expectValue(HEX_LABEL, "FFFFFF");
  });
});
