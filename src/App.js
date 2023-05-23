import Seasons from "./components/Seasons";
import { getSeasons } from "./redux/seasons/seasonSlice";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navbar";
import Information from "./components/Info"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSeasons())
}, [dispatch])

  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Seasons/>}/>
        <Route path="information" element={<Information/>}/>
      </Routes>
    </div>
  );
}

export default App;
