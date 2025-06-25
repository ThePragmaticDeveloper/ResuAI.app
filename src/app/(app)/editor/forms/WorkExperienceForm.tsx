"use client"

import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { EditorFormProps } from '@/lib/types';
import { workExperienceSchema, WorkExperienceValues } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { GripHorizontal, Plus } from 'lucide-react';
import React, { useEffect } from 'react';
import { useFieldArray, useForm, UseFormReturn } from 'react-hook-form';
import { cn } from "@/lib/utils";

export default function WorkExperienceForm({resumeData, setResumeData}: EditorFormProps) {

  const form = useForm<WorkExperienceValues>({
    resolver: zodResolver(workExperienceSchema),
    defaultValues: {
     workExperiences: resumeData.workExperiences || [],
    },
  });

  useEffect(() => {
  const subscription = form.watch((values) => {
    const nonEmptyExperiences = values.workExperiences?.filter((exp) => {
      // Return true if at least one field is not empty
      return Object.values(exp || {}).some((field) => {
        return typeof field === "string" ? field.trim() !== "" : !!field;
      });
    });

    // Only update resumeData if there's at least one non-empty education
    if (nonEmptyExperiences && nonEmptyExperiences.length > 0) {
      setResumeData((prevData) => ({
        ...prevData,
        workExperiences: nonEmptyExperiences.filter((exp): exp is NonNullable<typeof exp> => !!exp),
      }));
    }
  });

  return () => subscription.unsubscribe();
  }, [form.watch, setResumeData]);

  // useEffect(() => {
  //  const subscription = form.watch((values) => {
  //   setResumeData(prevData => ({
  //     ...prevData,
  //     workExperiences: values.workExperiences?.filter(exp => exp !== undefined) || [],
  //   }));
  //  })
  //  return () => subscription.unsubscribe()
  // }, [form.watch, setResumeData])

  const { fields, append, remove, move } = useFieldArray({
    control: form.control,
    name: "workExperiences",
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = fields.findIndex((field) => field.id === active.id);
      const newIndex = fields.findIndex((field) => field.id === over.id);
      move(oldIndex, newIndex);
      return arrayMove(fields, oldIndex, newIndex);
    }
  }

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
      <form className="space-y-3">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis]}
        >
          <SortableContext
            items={fields}
            strategy={verticalListSortingStrategy}
          >
          {fields.map((field, index) => (
            <WorkExperienceItem
              id={field.id}
              key={field.id}
              index={index}
              form={form}
              remove={remove}
            />
          ))}
         </SortableContext>
        </DndContext>
          <div className="flex">
          <Button
            type="button"
            className="flex py-5.5 px-4 gap-0 items-center rounded-lg btn-gradient"
            onClick={() =>
              append({
                position: "",
                company: "",
                startDate: "",
                endDate: "",
                description: "",
              })
            }
          >
            {/* <Plus className="plus relative right-1 bottom-[1px]" strokeWidth="1.5" /> */}
            <span className="text-[1rem] leading-tight">Add Work Experience</span>
          </Button>
        </div>
        </form>
      </Form>
    </div>
    )
}

interface WorkExperienceItemProps {
  id: string;
  form: UseFormReturn<WorkExperienceValues>;
  index: number;
  remove: (index: number) => void;
}


function WorkExperienceItem({id, form, index, remove}: WorkExperienceItemProps) {
  
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });
  
  return (
  //  <div className='space-y-3 border rounded-md bg-background p-3'>
   <div
    className={cn(
        "space-y-3 rounded-md border bg-background p-3",
        isDragging && "relative z-50 cursor-grab shadow-xl",
      )}
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
   >
    <div className='flex justify-between items-center gap-2'>
      <span className=''>Work Experience {index + 1}</span>
      <GripHorizontal
        className="size-5 cursor-grab text-muted-foreground focus:outline-none"
        {...attributes}
        {...listeners}
      />
      {/* <GripHorizontal className='size-5 cursor-grab text-muted-foreground' /> */}
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
     name={`workExperiences.${index}.company`}
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