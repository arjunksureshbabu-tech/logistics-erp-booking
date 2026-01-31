import type { FormInputProps } from "../../types/booking.types";

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
  placeholder = "",
  required = false,
  error,
  value,
  onChange,
  disabled = false,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-full m-2">
      {/* Label */}
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      {/* Input */}
      <input
        {...props}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`border rounded-lg px-3 py-2 text-sm
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

export default FormInput;
