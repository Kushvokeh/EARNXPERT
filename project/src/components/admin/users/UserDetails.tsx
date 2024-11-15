import React from 'react';
import { X, Play, Brain, Users, Award } from 'lucide-react';
import type { User } from '../../../types';

interface UserDetailsProps {
  user: User;
  onClose: () => void;
}

export default function UserDetails({ user, onClose }: UserDetailsProps) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">User Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
              <span className="text-xl font-medium text-emerald-600">
                {user.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-sm text-gray-500">Member since {user.createdAt.toLocaleDateString()}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-emerald-500" />
                <span className="ml-2 text-sm font-medium text-gray-500">Total Points</span>
              </div>
              <p className="mt-1 text-2xl font-semibold text-gray-900">{user.points.toLocaleString()}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-500" />
                <span className="ml-2 text-sm font-medium text-gray-500">Referrals</span>
              </div>
              <p className="mt-1 text-2xl font-semibold text-gray-900">{user.referralCount}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center">
                <Brain className="h-5 w-5 text-purple-500" />
                <span className="ml-2 text-sm font-medium text-gray-500">Trivia Completed</span>
              </div>
              <p className="mt-1 text-2xl font-semibold text-gray-900">{user.completedTrivia.length}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Recent Activity</h4>
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Play className="h-4 w-4 text-emerald-500" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Watched "How to Maximize Earnings"</p>
                      <p className="text-xs text-gray-500">2 hours ago • +50 XP</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Referral Details</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-900">Referral Code</p>
                <p className="text-2xl font-mono text-emerald-600 mt-1">{user.referralCode}</p>
                {user.referredBy && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-500">Referred by: {user.referredBy}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Close
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700">
            Edit User
          </button>
        </div>
      </div>
    </div>
  );
}