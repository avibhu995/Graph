import React from 'react';
import Sidebar from './assets/Sidebar';

function App() {
  return (
    <div>
      <Sidebar openSidebarToggle={true} OpenSidebar={() => console.log('Toggle')} />
      { }
    </div>
  );
}

export default App;
