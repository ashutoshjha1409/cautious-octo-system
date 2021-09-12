import "./App.css";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Forms from "./components/Forms";
// import Clock from "./components/Clock";
// import FetchData from "./components/FetchData";
// import ListRendering from "./components/ListRendering";
// import ParentComp from "./components/ParentComp";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundry";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
