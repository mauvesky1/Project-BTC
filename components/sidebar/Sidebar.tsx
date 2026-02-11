"use client";
  
import { Home, PlaySquare, Library, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

  
function SidebarItem({
  label,
  icon: Icon,
  collapsed,
}: {
  label: string;
  icon: React.ElementType;
  collapsed: boolean;
}) {
  return (
    <div
  className={`
    flex items-center rounded py-2 hover:bg-neutral-100 cursor-pointer
    ${collapsed ? "justify-center px-0" : "gap-3 px-3"}
  `}
>

      <Icon className="h-5 w-5 shrink-0" />
      {!collapsed && <span>{label}</span>}
    </div>
  );
}


  export default function Sidebar() {

    const [collapsed, setCollapsed] = useState(false);

    return (
<aside
  className={`
    hidden md:block border-r border-neutral-200 bg-white
    ${collapsed ? "w-20" : "w-56"}
    transition-all duration-200
  `}
>
          <button
  onClick={() => setCollapsed(!collapsed)}
  className="mb-2 flex items-center gap-2 rounded px-3 py-2 hover:bg-neutral-100"
>

  
  <Menu className="h-5 w-5" />
  {!collapsed && <span className="text-sm">Menu</span>}
</button>

<nav className="flex flex-col gap-2 p-4 text-sm">
  <SidebarItem label="Home" icon={Home} collapsed={collapsed} />
  <SidebarItem label="Subscriptions" icon={PlaySquare} collapsed={collapsed} />
  <SidebarItem label="Library" icon={Library} collapsed={collapsed} />
</nav>

      </aside>
    );
  }