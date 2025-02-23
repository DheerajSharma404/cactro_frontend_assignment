import { Calendar, Download, Filter, Plus } from "lucide-react";
import { PROJECT_BUDGETS } from "../constants/budget.ts";
import ProjectCard from "./ProjectCard.tsx";

const BudgetStatus = () => {
  return (
    <div className="mt-8  ">
      <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-20 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Budget status</h2>
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">
            <Plus className="w-4 h-4" />
            Add New Project
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
            <Download className="w-4 h-4" />
            Download report
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
            <Calendar className="w-4 h-4" />
            dd/mm/yyyy - dd/mm/yyyy
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROJECT_BUDGETS.map((project) => (
          <ProjectCard
            key={project.id}
            {...(project as {
              id: string;
              name: string;
              company: string;
              totalBudget: number;
              profitability: number;
              actualHours: number;
              soldHours: number;
              status: "over_budget" | "on_track" | "under_budget" | "completed";
              avatar: string;
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default BudgetStatus;
