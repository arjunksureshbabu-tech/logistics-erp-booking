import React, { useEffect } from "react";
import Card from "../../core/components/Card";
import SenderSection from "../../pages/BookingForm/components/SenderSection";
import ReceiverSection from "../../pages/BookingForm/components/ReceiverSection";
import PackageSection from "../../pages/BookingForm/components/PackageSection";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import Button from "../../core/components/Button";

export const bookingSchema = z.object({
  // Sender Details
  senderName: z.string().min(3, "Sender name must be at least 3 characters"),

  senderMobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),

  senderEmail: z.string().email("Enter a valid email address").optional(),

  // Receiver Details
  receiverName: z
    .string()
    .min(3, "Receiver name must be at least 3 characters"),

  receiverAddress: z.string().min(10, "Address must be at least 10 characters"),

  // Package Details
  weight: z
    .string()
    .nonempty("Weight is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Weight must be a positive number",
    }),

  ratePerKg: z
    .string()
    .nonempty("Rate per kg is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Rate per kg must be a positive number",
    }),

  totalCost: z
    .string()
    .nonempty("Total cost is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Total cost must be a valid number",
    }),
});

export type FormData = z.infer<typeof bookingSchema>;

export const BookingForm: React.FC = () => {
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    control,

    reset,
  } = useForm<FormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      senderName: "",
      senderEmail: "",
      senderMobile: "",
      receiverAddress: "",
      receiverName: "",
      weight: "",
      ratePerKg: "",
      totalCost: "",
    },
    mode: "all",
  });

  const weight = watch("weight");
  const ratePerKg = watch("ratePerKg");

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data);
      if (data) {
        toast.success("Form submitted successfully!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const handleClearForm = () => reset();

  useEffect(() => {
    if (weight && ratePerKg) {
      const total = Number(weight) * Number(ratePerKg);
      setValue("totalCost", String(total));
    }
  }, [weight, ratePerKg]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-mono font-black flex items-center gap-2">
            <i className="bi bi-box-seam-fill"></i> New Booking Entry
          </h1>

          <Button type="submit" varient="outline" onClick={handleClearForm}>
            Clear Form
          </Button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Sender & Receiver */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sender */}
            <Card
              title={"Sender Details"}
              icon={"bi bi-person"}
              children={<SenderSection errors={errors} control={control} />}
            />

            {/* Receiver */}
            <Card
              title={"Receiver Details"}
              icon={"bi bi-person"}
              children={<ReceiverSection errors={errors} control={control} />}
            />
          </div>
          {/* Package Details */}
          <div className="mt-6">
            <Card
              title={"Package Details"}
              icon={" bi-box-seam-fill"}
              children={<PackageSection control={control} errors={errors} />}
            />
          </div>

          {/* Footer Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
            <Button type="submit" varient="default">
              Cancel
            </Button>

            <Button type="submit" varient="primary">
              Submit Booking
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
