import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Outlet } from "react-router";
function Layout() {
  return (
    <div>
      <h1>Dashboard ASDASDASDASD</h1>
      <Navbar />
      <Sidebar/>
      <Outlet />
    </div>
  );
}

export default Layout;
