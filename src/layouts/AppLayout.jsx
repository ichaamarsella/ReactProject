import { Outlet } from "react-router-dom";
import Nav from "./Navbar";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div>
      <Nav />
      <main className="px-4">
        <Outlet />
      </main>
    </div>
  );
}
export default AppLayout;
