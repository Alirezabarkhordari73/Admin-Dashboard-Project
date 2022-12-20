import React from "react";
import { useStateContext } from "../context/ContextProvider";

const Button = ({
  borderColor,
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}) => {
  const { initialState, setIsClicked } = useStateContext();

  return (
    <div>
      <button
        className={`border-1 ${size} p-3 h-10 ${width} rounded mt-6 hover:bg-${bgHoverColor} hover:text-white transition text-center flex items-center justify-center`}
        type="button"
        onClick={() => setIsClicked(initialState)}
        style={{ backgroundColor: bgColor, color, borderRadius, borderColor }}>
        {text}
      </button>
    </div>
  );
};

export default Button;
