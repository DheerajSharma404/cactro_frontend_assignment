import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: number;
  icon: LucideIcon;
  variant?: "default" | "danger";
}

const StatCard = ({
  label,
  value,
  icon: Icon,
  variant = "default",
}: StatCardProps) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-sm ${
        variant === "danger" ? "bg-red-100" : "bg-white"
      }`}
    >
      <Icon
        className={`w-8 h-8 ${
          variant === "danger" ? "text-red-500" : "text-teal-500"
        }`}
      />
      <div className="flex items-center justify-center ">
        <div>
          <h3
            className={`text-3xl font-bold text-center ${
              variant === "danger" ? "text-red-500" : "text-gray-900"
            }`}
          >
            {value}
          </h3>
          <p className="mt-1 text-sm text-gray-600">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
