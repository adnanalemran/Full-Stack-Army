// App.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext'; // Named import
// other imports...

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen ${theme.layout === 'horizontal' ? 'flex-row' : 'flex-col'
        } bg-${theme.color}-100`}
      style={{
        borderRadius: `${theme.borderRadius}px`,
      }}
    >
      {/* Sidebar */}
      <div
        className={`${theme.sidebar === 'mini' ? 'w-16' : 'w-64'
          } bg-gray-200 p-4`}
      >
        Sidebar Content
      </div>

      {/* Main Content */}
      <div className={`flex-1 p-8`}>
        <h1 className="text-3xl font-bold text-${theme.color}-500">Dashboard</h1>
        <p className="mt-4">This is the main content area.</p>
      </div>

      {/* Theme Panel */}
      <div className="fixed bottom-4 right-4">
        <ThemePanel />
      </div>
    </div>
  );
}

export default App; // Default export
