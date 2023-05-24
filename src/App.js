import Currencies from "./components/Currencies";
import { getCurrencies} from "./redux/currency/currencySlice";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navbar";
import Information from "./components/Info"
import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrencies())
}, [dispatch])

  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Currencies/>}/>
        <Route path="information/:name" element={<Information/>}/>
      </Routes>
    </div>
  );
}

export default App;
