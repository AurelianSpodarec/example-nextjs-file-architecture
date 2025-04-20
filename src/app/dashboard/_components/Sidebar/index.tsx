import Link from "next/link";

function DashboardSidebar() {
  return (
    <aside>
      <span>DashboardSidebar</span>
      <div className="flex flex-col">
        <Link href="/" className="underline text-blue-700">Go to Website</Link>
        <Link href="/dashboard" className="underline text-blue-700">Dashboard Page: Home</Link>
        <Link href="/dashboard/users" className="underline text-blue-700">Dashboard Page: Users</Link>
        <Link href="/dashboard/settings" className="underline text-blue-700">Dashboard Page: Settings</Link>
      </div>
    </aside>
  );
}

export default DashboardSidebar
