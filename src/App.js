import { Routes, Route } from "react-router-dom";
import MainFrame from "./components/MainFrame";
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { Manteinance } from "./pages/Manteinance";
import { InsideEa } from "./pages/InsideEa";

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainFrame/>}>
          <Route index element={<Home/>} />
          <Route exact path="/informazioni/notizie" element={<News/>} />
          <Route exact path="/informazioni/inside-ea" element={<InsideEa/>} />
          {/* <Route path="path" element={element} /> */}
        </Route>
        {/* <Route path='/shop' element={<Shop/>}/> */}
        <Route path="*" element={<Manteinance/>} />
      </Routes>
    </div>
  );
}