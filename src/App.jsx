import  { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import GridView from "./components/GridView";
import TileView from "./components/TileView";
import DetailView from "./components/DetailView";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("dataApp", data);
        setStudents(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
        setError("Failed to fetch students. Please try again later.");
      }
    };
    fetchStudents();
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Menu />
        {error && <p className="error-message">{error}</p>}
        <Routes>
          <Route
            path="/"
            element={
              <DetailView
                student={selectedStudent}
                onBack={() => setSelectedStudent(null)}
              />
            }
          />
          <Route path="/grid-view" element={<GridView data={students} />} />
          <Route
            path="/tiles-view"
            element={<TileView data={students} onSelect={setSelectedStudent} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
