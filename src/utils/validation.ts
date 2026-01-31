export const validateMobileNumber = (mobile: string): string | null => {
  if (!mobile) return "Mobile number is required";
  if (!/^\d{10}$/.test(mobile))
    return "Mobile number must be exactly 10 digits";
  return null;
};

export const validateEmail = (email: string): string | null => {
  if (!email) return null; // Email is optional
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Invalid email format";
  return null;
};

export const validateRequired = (
  value: string,
  fieldName: string,
): string | null => {
  if (!value || value.trim() === "") return `${fieldName} is required`;
  return null;
};

export const validateWeight = (weight: number | ""): string | null => {
  if (weight === "" || weight === 0) return "Weight is required";
  if (weight <= 0) return "Weight must be greater than 0";
  return null;
};

export const validateRate = (rate: number | ""): string | null => {
  if (rate === "" || rate === 0) return "Rate per kg is required";
  if (rate <= 0) return "Rate must be greater than 0";
  return null;
};
