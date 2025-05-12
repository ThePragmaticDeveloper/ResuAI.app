"use client"

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { EditorFormProps } from '@/lib/types'
import { personalInfoSchema, PersonalInfoValues, ResumeValues } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function PersonalInfoForm({resumeData, setResumeData}: EditorFormProps) {

  const form = useForm<PersonalInfoValues>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: resumeData.firstName || "",
      lastName: resumeData.lastName || "",
      jobTitle: resumeData.jobTitle || "",
      city: resumeData.city || "",
      country: resumeData.country || "",
      phone: resumeData.phone || "",
      email: resumeData.email || "",
    },
  })

  const handleInputChange = (fieldName: keyof PersonalInfoValues) => 
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
        <h2 className="text-3xl">Personal Info</h2>
      </div>

      <Form {...form}>
        <form
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className='grid grid-cols-2 gap-3'>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  onChange={handleInputChange("firstName")}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  onChange={handleInputChange("lastName")}
                  />
                </FormControl>
              </FormItem>
            )}
          />
         </div>
         <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input
                   {...field}
                   onChange={handleInputChange("jobTitle")}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className='grid grid-cols-2 gap-3'>
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input
                   {...field}
                    onChange={handleInputChange("city")}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input
                   {...field}
                   onChange={handleInputChange("country")}
                  />
                </FormControl>
              </FormItem>
            )}
          />
         </div>
         <div className='grid grid-cols-2 gap-3'>
         <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                   {...field}
                   type='tel'
                   onChange={handleInputChange("phone")}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                   {...field}
                   type='email'
                   onChange={handleInputChange("email")}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          </div>
        </form>
      </Form>
    </div>
    )
}
