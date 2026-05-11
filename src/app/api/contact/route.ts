import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { InquiryType, ServiceType } from "@prisma/client";


export async function POST(req: Request) {
  try {
    const body: { name: string, inquryType: InquiryType, serviceRequired: ServiceType, email: string, message: string } = await req.json();
    const { name, inquryType, serviceRequired, email, message } = body;

    // Basic validation
    if (!name || !inquryType || !serviceRequired || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Ensure enums are valid
    if (!Object.values(InquiryType).includes(inquryType)) {
      return NextResponse.json(
        { error: "Invalid inquiry type" },
        { status: 400 }
      );
    }

    if (!Object.values(ServiceType).includes(serviceRequired)) {
      return NextResponse.json(
        { error: "Invalid service type" },
        { status: 400 }
      );
    }

    const contact = await prisma.contact.create({
      data: {
        name,
        inquryType,
        serviceRequired,
        email,
        message,
      },
    });

    return NextResponse.json(
      { success: true, contact },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error creating contact:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to save contact";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
