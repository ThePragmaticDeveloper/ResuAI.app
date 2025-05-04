"use client"

import { generalInfoSchema, GeneralInfoValues } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function GeneralInfoForm() {

  const form = useForm<GeneralInfoValues>({
    resolver: zodResolver(generalInfoSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  // const { register, handleSubmit, formState: { errors } } = form;

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="space-y-1 text-center">
        <h2 className="text-2xl font-semibold">General Information</h2>
        <p className="text-sm text-muted-foreground">
          Fill out the general information for your resume.
        </p>
      </div>

      <Form {...form}>
        <form
          className="space-y-3"
          onSubmit={form.handleSubmit((data) => {
            console.log(data);
          })}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Project Name" autoFocus />
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
                  <Input {...field} placeholder="description" />
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
