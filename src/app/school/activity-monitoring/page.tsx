import SchoolNavigation from "@/components/shared/SchoolNavigation";

export default function SchoolActivityMonitoringPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <SchoolNavigation />

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div>
          <p className="text-sm font-medium text-slate-500">School</p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            Activity Monitoring
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Track student activity and identify students who may need
            attention.
          </p>
        </div>

        <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900">
            Activity Monitoring
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Student activity monitoring information will appear here.
          </p>
        </div>
      </section>
    </main>
  );
}