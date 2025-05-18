import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { generalInfoSchema, GeneralInfoValues } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';

export default function TitleForm() {

  const form = useForm<GeneralInfoValues>({
      resolver: zodResolver(generalInfoSchema),
      defaultValues: {
        title: "",
        description: "",
      },
    });

  return (
      <div className="max-w-xl mx-auto space-y-6">
  
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
                  {/* <FormLabel>Project Name</FormLabel> */}
                  <FormControl>
                    <Input
                    {...field}
                    placeholder="Project Name"
                    className="w-[30rem] text-xl! shadow-none outline-none border-none focus-visible:ring-0 focus-visible:border-none px-0 bg-transparent!"
                    // onChange={handleInputChange("title")}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
          </form>
        </Form>
      </div>
    )
  }
