import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
  const { orgId } = await auth();
  if (!orgId) return;
  const school = await prisma.school.findFirst({ where: { orgId } });

  // Check if school exists
  if (!school) {
    return (
      <div className="flex flex-col justify-center items-center flex-1 italic text-xl">
        <p>
          No school found for this organization.{" "}
          <Link href={"/form"} className="text-violet-400">
            Please create one
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="px-2">
      <div className="py-2">
        <Link href={"/form"} className="text-violet-400">
          Edit
        </Link>
      </div>
      <Card className="rounded-xs">
        <CardHeader>
          <CardTitle>Updated Details</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="font-normal">Name: {school.name}</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="font-normal">
                Description: {school.description}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="font-normal">Address: {school.address}</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="font-normal">Country: {school.country}</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="font-normal">
                State/Province: {school.state}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="font-normal">City: {school.city}</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="font-normal">Phone Number: {school.phone}</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
