import { useEffect, useState } from "react";

import Card from "components/card/card";
import Input from "components/form/input";
import Header from "components/header/header";

import { calculateContrast } from "util/conversion";

const DEFAULT_RGB1 = ["220", "20", "60"];
const DEFAULT_RGB2 = ["125", "111", "252"];

export default function Contrast() {
  const [rgb1, setRgb1] = useState<string[]>(DEFAULT_RGB1);
  const [rgb2, setRgb2] = useState<string[]>(DEFAULT_RGB2);
  const [contrast, setContrast] = useState<string>();

  useEffect(() => {
    setContrast(calculateContrast(rgb1, rgb2));
  }, [rgb1, rgb2]);

  return (
    <>
      <div>
        <Header title="Contrast calculator" />
      </div>
      <Card>
        <div className="flex my-2 space-x-2">
          <Input
            type="text"
            id="red-input1"
            label="R"
            value={rgb1[0]}
            onChange={(value) => setRgb1([value, rgb1[1], rgb1[2]])}
          />
          <Input
            type="text"
            id="green-input1"
            label="G"
            value={rgb1[1]}
            onChange={(value) => setRgb1([rgb1[0], value, rgb1[2]])}
          />
          <Input
            type="text"
            id="blue-input1"
            label="B"
            value={rgb1[2]}
            onChange={(value) => setRgb1([rgb1[0], rgb1[1], value])}
          />
        </div>
        <div className="flex my-2 space-x-2">
          <Input
            type="text"
            id="red-input2"
            label="R"
            value={rgb2[0]}
            onChange={(value) => setRgb2([value, rgb2[1], rgb2[2]])}
          />
          <Input
            type="text"
            id="green-input2"
            label="G"
            value={rgb2[1]}
            onChange={(value) => setRgb2([rgb2[0], value, rgb2[2]])}
          />
          <Input
            type="text"
            id="blue-input1"
            label="B"
            value={rgb2[2]}
            onChange={(value) => setRgb2([rgb2[0], rgb2[1], value])}
          />
        </div>
        <div className="text-white">{contrast}</div>
      </Card>
    </>
  );
}
