import "./App.css";
import Feed from "./Feed/Feed";
import Sidebar from "./Navigation/Sidebar/Sidebar";
import Widgets from "./Widgets/Widgets";

function App() {
  return (
    // BEM
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
