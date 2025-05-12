import { Routes, Route } from "react-router-dom";

// import Navbar from "../ui/components/Navbar";
import Login from "../auth/pages/Login";

const AppRouter = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRouter;
