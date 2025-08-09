import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const Features = () => (
  <div className="w-full py-20 lg:py-30">
    <div className="container max-w-[90rem] mx-auto px-4">
      <div className="flex gap-4 py-20 lg:py-30 flex-col items-center">
        <div>
          <Badge>Platform</Badge>
        </div>
        <Image src='/hiring.svg' alt="My SVG" width={300} height={300} />
        <div className="flex gap-2 flex-col mt-10">
          <h2 className="text-3xl text-center md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Get Hired Faster!
          </h2>
          <p className="text-lg max-w-xl text-center lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Build your Resume the smart way.
          </p>
        </div>
        {/* <Image src='/resume.svg' alt="My SVG" width={300} height={300} /> */}
        <div className="flex justify-center gap-10 pt-12 flex-col w-full">
          <div className="grid w-fit mx-auto grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="text-left">Easy to use</p>
                <p className="text-muted-foreground text-sm">
                  {/* Craft your application with a simple and intuitive interface. */}
                  We&apos;ve made it easy intuitive & easy to use.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="text-left">ATS-Friendly Design</p>
                <p className="text-muted-foreground text-sm">
                  {/* Our platform is designed to help you create resumes that pass ATS filters. */}
                  We&apos;ve made it easy to create ATS-friendly resumes.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="text-left">Beautiful and modern</p>
                <p className="text-muted-foreground text-sm">
                  We&apos;ve made it beautiful and modern.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="text-left">AI Interview</p>
                <p className="text-muted-foreground text-sm">
                  {/* Our platform is designed to help you create resumes that pass ATS filters. */}
                  Connect with our AI Agent for Tailored interview prep.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="text-left">Premium Templates</p>
                <p className="text-muted-foreground text-sm">
                  Get access to our premium templates with the Pro plan.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="text-left">AI Cover Letter</p>
                <p className="text-muted-foreground text-sm">
                  Generate a cover letter with our AI-powered tool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);