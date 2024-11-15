import React from 'react';
import { Users, DollarSign, PlaySquare, BrainCircuit, ArrowUp, ArrowDown } from 'lucide-react';

const stats = [
  {
    name: 'Total Users',
    value: '24,589',
    change: '+12.3%',
    trend: 'up',
    icon: Users,
  },
  {
    name: 'Revenue',
    value: '$45,233',
    change: '+8.2%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    name: 'Videos Watched',
    value: '156,789',
    change: '+23.1%',
    trend: 'up',
    icon: PlaySquare,
  },
  {
    name: 'Trivia Completed',
    value: '89,123',
    change: '-2.5%',
    trend: 'down',
    icon: BrainCircuit,
  },
];

const recentUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', points: 1234, date: '2024-03-10' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', points: 2345, date: '2024-03-09' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', points: 3456, date: '2024-03-09' },
  { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', points: 4567, date: '2024-03-08' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <span className={`ml-2 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUp className="inline h-4 w-4" />
                    ) : (
                      <ArrowDown className="inline h-4 w-4" />
                    )}
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Users</h2>
          <div className="mt-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Points
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Join Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.points.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}