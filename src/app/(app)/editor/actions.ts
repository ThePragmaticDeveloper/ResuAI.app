"use server"

import prisma from "@/lib/prisma";
import { resumeSchema, ResumeValues } from "@/lib/validation";
import { auth } from "@clerk/nextjs/server";

export async function saveResumeToDB(values: ResumeValues) {
  const {id} = values;

  console.log("received values:", values);

  const {
    educations,
    workExperiences,
    ...resumeValues
  } = resumeSchema.parse(values);

  const {userId} = await auth()

  if (!userId) {
    throw new Error("User not authenticated");
  }

  // Check resume Count for subscription

  const existingResume = id ?
    await prisma.resume.findUnique({where: {id, userId}})
    : null;

  if(id && !existingResume) {
    throw new Error("Resume not found or you do not have permission to edit it.");
  }

  if(id) {
    // Update existing resume
    return await prisma.resume.update({
      where: { id },
      data: {
        ...resumeValues,
        educations: {
          deleteMany: {},
          create: educations?.map((edu) => ({
            ...edu,
            startDate: edu.startDate ? new Date(edu.startDate) : undefined,
            endDate: edu.endDate ? new Date(edu.endDate) : undefined,
          })),
        },
        workExperiences: {
          deleteMany: {},
          create: workExperiences?.map((exp) => ({
            ...exp,
            startDate: exp.startDate ? new Date(exp.startDate) : undefined,
            endDate: exp.endDate ? new Date(exp.endDate) : undefined,
          })),
        },
        updatedAt: new Date(),
      },
    });
  } else {
    // Create new resume
    return await prisma.resume.create({
      data: {
        ...resumeValues,
        userId,
        educations: {
          create: educations?.map((edu) => ({
            ...edu,
            startDate: edu.startDate ? new Date(edu.startDate) : undefined,
            endDate: edu.endDate ? new Date(edu.endDate) : undefined,
          })),
        },
        workExperiences: {
          create: workExperiences?.map((exp) => ({
            ...exp,
            startDate: exp.startDate ? new Date(exp.startDate) : undefined,
            endDate: exp.endDate ? new Date(exp.endDate) : undefined,
          })),
        },
      },
    });
  }


}