import React, { useState } from "react";
import { Search, CircleUser, Mail, HandPlatter } from "lucide-react";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex-1 ml-64 p-6 pt-8">
      <div className="w-full flex justify-start pl-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="pl-4 pr-4 py-2 w-full md:w-96 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <Search
            className="absolute right-4 top-2.5 text-gray-500"
            size={20}
          />
        </div>
        <CircleUser
          className="absolute right-8 mt-[2px] hover:text-white cursor-pointer"
          size={40}
        />
        <Mail
          className="absolute right-28 mt-[2px] hover:text-white cursor-pointer"
          size={40}
        />
        <HandPlatter
          className="absolute right-48 mt-[2px] hover:text-white cursor-pointer"
          size={40}
        />
      </div>
    </div>
  );
};

export default Header;