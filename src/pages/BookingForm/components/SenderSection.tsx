import FormField from "../../../core/components/FormField";
import {
  Controller,
  type Control,
  type FieldErrors,
} from "react-hook-form";
import type { FormData } from "../BookingForm";

type Props = {
  errors: FieldErrors<FormData>;
  control: Control<FormData>;
};

export default function SenderSection({ errors, control }: Props) {
  return (
    <div>
      <Controller
        name="senderName"
        control={control}
        render={({ field }) => (
          <FormField
            inputType="input"
            inputLabel="First Name"
            required={true}
            placeholder="Enter Full Name"
            error={errors.senderName}
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />

      <Controller
        name="senderMobile"
        control={control}
        render={({ field }) => (
          <FormField
            inputType="input"
            inputLabel="Mobile Number"
            required={true}
            placeholder="Enter Mobile Number"
            error={errors.senderMobile}
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />

      {/* Email */}
      <Controller
        name="senderEmail"
        control={control}
        render={({ field }) => (
          <FormField
            inputType="input"
            inputLabel="Email"
            required={true}
            placeholder="Enter Email"
            error={errors.senderEmail}
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />
    </div>
  );
}
