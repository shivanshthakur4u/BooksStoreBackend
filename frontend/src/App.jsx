import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CoursePage from "./Pages/Course";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/auth=login" element={<Login isLogin={true} />} />
          <Route path="/auth=signup" element={<Login isLogin={false}/>} />
        </Routes>
      </div>
    </>
  );
}
