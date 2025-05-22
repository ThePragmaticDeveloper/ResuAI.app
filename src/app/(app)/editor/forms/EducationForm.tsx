"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EditorFormProps } from "@/lib/types";
import { educationSchema, EducationValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { GripHorizontal, Plus } from "lucide-react";
import { useEffect } from "react";
import { useFieldArray, useForm, UseFormReturn } from "react-hook-form";

export default function EducationForm({resumeData, setResumeData}: EditorFormProps) {
  
  const form = useForm<EducationValues>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      educations: resumeData.educations || [],
    },
  });
  
  useEffect(() => {
    const subscription = form.watch((values) => {
    setResumeData(prevData => ({
      ...prevData,
      educations: values.educations?.filter(edu => edu !== undefined) || [],
    }));
    })
    return () => subscription.unsubscribe()
  }, [form.watch, setResumeData])
  
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "educations",
  });

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="space-y-1 flex items-center gap-2">
        <img
          src="/cap.png"
          alt="Education"
          width='24'
          height='24'
          className=""
        />
        <h2 className="text-3xl">Education</h2>
      </div>

      <Form {...form}>
        <form
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          {fields.map((field, index) => (
            <EducationItem
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
                degree: "",
                schoolName: "",
                startDate: "",
                endDate: "",
              })
            }
          >
            <Plus className="plus relative right-1 bottom-[1px]" strokeWidth="1.5" />
            <span className="text-[1rem] leading-tight relative right-1">Add Education</span>
          </Button>
        </div>
        </form>
      </Form>
    </div>
    )
  
}

interface EducationItemProps {
  form: UseFormReturn<EducationValues>;
  index: number;
  remove: (index: number) => void;
}


function EducationItem({form, index, remove}: EducationItemProps) {
  return (
   <div className='space-y-3 border rounded-md bg-background p-3'>
    <div className='flex justify-between items-center gap-2'>
      <span className=''>Education {index + 1}</span>
      <GripHorizontal className='size-5 cursor-grab text-muted-foreground' />
    </div>
    <FormField
     control={form.control}
     name={`educations.${index}.degree`}
     render={({ field }) => (
      <FormItem>
        <FormLabel>Degree</FormLabel>
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
     name={`educations.${index}.schoolName`}
     render={({ field }) => (
      <FormItem>
        <FormLabel>School</FormLabel>
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
      name={`educations.${index}.startDate`}
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
      name={`educations.${index}.endDate`}
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
