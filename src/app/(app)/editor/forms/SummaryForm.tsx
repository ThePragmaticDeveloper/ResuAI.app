
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { EditorFormProps } from "@/lib/types";
import { skillsSchema, SkillsValues, summarySchema, SummaryValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SummaryForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<SummaryValues>({
    resolver: zodResolver(summarySchema),
    defaultValues: {
      summary: resumeData.summary || '',
    },
  });

  useEffect(() => {
    const subscription = form.watch((values) => {
      setResumeData((prevData) => ({
        ...prevData, ...values
      }));
    });
    return () => subscription.unsubscribe();
  }, [form.watch, setResumeData]);

  return (
   <div className="max-w-xl mx-auto space-y-6">
    <div className="space-y-1 flex items-center gap-2">
      <img
        src="/writing_hand.png"
        alt=""
        width='24'
        height='24'
        className=""
      />
      <h2 className="text-3xl">Summary</h2>
    </div>

    <Form {...form}>
      <form
        className="space-y-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Professional summary</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="A brief summary of your professional background, skills, and achievements."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
      </form>
    </Form>
   </div>
  )
}
