import React from 'react';
import { Trophy, Users, Play, Brain, TrendingUp, Target, Gift } from 'lucide-react';

const stats = [
  { name: 'Total XP', value: '2,450', icon: Trophy, color: 'text-emerald-500' },
  { name: 'Active Referrals', value: '23', icon: Users, color: 'text-blue-500' },
  { name: 'Videos Completed', value: '147', icon: Play, color: 'text-purple-500' },
  { name: 'Trivia Score', value: '89%', icon: Brain, color: 'text-orange-500' },
];

const achievements = [
  { name: 'Daily Streak', value: '7 days', icon: TrendingUp },
  { name: 'Next Milestone', value: '5,000 XP', icon: Target },
  { name: 'Rewards Available', value: '3', icon: Gift },
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-200"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      {stat.value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {achievements.map((item) => (
            <div key={item.name} className="flex items-center p-4 bg-gray-50 rounded-lg">
              <item.icon className="h-5 w-5 text-emerald-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{item.name}</p>
                <p className="text-base font-semibold text-gray-900">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}