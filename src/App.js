import { GameGrid } from "./components/GamesGrid";
import { Header } from "./components/Header";
import { NavTab } from "./components/NavTab";

export function App() {
  return (
    <div className="App">
        <Header />
        <GameGrid />
        <NavTab gestion='home'/>
    </div>
  );
}