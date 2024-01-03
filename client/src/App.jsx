import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";
import { UserDataContext } from "./context/userDataContext.jsx";

function App() {
  const userData = {
    username: "John",
    avatar:
      "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg?fit=100,100",
    level: "platinum",
  };

  return (
    <>
      <UserDataContext.Provider value={{ userDataState: userData }}>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/view/:id" element={<ViewProductPage />} />
            </Routes>
          </Router>
        </div>
      </UserDataContext.Provider>
    </>
  );
}

export default App;
