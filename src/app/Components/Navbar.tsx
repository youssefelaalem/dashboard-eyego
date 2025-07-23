"use client";
import SearchIcon from "@mui/icons-material/Search";
import CampaignIcon from "@mui/icons-material/Campaign";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isUserList = pathname.includes("usersList");
 
  return (
    <div className="flex items-center justify-between p-4">
      {!isUserList && (
        <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
          <SearchIcon className="text-gray-400 hover:text-cyan-400  cursor-pointer" />
          <input
            type="text"
            placeholder="Search..."
            className="w-[200px] p-2 bg-transparent outline-none"
          />
        </div>
      )}

      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <CampaignIcon
            className="text-gray-400 hover:text-cyan-400  cursor-pointer"
            width={20}
            height={20}
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-cyan-600  text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <AccountCircleIcon
          width={36}
          height={36}
          className="text-gray-400 hover:text-cyan-400  cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
