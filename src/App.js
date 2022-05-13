import Header from "./Components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Components/HomePage";
import LatestMealInfo from "./Components/LatestMealInfo";
import MealInfo from "./Components/MealInfo";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className="container">
        </div>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/latestMeal/:id" element={<LatestMealInfo />}/>
          <Route path="/meal/:id" element={<MealInfo />}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
