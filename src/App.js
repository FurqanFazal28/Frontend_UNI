import "./App.css";
import Stepper from "./Components/Stepper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question from "./Components/Question";
import Result from "./Components/Result";
import UniversityFilter from "./Components/UniversityFilter";
import { ContextProvider } from "./Hooks/UseStateContext";
import LandingPage from "./Components/Landing Page/Landing-Page";
import List from "./Components/Uni Lists/list";
import Details from "./Components/Uni Lists/Details";
import Continue from "./Components/ContinueAssesment";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          {" "}
          {/* Wrap all routes with ContextProvider */}
          <Routes>
            <Route path="" element={<LandingPage />} />
            <Route path="/consultant" element={<Stepper />} />
            <Route path="/question" element={<Question />} />
            <Route path="/result" element={<Result />} />
            {/* <Route path="/unifilter" element={<UniversityFilter />} /> */}
            <Route path="/unifilter" element={<List />} />
            <Route path="/uniDetails" element={<Details />} />
            <Route path="/continue" element={<Continue />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
