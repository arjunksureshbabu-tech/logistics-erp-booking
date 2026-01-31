type Varient = "default" | "outline" | "primary";

type Props = {
  varient?: Varient;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(variant: Varient) {
  switch (variant) {
    case "primary":
      return "bg-blue-600 text-white hover:bg-blue-700";
    case "outline":
      return "border border-gray-500 text-gray-700 hover:bg-gray-100";
    case "default":
    default:
      return "bg-gray-200 text-black hover:bg-gray-300";
  }
}

export default function Button({
  children,
  className,
  varient = "default",
  ...props
}: Props) {
  return (
    <button
      className={`${className} ${getVariant(
        varient,
      )} px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-2 
  text-sm sm:text-base md:text-lg 
  rounded-lg cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
}
