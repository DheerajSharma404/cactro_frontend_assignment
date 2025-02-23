import { AlertTriangle, CheckCircle } from "lucide-react";

interface ProjectCardProps {
  name: string;
  company: string;
  totalBudget: number;
  profitability: number;
  actualHours: number;
  soldHours: number;
  status: "over_budget" | "on_track" | "under_budget" | "completed";
  avatar: string;
}

const ProjectCard = ({
  name,
  company,
  totalBudget,
  profitability,
  actualHours,
  soldHours,
  status,
  avatar,
}: ProjectCardProps) => {
  const getStatusStyles = () => {
    switch (status) {
      case "over_budget":
        return {
          containerClass: "bg-red-50",
          progressClass: "bg-red-500",
          textClass: "text-red-500",
          icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
        };
      case "on_track":
        return {
          containerClass: "bg-amber-50",
          progressClass: "bg-amber-500",
          textClass: "text-amber-500",
          icon: null,
        };
      case "under_budget":
        return {
          containerClass: "bg-teal-50",
          progressClass: "bg-teal-500",
          textClass: "text-teal-500",
          icon: null,
        };
      case "completed":
        return {
          containerClass: "bg-teal-50",
          progressClass: "bg-teal-500",
          textClass: "text-teal-500",
          icon: <CheckCircle className="w-5 h-5 text-teal-500" />,
        };
    }
  };

  const styles = getStatusStyles();
  const progressWidth = `${(actualHours / soldHours) * 100}%`;

  return (
    <div className={`rounded-lg p-4 ${styles.containerClass}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
        <img src={avatar} alt={company} className="w-10 h-10 rounded-full" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Total Budget</span>
          <span className="font-medium">{totalBudget.toLocaleString()}€</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Profitability (100%)</span>
          <span
            className={`font-medium ${
              profitability < 0 ? "text-red-500" : "text-teal-500"
            }`}
          >
            {profitability.toLocaleString()}€
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${styles.progressClass}`}
            style={{ width: progressWidth }}
          />
        </div>
        <div className="flex justify-between items-center mt-2 text-sm">
          <span className="text-gray-500">
            Actual hours: {actualHours.toLocaleString()}
          </span>
          <div className="flex items-center gap-2">
            <span className={styles.textClass}>
              {status === "over_budget"
                ? `${Math.abs(actualHours - soldHours)} hours over Budget!`
                : `${soldHours.toLocaleString()} sold hours`}
            </span>
            {styles.icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
