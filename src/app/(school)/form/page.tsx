"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import SchoolForm from "./SchoolForm";

export default async function School() {
  const { orgId } = await auth();
  if (!orgId) return;
  const school = await prisma.school.findFirst({ where: { orgId } });
  const mode = school ? "edit" : "create";

  const defaultValues = {
    name: school?.name || "",
    description: school?.description || "",
    address: school?.address || "",
    country: school?.country || "",
    state: school?.state || "",
    city: school?.city || "",
    phone: school?.phone || "",
  };

  return <SchoolForm defaultValues={defaultValues} mode={mode} orgId={orgId} />;
}
