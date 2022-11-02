import { Routes, Route } from "react-router-dom";
import MainFrame from "./components/MainFrame";



export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainFrame/>}/>
        {/* <Route path='/shop' element={<Shop/>}/> */}
      </Routes>
       
    </div>
  );
}