import { NavLink } from "react-router-dom";

const navItemClasses = ({ isActive }) =>
  `block px-3 py-2 rounded transition-colors ${
    isActive ? "bg-[#1E3A8A]" : "hover:bg-[#1E3A8A]"
  }`;

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#012169] text-white h-screen sticky top-0">
      <div className="text-xl font-bold p-6 border-b border-[#1E3A8A]">
        Academic Routes
      </div>
      <nav className="p-4 space-y-3 text-sm">
        <NavLink to="/admin" end className={navItemClasses}>Dashboard</NavLink>
        <NavLink to="/admin/feedback" className={navItemClasses}>Feedback</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
