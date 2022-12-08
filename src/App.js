import { Routes, Route } from "react-router-dom";
import MainFrame from "./components/MainFrame";
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { Manteinance } from "./pages/Manteinance";
import { InsideEa } from "./pages/InsideEa";
import "./style/_layouts.scss";
import { EaSports } from "./pages/EaSports";
import { Login } from "./pages/Login";
import { Create } from "./pages/Create";
import { AuthProvider } from "./contexts/AuthContext";
import { Profile } from "./pages/Profile";

export function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainFrame />}>
            <Route index element={<Home />} />
            <Route path="/informazioni/notizie" element={<News />} />
            <Route path="/informazioni/inside-ea" element={<InsideEa />} />
            <Route path="/EaSports" element={<EaSports />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          {/* <Route path='/shop' element={<Shop/>}/> */}
          <Route path="*" element={<Manteinance />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
