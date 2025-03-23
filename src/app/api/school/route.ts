import { prisma } from "@/lib/prisma";
import { SchoolFormSchema } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { orgId } = await auth();
    if (!orgId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const schoolData = await request.json();
    const result = SchoolFormSchema.safeParse(schoolData);
    if (!result.success) {
      return NextResponse.json({ error: "Validation failed" }, { status: 400 });
    }

    await prisma.school.create({
      data: { ...result.data, orgId },
    });
    return NextResponse.json(
      { message: "School created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating school:", error);
    return NextResponse.json(
      { error: "Failed to create school" },
      { status: 500 }
    );
  }
}
export async function PUT(request: Request) {
  try {
    const { orgId } = await auth();
    if (!orgId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const schoolData = await request.json();
    const result = SchoolFormSchema.safeParse(schoolData);
    if (!result.success) {
      return NextResponse.json({ error: "Validation failed" }, { status: 400 });
    }

    await prisma.school.update({
      where: { orgId },
      data: { ...result.data, orgId },
    });
    return NextResponse.json(
      { message: "School updated successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error updating school:", error);
    return NextResponse.json(
      { error: "Failed to update school" },
      { status: 500 }
    );
  }
}
