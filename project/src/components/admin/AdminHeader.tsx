import React from 'react';
import { Bell, Settings } from 'lucide-react';

export default function AdminHeader() {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white border-b border-gray-200 z-40">
      <div className="px-8 h-full flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Settings className="h-5 w-5 text-gray-500" />
          </button>
          <div className="flex items-center space-x-3 ml-4">
            <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center">
              <span className="text-sm font-medium text-white">AK</span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-700">Admin User</p>
              <p className="text-xs text-gray-500">admin@earnxpert.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}