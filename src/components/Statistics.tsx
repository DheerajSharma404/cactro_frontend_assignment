import { GridIcon, CheckCircle, RefreshCw, AlertTriangle, Users } from 'lucide-react';
import { STATS_DATA } from '../constants/stats.ts';
import StatCard from './StatCard.tsx';

const iconMap = {
  GridIcon: GridIcon,
  CheckCircleIcon: CheckCircle,
  RefreshCwIcon: RefreshCw,
  AlertTriangleIcon: AlertTriangle,
  UsersIcon: Users,
};

const Statistics = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {STATS_DATA.map((stat) => (
        <StatCard
          key={stat.id}
          label={stat.label}
          value={stat.value}
          icon={iconMap[stat.icon as keyof typeof iconMap]}
          variant={stat.variant as 'default' | 'danger'}
        />
      ))}
    </div>
  );
};

export default Statistics;