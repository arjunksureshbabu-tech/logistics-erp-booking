export interface BookingFormData {
  // Sender Details
  senderName: string;
  senderMobile: string;
  senderEmail: string;

  // Receiver Details
  receiverName: string;
  receiverAddress: string;

  // Package Details
  weight: number | "";
  ratePerKg: number | "";
  totalCost: number;
}

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  // type?: "text" | "email" | "number" | "tel";
  // placeholder?: string;
  // required?: boolean;
  error?: string;
  // value?: string | number;
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // disabled?: boolean;
}

export interface FormTextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  disabled?: false;
}

export interface SectionWrapperProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}
