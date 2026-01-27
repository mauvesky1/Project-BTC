
  
  function SidebarItem({ label }: { label: string }) {
    return (
      <div className="rounded px-3 py-2 hover:bg-neutral-100 cursor-pointer">
        {label}
      </div>
    );
  }

  export default function Sidebar() {
    return (
      <aside className="hidden md:block w-56 border-r border-neutral-200 bg-white">
        <nav className="flex flex-col gap-2 p-4 text-sm">
          <SidebarItem label="Home" />
          <SidebarItem label="Subscriptions" />
          <SidebarItem label="Library" />
        </nav>
      </aside>
    );
  }