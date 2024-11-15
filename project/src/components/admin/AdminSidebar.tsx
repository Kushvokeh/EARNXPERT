import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  PlaySquare, 
  BrainCircuit,
  Gift,
  TrendingUp,
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Users', icon: Users },
  { name: 'Videos', icon: PlaySquare },
  { name: 'Trivia', icon: BrainCircuit },
  { name: 'Rewards', icon: Gift },
  { name: 'Analytics', icon: TrendingUp },
  { name: 'Settings', icon: Settings },
];

export default function AdminSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200">
      <div className="flex items-center h-16 px-6 border-b border-gray-200">
        <span className="text-xl font-bold text-emerald-600">EARNXPERT</span>
        <span className="ml-2 text-xs font-semibold text-gray-500">ADMIN</span>
      </div>
      
      <nav className="p-4">
        <div className="space-y-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900"
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </button>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900">
            <HelpCircle className="h-5 w-5 mr-3" />
            Help & Support
          </button>
          <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50">
            <LogOut className="h-5 w-5 mr-3" />
            Sign Out
          </button>
        </div>
      </nav>
    </aside>
  );
}