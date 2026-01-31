type Props = {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export default function Card({ children, title, icon }: Props) {
  return (
    <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2 ">
        <i className={`bi ${icon}`}></i>

        {title}
      </h3>
      {children}
    </div>
  );
}
