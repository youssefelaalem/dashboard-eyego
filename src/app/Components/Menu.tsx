"use client";
import Link from "next/link";
import {
  GroupsOutlined,
  CheckCircleOutline,
  EventAvailableOutlined,
  CalendarMonthOutlined,
  MessageOutlined,
  CampaignOutlined,
  AccountCircleOutlined,
  SettingsOutlined,
  Logout,
} from "@mui/icons-material";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: GroupsOutlined,
        label: "Employees",
        href: "/usersList",
      },
      {
        icon: GroupsOutlined,
        label: "Admins",
        href: "#",
      },
      {
        icon: CheckCircleOutline,
        label: "Results",
        href: "#",
      },
      {
        icon: EventAvailableOutlined,
        label: "Attendance",
        href: "#",
      },
      {
        icon: CalendarMonthOutlined,
        label: "Events",
        href: "#",
      },
      {
        icon: MessageOutlined,
        label: "Messages",
        href: "#",
      },
      {
        icon: CampaignOutlined,
        label: "Announcements",
        href: "#",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: AccountCircleOutlined,
        label: "Profile",
        href: "#",
      },
      {
        icon: SettingsOutlined,
        label: "Settings",
        href: "#",
      },
      {
        icon: Logout,
        label: "Logout",
        href: "/login",
      },
    ],
  },
];
const LogOut = () => {
  localStorage.setItem("token", "");
};
const Menu = () => {
  const pathname = usePathname();
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <div key={item.label}>
                {item.label === "Logout" ? (
                  <Link
                    href={item.href}
                    onClick={LogOut}
                    className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                  >
                    <div
                      className={`flex items-center gap-3 p-2 rounded-md transition duration-200 ${
                        isActive
                          ? "bg-cyan-100 text-cyan-700 font-semibold"
                          : "text-gray-600 hover:text-cyan-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="text-[20px]" />
                      <span className="text-sm hidden lg:block">
                        {item.label}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                  >
                    <div
                      className={`flex items-center gap-3 p-2 rounded-md transition duration-200 ${
                        isActive
                          ? "bg-cyan-100 text-cyan-700 font-semibold"
                          : "text-gray-600 hover:text-cyan-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="text-[20px]" />
                      <span className="text-sm hidden lg:block">
                        {item.label}
                      </span>
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
