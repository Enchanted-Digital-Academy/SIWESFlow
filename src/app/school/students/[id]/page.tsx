import Link from "next/link";
import { notFound } from "next/navigation";

import SchoolNavigation from "@/components/shared/SchoolNavigation";
import { mockActivityLogs, mockStudents } from "@/data/mock";

type StudentProfilePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function StudentProfilePage({
  params,
}: StudentProfilePageProps) {
  const { id } = await params;

  const student = mockStudents.find(
    (mockStudent) => mockStudent.id === id,
  );

  if (!student) {
    notFound();
  }

  const studentActivities = mockActivityLogs.filter(
    (activityLog) => activityLog.studentId === student.id,
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <SchoolNavigation />

      <section className="mx-auto max-w-5xl px-6 py-8">
        <Link
          href="/school/students"
          className="text-sm font-medium text-slate-600 hover:underline"
        >
          ← Back to Students
        </Link>

        <div className="mt-6">
          <p className="text-sm font-medium text-slate-500">
            Student Profile
          </p>

          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            {student.name}
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            {student.matricNumber}
          </p>
        </div>

        <section className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900">
            Student Information
          </h2>

          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-slate-500">University</dt>
              <dd className="mt-1 font-medium text-slate-900">
                {student.university}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-slate-500">Department</dt>
              <dd className="mt-1 font-medium text-slate-900">
                {student.department}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-slate-500">Level</dt>
              <dd className="mt-1 font-medium text-slate-900">
                {student.level}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-slate-500">Placement Company</dt>
              <dd className="mt-1 font-medium text-slate-900">
                {student.placementCompany || "Not placed"}
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900">
            Activities
          </h2>

          {studentActivities.length === 0 ? (
            <p className="mt-3 text-sm text-slate-600">
              No activity logs available for this student.
            </p>
          ) : (
            <div className="mt-4 space-y-4">
              {studentActivities.map((activityLog) => (
                <article
                  key={activityLog.id}
                  className="rounded-lg border p-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-medium text-slate-900">
                      {activityLog.title}
                    </h3>

                    <span className="text-sm text-slate-500">
                      {activityLog.date}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-600">
                    {activityLog.description}
                  </p>

                  <p className="mt-2 text-sm text-slate-600">
                    Hours worked: {activityLog.hoursWorked}
                  </p>

                  <p className="mt-2 text-sm text-slate-600">
                    Status: {activityLog.status}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}