import { useState } from "react";
import { Card } from "@julianelda/scratchpad";
import Header from "src/components/header/header";
import { ChromePicker } from "react-color";

export default function Color() {
  const [color, setColor] = useState<string>("#dc143c");

  return (
    <>
      <div>
        <Header title="Color picker" />
      </div>
      <Card>
        <ChromePicker
          color={color}
          onChangeComplete={(value) => setColor(value.hex)}
        />
      </Card>
    </>
  );
}
