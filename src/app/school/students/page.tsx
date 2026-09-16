import SchoolNavigation from "@/components/shared/SchoolNavigation";
import { mockStudents } from "@/data/mock";
import Link from "next/link";

export default function SchoolStudentsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <SchoolNavigation />

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div>
          <p className="text-sm font-medium text-slate-500">School</p>

          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            Students
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            View and monitor students within your institution.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border bg-white shadow-sm">
          <div className="border-b p-6">
            <h2 className="font-semibold text-slate-900">
              Student Monitoring
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              View student placement information and academic details.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Matric Number</th>
                  <th className="px-6 py-4 font-medium">University</th>
                  <th className="px-6 py-4 font-medium">Department</th>
                  <th className="px-6 py-4 font-medium">Level</th>
                  <th className="px-6 py-4 font-medium">
                    Placement Company
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {mockStudents.map((student) => (
                  <tr key={student.id} className="text-slate-700">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <Link href={`/school/students/${student.id}`} 
                        className="text-slate-900 hover:underline">
                        {student.name}
                      </Link>
                    </td>

                    <td className="whitespace-nowrap px-6 py-4">
                      {student.matricNumber}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4">
                      {student.university}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4">
                      {student.department}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4">
                      {student.level}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4">
                      {student.placementCompany || "Not placed"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}