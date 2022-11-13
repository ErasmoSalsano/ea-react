import { Routes, Route } from "react-router-dom";
import MainFrame from "./components/MainFrame";
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { Manteinance } from "./pages/Manteinance";
import { InsideEa } from "./pages/InsideEa";
import { Login } from "./pages/Login";

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainFrame/>}>
          <Route index element={<Home/>} />
          <Route path="/informazioni/notizie" element={<News/>} />
          <Route path="/informazioni/inside-ea" element={<InsideEa/>} />
          {/* <Route path="path" element={element} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
        {/* <Route path='/shop' element={<Shop/>}/> */}
        <Route path="*" element={<Manteinance/>} />
      </Routes>
    </div>
  );
}