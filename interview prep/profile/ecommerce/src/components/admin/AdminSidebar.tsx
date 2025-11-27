"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChartBarIcon,
  ShoppingBagIcon,
  UsersIcon,
  ClipboardIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: HomeIcon,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: ShoppingBagIcon,
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: ClipboardIcon,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: UsersIcon,
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: ChartBarIcon,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <div className="px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
      </div>
      <nav className="space-y-1 px-3">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <item.icon
                className={`mr-3 h-5 w-5 ${
                  isActive ? "text-blue-600" : "text-gray-400"
                }`}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
