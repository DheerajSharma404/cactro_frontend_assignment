import { TEAM_MEMBERS } from "../constants/team.ts";
import UserMoodSlider from "./UserMoodSlider.tsx";

const TeamMood = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Team mood</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {TEAM_MEMBERS.map((member) => (
          <UserMoodSlider
            key={member.id}
            name={member.name}
            role={member.role}
            avatar={member.avatar}
            initialMoodValue={member.moodValue}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamMood;
