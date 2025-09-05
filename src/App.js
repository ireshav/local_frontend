import React from "react";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Local Service Provider App 🚀</h1>
        <p>Find and book trusted services near you</p>
      </header>

      <main className="content">
        <div className="card">
          <h2>Available Services</h2>
          <ul>
            <li>🧹 Cleaning</li>
            <li>🔧 Plumbing</li>
            <li>🌿 Landscaping</li>
            <li>💡 Electrical</li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Local Service Provider. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
