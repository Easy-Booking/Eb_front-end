import React, { useState } from "react";
import { Search, CircleUser, Mail, HandPlatter } from "lucide-react";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="ml-64 p-6 pt-8 bg-gray-900 text-white">
      <div className="w-full flex justify-between items-center px-4 flex-wrap gap-y-4">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search here..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full pl-12 pr-4 py-2 rounded-full bg-white text-gray-800 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <Search
            className="absolute left-4 top-2.5 text-gray-400 hover:text-blue-600 cursor-pointer"
            size={20}
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-gray-300">
          <HandPlatter
            className="hover:text-green-400 cursor-pointer transition-transform duration-200 hover:scale-110"
            size={32}
          />
          <Mail
            className="hover:text-yellow-400 cursor-pointer transition-transform duration-200 hover:scale-110"
            size={32}
          />
          <CircleUser
            className="hover:text-blue-400 cursor-pointer transition-transform duration-200 hover:scale-110"
            size={36}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
