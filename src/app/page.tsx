import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-50">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-slate-900">SIWESFlow Local Dev</h1>
        <p className="text-slate-600">You are working on the Supervisor Portal.</p>
        <Link 
          href="/supervisor/dashboard"
          className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
        >
          Go to Supervisor Dashboard &rarr;
        </Link>
      </div>
    </div>
  );
}