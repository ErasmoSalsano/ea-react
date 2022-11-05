import {GamesGrid} from './components/GamesGrid'
import { HomePageUpperHero } from "./components/HomePageUpperHero";
import { HomePageLowerHero } from "./components/HomePageLowerHero";
import { Routes, Route } from "react-router-dom";
import MainFrame from "./components/MainFrame";
import { Home } from "./pages/Home";
import { Manteinance } from "./pages/Manteinance";

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainFrame/>}>
          <Route index element={<Home/>} />
          {/* <Route path="path" element={element} /> */}
        </Route>
        {/* <Route path='/shop' element={<Shop/>}/> */}
        <Route path="*" element={<Manteinance/>} />
      </Routes>
    </div>
  );
}
