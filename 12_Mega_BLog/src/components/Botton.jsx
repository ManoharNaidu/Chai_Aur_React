import React from "react";

function Botton({
  children,
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Botton;
