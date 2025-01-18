import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const linkClass =
    "px-4 py-2 hover:bg-vscode-hover transition-colors duration-200";
  const activeClass =
    "bg-vscode-selected border-b-2 border-vscode-accent";

  return (
    <div className="flex items-center bg-vscode-tab text-white">
      {/* About Tab */}
      <NavLink
        to="/about"
        end
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
      >
        About.js
      </NavLink>

      {/* Projects Tab */}
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
      >
        Projects.js
      </NavLink>

      {/* Contact Tab */}
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
      >
        Contact.js
      </NavLink>
    </div>
  );
};

export default Navbar;