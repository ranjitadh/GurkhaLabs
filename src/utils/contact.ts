import { prisma } from "@/lib/prisma";
import { ContactFormData } from "@/types/contact";

export async function saveContactMessage(data: ContactFormData) {
  return prisma.contact.create({
    data: {
      name: data.name,
      email: data.email,
      message: data.message || "",
      inquryType: data.inquryType,
      serviceRequired: data.serviceRequired,
    },
  });
}
