import React, { useState } from "react";
import { SwatchesPicker, SketchPicker, CirclePicker } from "react-color";
import { Header } from "../components";

const ColorPicker = () => {
  const [swatchesPicker, setSwatchesPicker] = useState("");

  console.log(swatchesPicker);
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="ColorPicker" />
      <div className="text-center mb-16">
        <div id="preview" style={{ backgroundColor: `${swatchesPicker}` }} />
      </div>
      <div className="flex items-center justify-center gap-20 flex-wrap 2xl:flex-nowrap">
        <div className="flex-col items-center justify-center gap-10">
          <p className="text-3xl mb-5">Color Palete</p>
          <SwatchesPicker
            width={400}
            height={400}
            onChange={(updatedColor) => setSwatchesPicker(updatedColor.hex)}
          />
        </div>
        <div className="flex-col items-center justify-center gap-10">
          <p className="text-3xl mb-5">Color Picker</p>
          <SketchPicker
            color={swatchesPicker}
            width={400}
            height={400}
            onChange={(updatedColor) => setSwatchesPicker(updatedColor.hex)}
          />
        </div>
        <div className="flex-col items-center justify-center gap-10">
          <p className="text-3xl mb-5">Color Picker</p>
          <CirclePicker
            width={400}
            height={400}
            onChange={(updatedColor) => setSwatchesPicker(updatedColor.hex)}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
