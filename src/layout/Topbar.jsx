import React from "react";

const Topbar = () => {
  return (
    <header className="bg-white shadow px-4 py-4 flex justify-between items-center">
      {/* Left: Logo and title */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-50 h-15"
        />
      </div>

      {/* Right: Admin profile */}
      <div className="flex items-center space-x-4">

        <span className="hidden sm:block font-medium text-gray-700">
          Shahil Dhakal
        </span>
        <img
          src="/admin.png"
          alt="Admin Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Topbar;
