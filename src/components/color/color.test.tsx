import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { typeInput, expectResult, clearInput } from "tests.helper";

import Color from "./color";

const R_LABEL = "R";
const G_LABEL = "G";
const B_LABEL = "B";
const HEX_LABEL = "Hex";

const user = userEvent.setup();

describe("hex to rgb", () => {
  test("crimson #DC143C to (220, 20, 60)", async () => {
    render(<Color />);
    clearInput(user, HEX_LABEL);
    await typeInput(user, HEX_LABEL, "DC143C");
    expectResult(R_LABEL, "220");
    expectResult(G_LABEL, "20");
    expectResult(B_LABEL, "60");
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
    expectResult(HEX_LABEL, "DC143C");
  });

  test("black (0, 0, 0) to #000000", async () => {
    render(<Color />);
    clearInput(user, R_LABEL);
    clearInput(user, G_LABEL);
    clearInput(user, B_LABEL);
    await typeInput(user, R_LABEL, "0");
    await typeInput(user, G_LABEL, "0");
    await typeInput(user, B_LABEL, "0");
    expectResult(HEX_LABEL, "000000");
  });

  test("white (255, 255, 255) to #FFFFFF", async () => {
    render(<Color />);
    clearInput(user, R_LABEL);
    clearInput(user, G_LABEL);
    clearInput(user, B_LABEL);
    await typeInput(user, R_LABEL, "255");
    await typeInput(user, G_LABEL, "255");
    await typeInput(user, B_LABEL, "255");
    expectResult(HEX_LABEL, "FFFFFF");
  });
});
