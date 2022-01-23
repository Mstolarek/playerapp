import { Routes, Route } from "react-router-dom";
import { routeNames } from "./Constants/routes";
import SplashScene from "./Scenes/splashScene";
import HomeScene from "./Scenes/homeScene";
import PlayerScene from "./Scenes/playerScene";

import "./App.css";
import { AuthContextProvider } from "./Contexts/AuthContext";

import Message404 from "./Components/Message404";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path={routeNames.splash} element={<SplashScene />} />
          <Route path={routeNames.home} element={<HomeScene />} />
          <Route path={routeNames.player} element={<PlayerScene />} />
          <Route path={"*"} element={<Message404 />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
