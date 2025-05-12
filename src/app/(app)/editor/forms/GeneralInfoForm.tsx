"use client"

import { generalInfoSchema, GeneralInfoValues, ResumeValues } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { EditorFormProps } from "@/lib/types";

export default function GeneralInfoForm({resumeData, setResumeData}: EditorFormProps) {

  const form = useForm<GeneralInfoValues>({
    resolver: zodResolver(generalInfoSchema),
    defaultValues: {
      title: resumeData.title || "",
      description: resumeData.description || "",
    },
  });
  
  const handleInputChange = (fieldName: keyof GeneralInfoValues) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      form.setValue(fieldName, e.target.value); // RHF state
      setResumeData((prev) => ({
        ...prev,
        [fieldName]: e.target.value, // update parent state
      }));
    };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="space-y-1">
        <h2 className="text-3xl">General Information</h2>
      </div>

      <Form {...form}>
        <form
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Name</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  // placeholder="Project Name"
                  onChange={handleInputChange("title")}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                   {...field}
                  //  placeholder="Description"
                   onChange={handleInputChange("description")}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {/* <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Save</button> */}
        </form>
      </Form>
    </div>
  )
}
