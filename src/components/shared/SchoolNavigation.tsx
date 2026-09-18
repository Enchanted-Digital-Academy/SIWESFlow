import Link from "next/link";

export default function SchoolNavigation() {
  return (
    <nav className="flex flex-wrap gap-4 border-b border-slate-200 bg-white px-6 py-4">
      <Link
        href="/school/dashboard"
        className="text-sm font-medium text-slate-700 hover:text-slate-900"
      >
        Dashboard
      </Link>

      <Link
        href="/school/students"
        className="text-sm font-medium text-slate-700 hover:text-slate-900"
      >
        Students
      </Link>

      <Link
        href="/school/placements"
        className="text-sm font-medium text-slate-700 hover:text-slate-900"
      >
        Placements
      </Link>

      <Link
        href="/school/activity-monitoring"
        className="text-sm font-medium text-slate-700 hover:text-slate-900"
      >
        Activity Monitoring
      </Link>
    </nav>
  );
}