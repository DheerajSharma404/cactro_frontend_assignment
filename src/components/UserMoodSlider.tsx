import { useState } from 'react';
import { MOOD_EMOJIS } from '../constants/team.ts';

interface UserMoodSliderProps {
  name: string;
  role: string;
  avatar: string;
  initialMoodValue: number;
}

const UserMoodSlider = ({ name, role, avatar, initialMoodValue }: UserMoodSliderProps) => {
  const [moodValue, setMoodValue] = useState(initialMoodValue);

  const getMoodEmoji = (value: number) => {
    const mood = MOOD_EMOJIS.find(
      mood => value >= mood.range[0] && value <= mood.range[1]
    );
    return mood?.emoji || '😐';
  };

  return (
    <div className="flex items-center space-x-4 p-4 border-b border-gray-100">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
          <span className="text-2xl">{getMoodEmoji(moodValue)}</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={moodValue}
          onChange={(e) => setMoodValue(Number(e.target.value))}
          className="w-full h-2 mt-2 rounded-lg appearance-none cursor-pointer bg-gray-200"
          style={{
            background: `linear-gradient(to right, #00BFA5 ${moodValue}%, #e5e7eb ${moodValue}%)`
          }}
        />
      </div>
    </div>
  );
};

export default UserMoodSlider;