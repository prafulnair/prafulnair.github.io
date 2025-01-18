import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const FileExplorer: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="text-sm">
      {/* Explorer Header */}
      <div
        className="flex justify-between items-center px-2 py-2 bg-vscode-selected cursor-pointer hover:bg-vscode-hover"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-bold">EXPLORER</span>
        <span className="text-gray-400">{isExpanded ? "▼" : "▶"}</span>
      </div>
      {/* Explorer Content */}
      {isExpanded && (
        <div className="px-2 py-2">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-2 py-1 rounded hover:bg-vscode-hover ${
                isActive ? "bg-vscode-selected" : ""
              }`
            }
          >
            About.js
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `block px-2 py-1 rounded hover:bg-vscode-hover ${
                isActive ? "bg-vscode-selected" : ""
              }`
            }
          >
            Projects.js
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block px-2 py-1 rounded hover:bg-vscode-hover ${
                isActive ? "bg-vscode-selected" : ""
              }`
            }
          >
            Contact.js
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default FileExplorer;