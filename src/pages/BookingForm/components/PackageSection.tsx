import { Controller, type Control, type FieldErrors } from "react-hook-form";
import FormField from "../../../core/components/FormField";
import type { FormData } from "../BookingForm";

type Props = {
  errors: FieldErrors<FormData>;
  control: Control<FormData>;
};

export default function PackageSection({ errors, control }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {/* Weight */}
      <Controller
        name="weight"
        control={control}
        render={({ field }) => (
          <FormField
            inputLabel="Weight (kg)"
            inputType="input"
            required={true}
            value={field.value}
            onChange={field.onChange}
            error={errors.weight}
          />
        )}
      />

      {/* Rate per kg */}
      <Controller
        name="ratePerKg"
        control={control}
        render={({ field }) => (
          <FormField
            inputLabel="Rate per kg (INR)"
            inputType="input"
            required={true}
            value={field.value}
            onChange={field.onChange}
            error={errors.ratePerKg}
          />
        )}
      />

      {/* Total Cost (disabled) */}
      <Controller
        name="totalCost"
        control={control}
        render={({ field }) => (
          <FormField
            inputLabel="Total Shipping Cost"
            inputType="input"
            required={true}
            disabled={true}
            value={field.value}
            onChange={field.onChange}
            error={errors.totalCost}
          />
        )}
      />
    </div>
  );
}
