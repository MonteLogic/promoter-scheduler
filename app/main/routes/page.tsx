'use server'
import prisma from "#/lib/prismadb";
import { AddRouteComponent } from "#/ui/add-routes-component";
import { type WorkTime, type Employees, type Routes } from '@prisma/client';



export default async function Page() {

  // Here I have to get the id of the employee, the employeeId 
  const initialWorkTime: WorkTime[] = await prisma.workTime.findMany();
  // console.log(initialWorkTime);
  const initialEmployees: Employees[] = await prisma.employees.findMany();
  // console.log(initialEmployees);
  const initialRoutes: Routes[] = await prisma.routes.findMany();

  return (
    <div className="prose prose-sm prose-invert relative z-0 space-y-4  max-w-none">
      {/* <div className="space-y-10 text-white relative z-0"> */}
      <div className="text-xs font-semibold uppercase tracking-wider text-gray-1800">
        <h3>Routes Page, create Route</h3>
        <AddRouteComponent />
      </div>
    </div>
  );
}


