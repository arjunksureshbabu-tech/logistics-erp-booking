import type { FieldError } from "react-hook-form";

type Props = {
  inputLabel: string;
  inputType: "input" | "textarea";
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function renderInput(
  inputType: "input" | "textarea",
  props: any,
  error?: FieldError,
  inputLabel?: string,
) {
  const baseClass = `border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2  disabled:bg-gray-200
  disabled:text-gray-500
  disabled:border-gray-300
  disabled:cursor-not-allowed
  disabled:focus:ring-0 ${
    error
      ? "border-red-500 focus:ring-red-300"
      : "border-gray-300 focus:ring-blue-300"
  }`;

  switch (inputType) {
    case "input":
      return (
        <input key={`input-${inputLabel}`} {...props} className={baseClass} />
      );

    case "textarea":
      return (
        <textarea
          key={`textarea-${inputLabel}`}
          {...props}
          className={baseClass}
        />
      );

    default:
      return null;
  }
}

export default function FormField({
  inputLabel,
  inputType,
  required,
  error,
  name,
  ...props
}: Props) {
  return (
    <div className="flex flex-col gap-1 w-full mt-2">
      {/* Label */}
      <label htmlFor={inputLabel} className="text-sm font-medium text-gray-700">
        {inputLabel}
        {required && <span className="text-red-500">*</span>}
      </label>
      {renderInput(inputType, props, error, inputLabel)}

      {/* Error */}
      {error && (
        <span className="text-red-500 text-sm mt-1">{error.message}</span>
      )}
    </div>
  );
}
