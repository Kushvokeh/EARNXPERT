import React from 'react';
import AdminLayout from './components/admin/AdminLayout';
import VideoManagement from './components/admin/videos/VideoManagement';

function App() {
  return (
    <AdminLayout>
      <VideoManagement />
    </AdminLayout>
  );
}

export default App;