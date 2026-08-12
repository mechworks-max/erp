import { NextResponse } from 'next/server';
import prisma from '@/lib/db'; 

export async function POST(req) {
  try {
    const { workerId, projectId } = await req.json();

    // Find if the worker already has an active, unclosed session at this project
    const openSession = await prisma.attendance.findFirst({
      where: {
        workerId: workerId,
        projectId: projectId,
        checkOutTime: null,
      },
    });

    if (openSession) {
      return NextResponse.json(
        { error: "Worker already has an active check-in." },
        { status: 400 }
      );
    }

    // Create a fresh log entry for this specific check-in
    const checkInLog = await prisma.attendance.create({
      data: {
        workerId,
        projectId,
        checkInTime: new Date(), // Standard UTC timestamp
      },
    });

    return NextResponse.json({ success: true, data: checkInLog }, { status: 200 });
  } catch (error) {
    console.error("Check-in error:", error);
    return NextResponse.json({ error: "Failed to log check-in" }, { status: 500 });
  }
}