import type { FieldError } from "react-hook-form";

type Props = {
  inputLabel: string;
  inputType: "input" | "textarea";
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

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

      {(() => {
        let inputElement;

        switch (inputType) {
          case "input":
            inputElement = (
              <input
                key={`input-${inputLabel}`}
                {...props}
                className={`border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                  error
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-300"
                }`}
              />
            );
            break;

          case "textarea":
            inputElement = (
              <textarea
                key={inputLabel}
                {...props}
                className={`border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                  error
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-300"
                }`}
              />
            );
            break;

          default:
            inputElement = null;
        }

        return inputElement;
      })()}

      {/* Error */}
      {error && (
        <span className="text-red-500 text-sm mt-1">{error.message}</span>
      )}
    </div>
  );
}
