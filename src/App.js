import { Routes, Route } from "react-router-dom";
import MainFrame from "./components/MainFrame";
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { Manteinance } from "./pages/Manteinance";
import { InsideEa } from "./pages/InsideEa";
import { EaSports } from "./pages/EaSports";
import './style/pages/games/EA-SPORTS.scss'
import './style/_layouts.scss'

export function App() {
  return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<MainFrame/>}>
//           <Route index element={<Home/>} />
//           <Route path="/informazioni/notizie" element={<News/>} />
//           <Route path="/informazioni/inside-ea" element={<InsideEa/>} />
//           {/* <Route path="path" element={element} /> */}
//         </Route>
//         {/* <Route path='/shop' element={<Shop/>}/> */}
//         <Route path="*" element={<Manteinance/>} />
//       </Routes>
// </div>

<div>
  <EaSports />
</div>



      
    
  );
}