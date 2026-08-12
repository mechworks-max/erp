import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(req) {
  try {
    // Note: Assuming location verification payload is handled here or by middleware
    const { workerId, projectId } = await req.json();

    // Grab the latest open session for this worker at this project
    const activeSession = await prisma.attendance.findFirst({
      where: {
        workerId: workerId,
        projectId: projectId,
        checkOutTime: null,
      },
      orderBy: {
        checkInTime: 'desc',
      },
    });

    if (!activeSession) {
      return NextResponse.json(
        { error: "No active check-in found to check out from." },
        { status: 400 }
      );
    }

    // Stamp the checkout time on the existing log
    const checkOutLog = await prisma.attendance.update({
      where: { id: activeSession.id },
      data: {
        checkOutTime: new Date(), // Standard UTC timestamp
      },
    });

    return NextResponse.json({ success: true, data: checkOutLog }, { status: 200 });
  } catch (error) {
    console.error("Check-out error:", error);
    return NextResponse.json({ error: "Failed to log check-out" }, { status: 500 });
  }
}