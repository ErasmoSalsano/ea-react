import { Routes, Route } from "react-router-dom";
import MainFrame from "./components/MainFrame";
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { Manteinance } from "./pages/Manteinance";

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainFrame/>}>
          <Route index element={<Home/>} />
          <Route path="/informazioni/notizie" element={<News/>} />
          {/* <Route path="path" element={element} /> */}
        </Route>
        {/* <Route path='/shop' element={<Shop/>}/> */}
        <Route path="*" element={<Manteinance/>} />
      </Routes>
    </div>
  );
}