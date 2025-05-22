"use client"

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
      <div className="space-y-1 flex items-center gap-2">
        <img
          src="/case.png"
          alt="Work Experience"
          width='24'
          height='24'
          className=""
        />
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
            className="flex py-5.5 px-4 gap-0 items-center rounded-lg bg-gradient"
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
            <Plus className="plus relative right-1 bottom-[1px]" strokeWidth="1.5" />
            <span className="text-[1rem] leading-tight relative right-1">Add Work Experience</span>
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
    <FormField
     control={form.control}
     name={`workExperiences.${index}.position`}
     render={({ field }) => (
      <FormItem>
        <FormLabel>Job title</FormLabel>
        <FormControl>
          <Input
          {...field}
          autoFocus
          />
        </FormControl>
      </FormItem>
     )}
    />
    <FormField
     control={form.control}
     name={`workExperiences.${index}.companyName`}
     render={({ field }) => (
      <FormItem>
        <FormLabel>Company</FormLabel>
        <FormControl>
          <Input
          {...field}
          />
        </FormControl>
      </FormItem>
     )}
    />
    <div className='grid grid-cols-2 gap-3'>
     <FormField
      control={form.control}
      name={`workExperiences.${index}.startDate`}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Start date</FormLabel>
          <FormControl>
            <Input
            {...field}
            type="date"
            value={field.value?.slice(0, 10)}
            />
          </FormControl>
        </FormItem>
      )}
    />
     <FormField
      control={form.control}
      name={`workExperiences.${index}.endDate`}
      render={({ field }) => (
        <FormItem>
          <FormLabel>End date</FormLabel>
          <FormControl>
            <Input
            {...field}
            type='date'
            value={field.value?.slice(0, 10)}
            />
          </FormControl>
        </FormItem>
      )}
     />
    </div>
    <FormDescription>
      Leave <span className='font-semibold'>end date</span> blank if you currently work here
    </FormDescription>
     <FormField
     control={form.control}
     name={`workExperiences.${index}.description`}
     render={({ field }) => (
      <FormItem>
        <FormLabel>Description</FormLabel>
        <FormControl>
          <Textarea
          {...field}
          />
        </FormControl>
      </FormItem>
     )}
    />
    <Button
     type="button"
     variant="destructive"
     className="text-[1rem] leading-tight flex py-5.5 px-4 gap-0 items-center rounded-lg"
     onClick={() => remove(index)}
    >
      Remove
      </Button>
   </div>
  )
}