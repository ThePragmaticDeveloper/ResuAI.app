"use client"

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { EditorFormProps } from '@/lib/types';
import { workExperienceSchema, WorkExperienceValues } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { GripHorizontal, Plus } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { useFieldArray, useForm, UseFormReturn } from 'react-hook-form';

export default function WorkExperienceForm({resumeData, setResumeData}: EditorFormProps) {

  const form = useForm<WorkExperienceValues>({
    resolver: zodResolver(workExperienceSchema),
    defaultValues: {
     workExperiences: resumeData.workExperiences || [],
    },
  });

  useEffect(() => {
   const subscription = form.watch((values) => {
    setResumeData(prevData => ({
      ...prevData,
      workExperiences: values.workExperiences?.filter(exp => exp !== undefined) || [],
    }));
   })
   return () => subscription.unsubscribe()
  }, [form.watch, setResumeData])

  const { fields, append, remove } = useFieldArray({
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
          {fields.map((field, index) => (
            <WorkExperienceItem
              key={field.id}
              index={index}
              form={form}
              remove={remove}
            />
          ))}
          <div className="flex">
          <Button
            type="button"
            className="flex py-5.5 px-4 gap-0 items-center"
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
            <span className="text-[1rem] leading-tight">Add Work Experience</span>
          </Button>
        </div>
          {/* <button type="button" onClick={() => append({ jobTitle: "", company: "" })}>Add Work Experience</button> */}
        </form>
      </Form>
    </div>
    )
}

interface WorkExperienceItemProps {
  form: UseFormReturn<WorkExperienceValues>;
  index: number;
  remove: (index: number) => void;
}


function WorkExperienceItem({form, index, remove}: WorkExperienceItemProps) {
  return (
   <div className='space-y-3 border rounded-md bg-background p-3'>
    <div className='flex justify-between items-center gap-2'>
      <span className=''>Work Experience {index + 1}</span>
      <GripHorizontal className='size-5 cursor-grab text-muted-foreground' />
    </div>
   </div>
  )
}