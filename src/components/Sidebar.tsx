import React from "react";
import FileExplorer from "./FileExplorer";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col w-16 sm:w-60 bg-vscode-sidebar h-full text-white border-r border-gray-700">
      {/* You can add optional top icons here (e.g., Explorer, Search, Source Control icons) */}
      {/* For simplicity, we go directly to the file explorer */}
      <div className="flex-grow overflow-y-auto">
        <FileExplorer />
      </div>
    </div>
  );
};

export default Sidebar;