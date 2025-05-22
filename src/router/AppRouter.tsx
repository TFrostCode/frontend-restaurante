import { Routes, Route, Navigate } from "react-router-dom";

// import Navbar from "../ui/components/Navbar";
import Login from "../auth/pages/Login";
import Layout from "@/dashboard/Layout";
import Usuarios from "@/dashboard/pages/users/Users";
import AuthLayout from "@/auth/AuthLayout";
import Register from "@/auth/pages/Register";

const AppRouter = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route element={<AuthLayout />} >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="dashboard" element={<Layout />}>
          <Route path="users" element={<Usuarios />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
