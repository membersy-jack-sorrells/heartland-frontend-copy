import React, { useState } from "react";

export const Toggle = (props) => {
  return (
    <span
      role="checkbox"
      tabindex="0"
      aria-checked="false"
      className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline  ${
        props.isChecked ? "bg-blue-600" : "bg-gray-200"
      }`}
      onClick={() => props.setIsChecked(!props.isChecked)}
    >
      <span
        aria-hidden="true"
        className={`inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200 ${
          props.isChecked ? " translate-x-5" : " translate-x-0"
        }`}
      ></span>
    </span>
  );
};
