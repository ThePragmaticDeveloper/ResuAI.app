"use client"

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { EditorFormProps } from '@/lib/types';
import { workExperienceSchema, WorkExperienceValues } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

export default function WorkExperienceForm({resumeData, setResumeData}: EditorFormProps) {

  const form = useForm<WorkExperienceValues>({
    resolver: zodResolver(workExperienceSchema),
    defaultValues: {
     workExperiences: resumeData.workExperiences || [],
    },
  });

  useEffect(() => {
   const subscription = form.watch((values) => {
    // setResumeData(prevData => ({
    //   ...prevData,
    //   ...values
    // }));
   })
   return () => subscription.unsubscribe()
  }, [form.watch, setResumeData])

  const { fields, append, remove, move } = useFieldArray({
    control: form.control,
    name: "workExperiences",
  });

  return (
      <div className="max-w-xl mx-auto space-y-6">
        <div className="space-y-1">
          <h2 className="text-3xl">Work Experience</h2>
        </div>
  
        <Form {...form}>
          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            {fields.map((field) => (
              <WorkExperienceItem key={field.id}/>
            ))}
            <div className="flex">
            <Button
              type="button"
              className="flex py-6 px-4 gap-0 items-center bg-gradient rounded-xl"
              onClick={() =>
                append({
                  position: "",
                  companyName: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                })
              }
            >
              <Plus className="w-7 h-7 plus" strokeWidth=".6" />
              <span className="text-lg leading-tight">Add Work Experience</span>
            </Button>
          </div>
            {/* <button type="button" onClick={() => append({ jobTitle: "", company: "" })}>Add Work Experience</button> */}
          </form>
        </Form>
      </div>
      )
}

function WorkExperienceItem() {
  return <div>Work experience item</div>
}