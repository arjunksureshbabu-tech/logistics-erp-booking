import {
  Controller,
  type Control,
  type FieldErrors,
} from "react-hook-form";
import FormField from "../../../core/components/FormField";
import type { FormData } from "../BookingForm";

type Props = {
  errors: FieldErrors<FormData>;
  control: Control<FormData>;
};

export default function ReceiverSection({ errors, control }: Props) {
  return (
    <div>
      {/* Full Name */}
      <Controller
        name="receiverName"
        control={control}
        render={({ field }) => (
          <FormField
            inputLabel="Full Name"
            inputType="input"
            required={true}
            value={field.value}
            onChange={field.onChange}
            error={errors.receiverName}
          />
        )}
      />
      {/* Full Address */}
      <Controller
        name="receiverAddress"
        control={control}
        render={({ field }) => (
          <FormField
            inputLabel="Full Address"
            inputType="textarea"
            required={true}
            rows={5}
            value={field.value}
            onChange={field.onChange}
            error={errors.receiverAddress}
          />
        )}
      />
    </div>
  );
}
