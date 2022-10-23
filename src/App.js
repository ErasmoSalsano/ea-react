import { GameGrid } from "./components/GamesGrid";
import { NavTab } from "./components/NavTab";

export function App() {
  return (
    <div className="App">
        <GameGrid />
        <NavTab gestion='home'/>
    </div>
  );
}