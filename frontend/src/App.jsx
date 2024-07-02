import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CoursePage from "./Pages/Course";
import Login from "./components/Login";
import { useAuth } from "./Context/AuthContext";

export default function App() {
  const { user } = useAuth();
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={user ? <CoursePage /> : <Navigate to="/auth=login" />}
          />
          <Route path="/auth=login" element={<Login isLogin={true} />} />
          <Route path="/auth=signup" element={<Login isLogin={false} />} />
        </Routes>
      </div>
    </>
  );
}
