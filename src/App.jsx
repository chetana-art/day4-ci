import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>DevOps CI Demo - cicd</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#pipeline">Pipeline</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tag">CI/CD PROJECT</p>

          <h1>
            Continuous Integration
            <br />
            with React
          </h1>

          <p>
            A simple React frontend created to demonstrate
            Continuous Integration and automated deployment.
          </p>

          <button>View Pipeline</button>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About This Project</h2>

        <p>
          This project demonstrates how a React application can be
          integrated with a CI pipeline. Whenever new code is pushed
          to GitHub, the application can be automatically tested,
          built and prepared for deployment.
        </p>

        <div className="cards">
          <div className="card">
            <h3>💻 React devopsS - cicd</h3>
            <p>Frontend application developed using React.js.</p>
          </div>

          <div className="card">
            <h3>🔧 GitHub</h3>
            <p>Source code is maintained and version controlled using GitHub.</p>
          </div>

          <div className="card">
            <h3>⚙️ CI Pipeline</h3>
            <p>Code can be automatically tested and built after every push.</p>
          </div>
        </div>
      </section>

      <section className="pipeline" id="pipeline">
        <h2>CI Pipeline</h2>

        <div className="steps">
          <div className="step">
            <span>1</span>
            <h3>Code</h3>
            <p>Developer writes React code.</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <span>2</span>
            <h3>Push</h3>
            <p>Code is pushed to GitHub.</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <span>3</span>
            <h3>Build</h3>
            <p>CI server builds the React project.</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <span>4</span>
            <h3>Deploy</h3>
            <p>Application is ready for deployment.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 DevOps CI Demo | React Project</p>
      </footer>
    </div>
  );
}

export default App;