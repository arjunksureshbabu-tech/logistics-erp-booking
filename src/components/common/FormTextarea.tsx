import React from "react";
import type { FormTextareaProps } from "../../types/booking.types";

const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  name,
  placeholder = "",
  required = false,
  error,
  value,
  onChange,
  disabled = false,
  rows = 4,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full m-2">
      {/* Label */}
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      {/* Textarea */}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        rows={rows}
        className={`border rounded-lg px-3 py-2 text-sm resize-none
          focus:outline-none focus:ring-2
          ${
            error
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-300"
          }
          ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
        `}
      />

      {/* Error */}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default FormTextarea;
