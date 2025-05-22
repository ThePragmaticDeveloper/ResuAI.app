import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { EditorFormProps } from "@/lib/types";
import { skillsSchema, SkillsValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SkillsForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<SkillsValues>({
    resolver: zodResolver(skillsSchema),
    defaultValues: {
      skills: resumeData.skills || [],
    },
  });

  useEffect(() => {
    const subscription = form.watch((values) => {
      setResumeData((prevData) => ({
        ...prevData,
        skills:
          values.skills
            ?.filter((skill) => skill !== undefined)
            .map((skill) => skill.trim())
            .filter((skill) => skill !== "") || [],
      }));
    });
    return () => subscription.unsubscribe();
  }, [form.watch, setResumeData]);

  return (
   <div className="max-w-xl mx-auto space-y-6">
    <div className="space-y-1 flex items-center gap-2">
      <img
        src="/skills.png"
        alt="Skills"
        width='24'
        height='24'
        className=""
      />
      <h2 className="text-3xl">Skills</h2>
    </div>

    <Form {...form}>
      <form
        className="space-y-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Skills</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="E.g. JavaScript, React, Node.js"
                  // className="w-[30rem] text-xl! shadow-none outline-none border-none focus-visible:ring-0 focus-visible:border-none px-0 bg-transparent!"
                  onChange={(e) => {
                    const skills = e.target.value.split(",");
                    field.onChange(skills);
                  }}
                />
              </FormControl>
              <FormDescription className="mt-2">
                Separate each skill with a comma
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
      </form>
    </Form>
   </div>
  )
}
