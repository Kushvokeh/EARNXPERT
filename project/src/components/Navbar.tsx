import React from 'react';
import { Menu, Bell, User, Award } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Award className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">EARNXPERT</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center h-8 px-3 rounded-full bg-emerald-100">
              <span className="text-sm font-medium text-emerald-600">1,234 XP</span>
            </div>
            
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell className="h-6 w-6 text-gray-500" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-emerald-500"></span>
            </button>
            
            <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100">
              <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}